import { Link } from 'react-router-dom';
import logoImage from '../assets/Logo.webp';
const Logo = () => {
    return (
        <Link to={'/'}>
            <img src={logoImage} alt="logo_Image" className='h-20' />
        </Link>
    )
}

export default Logo