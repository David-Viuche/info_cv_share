export const fetchToken = async (code) => {
    let response

    response = await fetch('/api/token', {
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

    return data
}

export const getToken = async () => {
    let access_token = sessionStorage.getItem('access_token');
    let refresh_token = sessionStorage.getItem('refresh_token');

    if (!access_token || !refresh_token) {
        return {
            "error": "No se ha iniciado sesion"
        }
    }

    let response

    response = await fetch('/api/validateToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: access_token }),
    });

    let data = await response.json();

    if (!data?.token) {

        response = await fetch('/api/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh_token: refresh_token }),
        });

        data = await response.json();

        if (data?.error) {
            sessionStorage.removeItem('access_token');
            sessionStorage.removeItem('refresh_token');
            return {
                "error": "No se ha iniciado sesion"
            }
        }

        sessionStorage.setItem('access_token', data?.access_token);
        sessionStorage.setItem('refresh_token', data?.refresh_token);

    }

    access_token = sessionStorage.getItem('access_token');

    return access_token
}

export const deleteToken = async () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('refresh_token');
}