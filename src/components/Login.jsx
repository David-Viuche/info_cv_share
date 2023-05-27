export const Login = () => {

    const href = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=${process.env.NEXT_PUBLIC_SCOPE}&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

    return (
        <div className="flex flex-col gap-10">
            <h1>Visualiza tu CV fácil y rápido, empieza ahora</h1>
            <a href={href} className="flex p-4 gap-2 justify-center items-center bg-gray-500 hover:bg-gray-400 text-white rounded-3xl">
                <img src="/info_jobs_logo.svg" alt="logo de infojobs" className="w-12" />
                Login con Infojobs
            </a>
        </div>
    )
}