export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token } = req.body;

        if (token) {
            const urlToken = 'https://api.infojobs.net/api/2/curriculum';

            try {
                const credentials = `${process.env.NEXT_PUBLIC_CLIENT_ID}:${process.env.NEXT_PUBLIC_CLIENT_SECRET}`;
                const encodedCredentials = Buffer.from(credentials).toString('base64');
                const authHeader = `Basic ${encodedCredentials}, Bearer ${token}`;

                let myHeaders = new Headers();
                myHeaders.append("Authorization", authHeader);

                let requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow'
                };

                const response = await fetch(urlToken, requestOptions);

                const data = await response.json();
                console.log(data);

                if (data?.error) {
                    res.status(200).json({ token: false, ...data });
                } else {
                    res.status(200).json({ token: true, ...data });
                }
            } catch (error) {
                console.log('Error fetching data:', error);
                res.status(500).json({ error: 'Error fetching data' });
            }
        } else {
            res.status(400).json({ error: 'Missing token' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
