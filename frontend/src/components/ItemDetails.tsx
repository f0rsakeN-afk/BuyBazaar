import { FaStar, FaLeaf, FaWeightHanging, FaCheck, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useState } from 'react';


const productDetails = {
    id: 1,
    name: "Organic Red Apples",
    shortDesc: "Sweet and crisp organic apples",
    briefDesc: "Our organic red apples are hand-picked from local orchards. They're perfect for snacking, baking, or adding to your favorite salad.",
    category: "fruits",
    price: 2.99,
    discount: 10, // 10% discount
    rating: 4.5,
    weight: 1, // in pounds
    quality: "Premium",
    checkMinWeight: 0.5, // minimum weight that can be purchased
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s",
    nutritionFacts: {
        calories: 95,
        protein: "0.5g",
        carbs: "25g",
        fiber: "4g",
        sugar: "19g",
    },
    reviews: [
        { id: 1, user: "John D.", rating: 5, comment: "Delicious and fresh!" },
        { id: 2, user: "Sarah M.", rating: 4, comment: "Great quality, but a bit pricey." },
    ]
};

const ItemDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {
        name, shortDesc, briefDesc, category, price, discount, rating,
        weight, quality, checkMinWeight, image, nutritionFacts, reviews
    } = productDetails;

    const discountedPrice = price - (price * discount / 100);

    return (
        <div className="container mx-auto px-4 pt-32 pb-6 max-w-6xl">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <img src={image} alt={name} className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="p-8">
                        <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
                        <p className="text-xl text-gray-600 mb-4">{shortDesc}</p>
                        <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} text-xl`} />
                            ))}
                            <span className="ml-2 text-gray-600">({rating})</span>
                        </div>
                        <div className="flex items-center mb-6">
                            <span className="text-3xl font-bold text-green-600">${discountedPrice.toFixed(2)}</span>
                            {discount > 0 && (
                                <>
                                    <span className="ml-2 text-xl text-gray-500 line-through">${price.toFixed(2)}</span>
                                    <span className="ml-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">{discount}% OFF</span>
                                </>
                            )}
                        </div>
                        <p className="mb-6 text-gray-700">{briefDesc}</p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center">
                                <FaLeaf className="text-green-500 mr-2" />
                                <span className="text-gray-700 capitalize">Category: <span className="font-semibold">{category}</span></span>
                            </div>
                            <div className="flex items-center">
                                <FaWeightHanging className="text-blue-500 mr-2" />
                                <span className="text-gray-700">Weight: <span className="font-semibold">{weight} lb</span></span>
                            </div>
                            <div className="flex items-center">
                                <FaCheck className="text-green-500 mr-2" />
                                <span className="text-gray-700">Quality: <span className="font-semibold">{quality}</span></span>
                            </div>
                            <div className="flex items-center">
                                <FaWeightHanging className="text-blue-500 mr-2" />
                                <span className="text-gray-700">Min Weight: <span className="font-semibold">{checkMinWeight} lb</span></span>
                            </div>
                        </div>
                        <div className="flex items-center mb-6">
                            <span className="mr-4 text-gray-700">Quantity:</span>
                            <div className="flex items-center border rounded">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">-</button>
                                <span className="px-4 py-1">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">+</button>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center">
                                <FaShoppingCart className="mr-2" /> Add to Cart
                            </button>
                            <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300">
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 p-6 bg-gray-50 border-b">Nutrition Facts</h2>
                <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {Object.entries(nutritionFacts).map(([key, value]) => (
                            <div key={key} className="text-center bg-gray-50 p-4 rounded-lg">
                                <span className="font-bold text-xl text-green-600">{value}</span>
                                <p className="text-sm text-gray-600 mt-1">{key}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold mb-4 p-6 bg-gray-50 border-b">Customer Reviews</h2>
                <div className="p-6">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-gray-50 p-4 rounded-lg mb-4">
                            <div className="flex items-center mb-2">
                                <span className="font-bold mr-2 text-gray-800">{review.user}</span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`} />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;