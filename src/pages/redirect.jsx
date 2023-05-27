import Layout from '@/components/Layout';
import { fetchToken } from '@/helpers/getToken';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Redirect() {
    const router = useRouter();
    const [code, setCode] = useState(null)

    useEffect(() => {
        const { code } = router.query;

        if (!code && router.asPath.includes('?code=')) {

            const queryString = router.asPath.split('?')[1];
            const params = new URLSearchParams(queryString);
            const codeValue = params.get('code');

            if (!codeValue) {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                router.push('/');
            }

            setCode(codeValue)

        } else if (!code) {
            sessionStorage.removeItem('access_token');
            sessionStorage.removeItem('refresh_token');
            router.push('/');
        }
    }, [router]);


    useEffect(() => {

        if (code) {
            const fetchData = async (code) => {
                try {

                    let data = await fetchToken(code)

                    console.log("redirect", data);

                    if (!data?.access_token) {
                        const error = 'Error en inicio de sesion. Intente de nuevo.';
                        const encodedError = encodeURIComponent(error);
                        const url = `/?error=${encodedError}`;
                        sessionStorage.removeItem('access_token');
                        sessionStorage.removeItem('refresh_token');
                        window.location.href = url;
                    }

                    sessionStorage.setItem('access_token', data?.access_token);
                    sessionStorage.setItem('refresh_token', data?.refresh_token);

                    router.push('/')

                } catch (error) {
                    console.log('Error fetching data:', error);
                }
            };

            fetchData(code)
        }

    }, [code, router])

    return (
        <Layout>
            <main className='flex flex-col items-center justify-center'>
                Validando inicio sesión...
            </main>
        </Layout>
    );
}
