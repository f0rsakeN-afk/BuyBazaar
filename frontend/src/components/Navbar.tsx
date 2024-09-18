import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import { IconItem, NavItem } from "../types/NavbarTypes"
import { FaCartPlus, FaUser } from "react-icons/fa";

const data: NavItem[] = [
    { to: '/home', text: 'Home' },
    { to: '/shop', text: 'Shop' },
    { to: '/about', text: 'Shop Detail' },
    { to: '/contact', text: 'Contact' }
]

const icons: IconItem[] = [
    { to: '/cart', component: <FaCartPlus /> },
    { to: '/user', component: <FaUser /> }
]

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-8">
                        {data.map((item: NavItem) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `text-lg font-medium transition-all duration-200 ${isActive
                                        ? 'text-primary-900 border-b-2 border-primary-900'
                                        : 'text-gray-600 hover:text-primary-800 hover:border-b-2 hover:border-primary-800'
                                    }`
                                }
                            >
                                {item.text}
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        {icons.map((data: IconItem) => (
                            <NavLink
                                key={data.to}
                                to={data.to}
                                className={({ isActive }) =>
                                    `text-xl p-2 rounded-full transition-all duration-200 ${isActive
                                        ? 'text-primary-900 bg-primary-100'
                                        : 'text-gray-600 hover:text-primary-800 hover:bg-primary-50'
                                    }`
                                }
                            >
                                {data.component}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="floating-fruits">
                    {['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍒', '🥕', '🥦'].map((fruit, index) => (
                        <span
                            key={index}
                            className="fruit z-50"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 5}s`,
                                animationName: index % 2 === 0 ? 'floatUp' : 'floatDown'
                            }}
                        >
                            {fruit}
                        </span>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar