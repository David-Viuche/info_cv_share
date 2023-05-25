import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className='text-slate-500 flex flex-col'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
