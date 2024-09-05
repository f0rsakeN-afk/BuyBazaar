import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import { NavItem } from "../types/NavbarTypes"

const data: NavItem[] = [
    {
        to: '/home',
        text: 'Home'
    },
    {
        to: '/shop',
        text: 'Shop'
    },
    {
        to: '/about',
        text: 'Shop Detail'
    },
    {
        to: '/contact',
        text: 'Contact'
    }
]


const Navbar = () => {
    return (
        <div className="container m-auto">
            <Logo />
            <ul>
                {
                    data.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to} className={({ isActive }) => isActive ? 'text-primary-900 ' : 'text-primary-700 font-semibold hover:text-primary-800 text-2xl'}>{item.text}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar