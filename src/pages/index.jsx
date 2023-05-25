import Layout from "@/components/Layout";
import { Login } from "@/components/Login";

export default function Home() {
  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-full flex-col sm:flex-row">
        <img src="/cv_ilustration.svg" alt="ilustracion de infojobs" className="w-4/5 sm:max-w-xl" />
        <Login />
      </main>
    </ Layout>
  )
}
