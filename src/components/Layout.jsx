import { Header } from './Header';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
    return (
        <>
            <Header>
                <h1 className='text-xl'>
                    Infojobs CV
                </h1>
            </Header>
            <Toaster position="top-right" />
            <main>{children}</main>
        </>
    );
}