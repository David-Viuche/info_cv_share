export const HeaderLink = ({ children, href, target, ariaLabel }) => {
    return (
        <li className='w-6/12 rounded opacity-1 sm:w-auto flex justify-center hover:border-b-2'>
            <a href={href} target={target} aria-label={ariaLabel} className='p-2 w-full h-full flex justify-center'>
                {children}
            </a>
        </li>
    )
}