import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "react-router-dom"



interface Data {
    imageUrl: string,
    link: string,
    alt: string
}

interface CarouselProps {
    slides: Data[]
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
        <div>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div className="" key={index}>
                        <Link to={slide.link}>
                            <img src={slide.imageUrl} alt={slide.alt} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel;