import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "react-router-dom"
import { slideDataTypes } from "../types/componentTypes"

interface CarouselProps {
    slides: slideDataTypes[]
}


const Carousel: React.FC<CarouselProps> = ({ slides }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
    }
    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Slider {...settings} className="overflow-hidden">
                {slides.map((slide, index) => (
                    <div key={index} className="focus:outline-none">
                        <Link to={slide.link} className="block relative h-64 sm:h-80 md:h-96 lg:h-[32rem]">
                            <img
                                src={slide.imageUrl}
                                alt={slide.alt}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold">{slide.alt}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel;