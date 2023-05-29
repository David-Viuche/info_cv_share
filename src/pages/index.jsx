import Layout from "@/components/Layout";
import { Login } from "@/components/Login";
import { fetchUserData } from "@/helpers/fetchUserData";
import { deleteToken, getToken } from "@/helpers/getToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from 'sonner';

export default function Home() {

  const router = useRouter();
  const [errorState, setErrorState] = useState(null);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    const { error } = router.query;

    if (error) {
      setErrorState(error);
      setIsErrorShown(true);
      router.push('/')
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


  useEffect(() => {

    const fetchData = async () => {

      const currentToken = await getToken()

      if (currentToken.error) {
        return setUser(null)
      }

      const user = await fetchUserData(currentToken)

      let newUser = {
        photo: user.photo,
        name: user.name
      }

      setUser(newUser)

    }

    fetchData()

  }, [])

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-full flex-col sm:flex-row">
        <img src="/cv_ilustration.svg" alt="ilustracion de infojobs" className="w-4/5 sm:max-w-xl" />
        {
          user ?
            <div className="flex flex-col items-center justify-center gap-4">

              <h1 className="text-2xl">
                {`Hola! ${user.name}`}
              </h1>

            </div>
            : <Login />
        }
      </main>
    </Layout>
  );
}
