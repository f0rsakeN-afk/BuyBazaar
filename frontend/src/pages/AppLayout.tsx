import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AppLayout = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#E6F3FF]'>
            <Navbar />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;