import { servicesTypes } from "../types/servicesTypes"
import { FaCarSide } from "react-icons/fa";

const Services = () => {

    return (
        <div className="container m-auto mt-12 px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {/*  {dummyData.map(d => (
                    <ServicesBox key={d.name}{...d} />
                ))} */}
            </div>
        </div>
    )
}

const ServicesBox: React.FC<servicesTypes> = ({ Icon, name, description }) => {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
                <Icon className="text-8xl text-white p-4 rounded-full bg-yellow-500 mb-4" />
                <h3 className="text-gray-900  text-xl mb-2">{name}</h3>
                <p className="text-gray-900 text-md font-thin ">{description}</p>
            </div>
        </div>
    )
}

export default Services