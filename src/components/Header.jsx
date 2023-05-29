import { useEffect, useState } from 'react'
import { HeaderLink } from './HeaderLink'
import { AiOutlineCloseSquare } from 'react-icons/ai/index.js'
import { TfiMenuAlt } from 'react-icons/tfi/index.js'
import { deleteToken, getToken } from "@/helpers/getToken";
import { fetchUserData } from "@/helpers/fetchUserData";

export const Header = ({ children }) => {
    const [isOpen, setisOpen] = useState(false)
    const [user, setUser] = useState(null)

    function handleOnclick() {
        setisOpen(open => !open)
    }

    useEffect(() => {

        const fetchData = async () => {

            const currentToken = await getToken()

            if (currentToken.error) {
                return setUser(null)
            }

            const user = await fetchUserData(currentToken)

            let newUser = {
                photo: user.photo,
                name: user.name
            }

            setUser(newUser)

        }

        fetchData()

    }, [])

    const handleOnclickCerrarSesion = () => {
        deleteToken()
        setUser(null)
    }

    return (
        <header className='bg-white text-lg flex flex-col w-full h-auto sm:flex-row sm:justify-around sm:h-auto'>
            <div className='flex justify-between items-center p-3'>
                <HeaderLink href='/' ariaLabel='redirección a la página principal'>{children}</HeaderLink>
                <div onClick={handleOnclick} className='sm:hidden'>
                    {
                        (isOpen)
                            ? <AiOutlineCloseSquare className='w-8 h-8' />
                            : <TfiMenuAlt className='w-8 h-8' />
                    }
                </div>
            </div>
            <nav className={`bg-white z-10 shadow-sm sm:shadow-none border-b-2 sm:border-none absolute p-5 top-20 inset-x-0 transition transform origin-top-right ${(!isOpen) && 'hidden'} sm:block  sm:relative sm:top-0`}>
                <ul className='flex flex-col justify-center items-center gap-5 text-center w-full sm:flex-row sm:h-14'>
                    <HeaderLink href='/' ariaLabel='redirección a la página principal'>Inicio</HeaderLink>
                    <HeaderLink href='/preview' ariaLabel='redirección a la pagina de Previsualizar'>Previsualizar CV</HeaderLink>
                    {
                        user ?
                            <div className="flex items-center justify-center gap-4">

                                <h1>
                                    {user.name}
                                </h1>

                                <button onClick={handleOnclickCerrarSesion} className="bg-red-500 p-2 rounded-md text-white hover:bg-red-300 ">Cerrar Sesión</button>

                            </div>
                            : ''
                    }
                </ul>
            </nav>
        </header>
    )
}