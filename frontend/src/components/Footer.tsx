import { TitleText } from "../types/FooterTypes"
import Logo from "./Logo"
import PaymentIcons from "./PaymentIcons"
import SocialMedia from "./SocialMedia"

const Footer = () => {
    return (
        <footer className="bg-[#45595b] py-8 text-gray-300">
            <div className="container mx-auto px-4">
                <div className=" flex items-center justify-between mb-6">
                    <Logo />
                    <SocialMedia />
                </div>
                <hr className="border-yellow-400 mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <Title text="Why people like us!" />
                        <p className="text-sm leading-relaxed">
                            Our customers choose us for our farm-fresh, locally sourced produce, diverse seasonal selection, commitment to quality and sustainability, friendly expert service, and competitive prices that make healthy eating both delightful and accessible to all.
                        </p>
                    </div>
                    <div>
                        <Title text="Shop Info" />
                        <Container>
                            <SubTitle text="About Us" />
                            <SubTitle text="Contact Us" />
                            <SubTitle text="Return Policy" />
                            <SubTitle text="Terms & Conditions" />
                            <SubTitle text="Privacy Policy" />
                            <SubTitle text="FAQ's & Help" />
                        </Container>
                    </div>
                    <div>
                        <Title text="Account" />
                        <Container>
                            <SubTitle text="My Account" />
                            <SubTitle text="Shop Details" />
                            <SubTitle text="Shopping Cart" />
                            <SubTitle text="Wishlist" />
                            <SubTitle text="Order History" />
                            <SubTitle text="International Orders" />
                        </Container>
                    </div>
                    <div>
                        <Title text="Contact" />
                        <Container>
                            <h2 className="text-sm">Address:Bargachi, Biratnagar</h2>
                            <h2 className="text-sm hover:text-yellow-400 transition-colors duration-300 mb-2 cursor-pointer">Phone:<a href="tel:+977-9742302747">+977-9742302747</a></h2>
                            <h2 className="text-sm hover:text-yellow-400 transition-colors duration-300 mb-2 cursor-pointer">Email:<a href="mailto:xyz@gmail.com">Xyz@gmail.com</a></h2>
                        </Container>
                        <h2 className="text-sm pt-4 pb-1">Payment Accepted</h2>
                        <PaymentIcons />

                    </div>
                </div>
            </div>
        </footer>
    )
}

const Title = ({ text }: TitleText) => {
    return (
        <h3 className="text-xl font-semibold text-gray-100 mb-4">{text}</h3>
    )
}

const SubTitle = ({ text }: TitleText) => {
    return (
        <h4 className="text-sm hover:text-yellow-400 transition-colors duration-300 mb-2 cursor-pointer">{text}</h4>
    )
}

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="space-y-2">
            {children}
        </div>
    )
}

export default Footer;