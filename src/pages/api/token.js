export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { code } = req.body;

        if (code) {
            const urlToken = `https://www.infojobs.net/oauth/authorize?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${encodeURIComponent(process.env.NEXT_PUBLIC_CLIENT_SECRET)}&code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}`;

            try {
                const response = await fetch(urlToken, { method: 'POST' });
                const data = await response.json();
                //console.log(data);
                res.status(200).json(data);
            } catch (error) {
                console.log(' 2 Error fetching data:', error);
                res.status(500).json({ error: ' 3 Error fetching data' });
            }
        } else {
            res.status(400).json({ error: 'Missing code' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
