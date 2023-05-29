import Layout from '@/components/Layout';
import { fetchToken } from '@/helpers/getToken';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Redirect() {
    const router = useRouter();

    useEffect(() => {
        const { code } = router.query;

        if (code) {
            const fetchData = async () => {
                try {
                    try {

                        let data = await fetchToken(code)

                        console.log("redirect", data);

                        if (data.error) {
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

                } catch (error) {
                    console.error('Error al enviar la solicitud:', error);
                }
            };

            fetchData();
        }
    }, [router.query]);

    return (
        <Layout>
            <main className='flex flex-col items-center justify-center'>
                Validando inicio sesión...
            </main>
        </Layout>
    );
}
