import { Header } from './Header';

export default function Layout({ children }) {
    return (
        <>
            <Header>
                <h1 className='text-xl '>
                    Infojobs CV
                </h1>
            </Header>
            <main>{children}</main>
        </>
    );
}