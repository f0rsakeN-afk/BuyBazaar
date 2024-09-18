import { GiOrangeSlice } from "react-icons/gi";
import { FaCarrot, FaAppleAlt, FaLeaf } from "react-icons/fa";


const products = [
  {
    id: 1,
    name: "Fresh Apples",
    description: "Crisp and juicy apples, perfect for snacking or baking.",
    price: 2.99,
    category: "fruits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtywKdongNUiZ8YexgVsgx4hOkSSONFea6eA&s",
  },
  {
    id: 2,
    name: "Organic Carrots",
    description: "Sweet and crunchy carrots, great for salads or cooking.",
    price: 1.99,
    category: "vegetables",
    image: "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc=",
  },
];


const Item = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  px-4 pt-32 pb-6 ">
        {products.map((product) => {
          const { id, name, description, price, category, image } = product;
          const isFruit = category === 'fruits';
          const categoryColor = isFruit ? 'bg-orange-500' : 'bg-green-500';
          const categoryIcon = isFruit ? <GiOrangeSlice className="mr-1" /> : <FaCarrot className="mr-1" />;

          return (
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 border-2 border-green-200">
              <div className="relative">
                <img src={image} alt={name} className="w-full h-48 object-cover" />
                <span className={`absolute top-2 left-2 ${categoryColor} text-white text-xs font-bold px-2 py-1 rounded-full flex items-center`}>
                  {categoryIcon}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                {isFruit ?
                  <FaAppleAlt className="absolute bottom-2 right-2 text-red-500 text-2xl" /> :
                  <FaLeaf className="absolute bottom-2 right-2 text-green-500 text-2xl" />
                }
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
                <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden">{description}</p>
                <div className="flex  items-center mb-4">
                  <span className="text-xl font-bold text-green-600">
                    ${price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">/ KG</span>
                </div>
                <button
                  onClick={() => console.log(`Added ${name} to cart`)}
                  className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <FaCarrot className="mr-2" /> Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;