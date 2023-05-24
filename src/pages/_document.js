import { Header } from '@/components/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <Header>
        <h1 className='text-xl '>
          Infojobs CV generator
        </h1>
      </Header>
      <body className='text-slate-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
