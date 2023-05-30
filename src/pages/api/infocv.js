export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token } = req.body;

        if (token) {
            const urlFetch = 'https://api.infojobs.net/api/2/curriculum';

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

                const response = await fetch(urlFetch, requestOptions);

                let data = await response.json();

                const cv_id = data[0]?.code //66acaa5a-8a11-4470-a8b7-be03adc196f5

                const urlFetchLanguajes = `https://api.infojobs.net/api/2/curriculum/${cv_id}/skill`

                const responseSkill = await fetch(urlFetchLanguajes, requestOptions);

                data = await responseSkill.json();

                const languajes = data?.language

                const urlFetchPersonalData = `https://api.infojobs.net/api/2/curriculum/${cv_id}/personaldata`

                const responsePData = await fetch(urlFetchPersonalData, requestOptions);

                data = await responsePData.json();

                const personalData = data

                const urlFetchFutureJob = `https://api.infojobs.net/api/2/curriculum/${cv_id}/futurejob`

                const responseFuture = await fetch(urlFetchFutureJob, requestOptions);

                data = await responseFuture.json();

                const futureJob = data

                const urlFetchExperience = `https://api.infojobs.net/api/2/curriculum/${cv_id}/experience`

                const responseExperience = await fetch(urlFetchExperience, requestOptions);

                data = await responseExperience.json();

                const experience = data?.experience?.[0]

                const urlFetchEducation = `https://api.infojobs.net/api/1/curriculum/${cv_id}/education`

                const responseEducation = await fetch(urlFetchEducation, requestOptions);

                data = await responseEducation.json();

                const education = data?.education


                let respuesta = {
                    languages: languajes,
                    name: `${personalData?.name} ${personalData?.surname1}`,
                    country: personalData?.country,
                    province: personalData?.province,
                    country_province: `${personalData?.country}, ${personalData?.province}`,
                    mobile_phone: personalData?.internationalPhone,
                    web_pages: personalData?.webpages?.[0]?.url || '',
                    freelance: (personalData?.freelance) ? 'Disponible' : 'No disponible',
                    nationalities: personalData?.nationalities?.[0] || '',
                    workPermits: personalData?.workPermits?.[0] || '',
                    preferredPosition: futureJob?.preferredPosition,
                    company: experience?.company || '',
                    job: experience?.job || '',
                    startingDate_experience: experience?.startingDate || '',
                    finishingDate_experience: experience?.finishingDate || '',
                    description: experience?.description || '',
                    educationLevelCode: education?.[0]?.educationLevelCode || '',
                    courseName: education?.[0]?.courseCode || '',
                    startingDate_education: education?.[0]?.startingDate || '',
                    finishingDate_education: education?.[0]?.finishingDate || '',
                    institutionName: education?.[0]?.institutionName || '',

                }

                res.status(200).json(respuesta);
            } catch (error) {
                console.log(' 2 Error fetching data:', error);
                res.status(500).json({ error: ' 3 Error fetching data' });
            }
        } else {
            res.status(400).json({ error: 'Missing token' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
