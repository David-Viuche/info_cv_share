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

                const experience = data

                const urlFetchEducation = `https://api.infojobs.net/api/1/curriculum/${cv_id}/education`

                const responseEducation = await fetch(urlFetchEducation, requestOptions);

                data = await responseEducation.json();

                const education = data?.education


                let respuesta = {
                    languages: languajes,
                    personalData: [{
                        name: `${personalData?.name} ${personalData?.surname1}`,
                        country: personalData?.country,
                        province: personalData?.province,
                        country_province: `${personalData?.country}, ${personalData?.province}`,
                        mobile_phone: personalData?.internationalPhone,
                        web_pages: personalData?.webpages,
                        freelance: (personalData?.freelance) ? 'Disponible' : 'No disponible',
                        nationalities: personalData?.nationalities?.[0] || '',
                        workPermits: personalData?.workPermits?.[0] || '',
                    }],
                    futureJob: [{
                        preferredPosition: futureJob?.preferredPosition,
                    }
                    ],

                    experience: experience.experience.map(el => {
                        return {
                            company: el?.company || '',
                            job: el?.job || '',
                            startingDate_experience: new Date(el?.startingDate || '').toISOString().slice(0, 10),
                            finishingDate_experience: new Date(el?.finishingDate || '').toISOString().slice(0, 10),
                            description: el?.description || '',
                        }
                    }),
                    education: education.map(el => {
                        return {
                            educationLevelCode: el?.educationLevelCode || '',
                            courseName: el?.courseCode || '',
                            startingDate_education: new Date(el?.startingDate || '').toISOString().slice(0, 10),
                            finishingDate_education: new Date(el?.finishingDate || '').toISOString().slice(0, 10),
                            institutionName: el?.institutionName || '',
                        }
                    }),



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
