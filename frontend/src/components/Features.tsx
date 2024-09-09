import { FaUsers } from "react-icons/fa";
import { featuresTypes } from "../types/featuresTypes";


const Features = () => {
    return (
        <section className="bg-gray-100  py-16 px-16 container m-auto md:rounded-xl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* {dummyData.map((d) => (
                        <FeaturesBox key={d.name} {...d} />
                    ))} */}
                </div>
            </div>
        </section>
    );
};

const FeaturesBox: React.FC<featuresTypes> = ({ Icon, name, param }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col items-center text-center">
                <Icon className="text-7xl text-yellow-500 mb-4" />
                <h3 className="text-gray-800 font-semibold text-3xl mb-2">{name}</h3>
                <p className="text-primary-900 text-3xl font-bold">{param.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Features;