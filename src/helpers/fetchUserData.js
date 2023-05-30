export const fetchUserData = async (token) => {
    let response

    response = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    });

    const data = await response.json();

    if (data?.error) {
        throw new Error('Network response was not ok');
    }

    return data
}