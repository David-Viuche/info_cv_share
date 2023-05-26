import Layout from '@/components/Layout';
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
                router.push('/');
            }

            setCode(codeValue)

        } else if (!code) {
            router.push('/');
        }
    }, [router]);


    useEffect(() => {

        if (code) {
            const fetchData = async (code) => {
                try {
                    const response = await fetch('/api/token', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ code }),
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    console.log(data);

                    if (data.error) {
                        const error = 'Error en inicio de sesion. Intente de nuevo.';
                        const encodedError = encodeURIComponent(error);
                        const url = `/?error=${encodedError}`;
                        window.location.href = url;

                    }

                } catch (error) {
                    console.log('Error fetching data:', error);
                }
            };

            fetchData(code)
        }

    }, [code])

    return (
        <Layout>
            <main className='flex flex-col items-center justify-center'>
                Validando inicio sesión...
            </main>
        </Layout>
    );
}
