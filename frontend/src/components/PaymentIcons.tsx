import visa from '../assets/visa.png'
import masterCard from '../assets/masterCard.svg';


interface ImagesTypes {
    from: string;
    name: string
}
const images: ImagesTypes[] = [

    {
        from: masterCard,
        name: 'masterCard'
    },

    {
        from: visa,
        name: 'visa'
    }
]

const PaymentIcons = () => {
    return (
        <div className='flex items-center space-x-6'>
            {images.map(el => (
                <img src={el.from} alt="name" key={el.name} className='h-12' />
            ))}
        </div>
    )
}

export default PaymentIcons