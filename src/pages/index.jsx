import Layout from "@/components/Layout";
import { Login } from "@/components/Login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from 'sonner';

export default function Home() {
  const router = useRouter();
  const [errorState, setErrorState] = useState(null);
  const [isErrorShown, setIsErrorShown] = useState(false);

  useEffect(() => {
    const { error } = router.query;

    if (error) {
      setErrorState(error);
      setIsErrorShown(true);
    }

  }, [router]);

  useEffect(() => {
    if (errorState && isErrorShown) {
      showError(errorState);
    }
  }, [errorState, isErrorShown]);

  const showError = (msg) => {
    toast.error(msg, {
      style: {
        background: '#E93E40',
        color: 'white'
      }
    });
  };

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-full flex-col sm:flex-row">
        <img src="/cv_ilustration.svg" alt="ilustracion de infojobs" className="w-4/5 sm:max-w-xl" />
        <Login />
      </main>
    </Layout>
  );
}
