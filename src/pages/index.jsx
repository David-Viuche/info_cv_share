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

      console.log(currentToken)

      if (currentToken.error) {
        return setUser(null)
      }

      const user = await fetchUserData(currentToken)

      let newUser = {
        photo: user.photo,
        name: user.name
      }

      setUser(newUser)

      console.log(newUser)

    }

    fetchData()

  }, [])

  const handleOnclick = () => {
    deleteToken()
    setUser(null)
  }

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-full flex-col sm:flex-row">
        <img src="/cv_ilustration.svg" alt="ilustracion de infojobs" className="w-4/5 sm:max-w-xl" />
        {
          user ?
            <div>

              <h1>
                {`Usuario: ${user.name}`}
              </h1>

              <button onClick={handleOnclick} className="bg-red-500 p-2 rounded-md text-white hover:bg-red-300">Cerrar Sesión</button>

            </div>
            : <Login />
        }
      </main>
    </Layout>
  );
}
