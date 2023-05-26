import Layout from "@/components/Layout";
import { Login } from "@/components/Login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from 'sonner';

export default function Home() {

  const router = useRouter();
  const [errorState, setError] = useState(null)

  useEffect(() => {
    const { error } = router.query;

    if (!error && router.asPath.includes('?error=')) {

      const queryString = router.asPath.split('?')[1];
      const params = new URLSearchParams(queryString);
      const errorValue = params.get('error');

      if (!errorValue) {
        router.push('/');
      }

      setError(errorValue)

      if (errorState) {
        showError(errorValue)
      }

    } else if (!error) {
      router.push('/');
    }
  }, [errorState, router]);


  const showError = (msg) => toast.error(msg, {
    style: {
      background: '#E93E40',
      color: 'white'
    }
  })

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-full flex-col sm:flex-row">
        <img src="/cv_ilustration.svg" alt="ilustracion de infojobs" className="w-4/5 sm:max-w-xl" />
        <Login />
      </main>
    </ Layout>
  )
}
