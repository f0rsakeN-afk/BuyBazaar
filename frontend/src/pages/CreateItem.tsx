import React from 'react';
import { useForm } from "react-hook-form";
import { FaAppleAlt, FaCarrot, FaWeightHanging, FaPercent, FaStar, FaImage } from 'react-icons/fa';
import { MdDescription, MdCategory, MdAttachMoney, MdGrade } from 'react-icons/md';

const CreateItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto px-4 py-32 bg-green-50 relative overflow-hidden">
            <h2 className="text-3xl font-bold text-green-800 mb-6 fade-in-up">Add New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 scale-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-2 fade-in-up delay-0">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <FaAppleAlt className="mr-2 text-green-600" />
                            Item Name
                        </label>
                        <input type="text" {...register('name', { required: 'Item name is required', minLength: { value: 4, message: "Item name must have at least 4 characters" } })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    <div className="fade-in-up delay-1">
                        <label htmlFor="shortDesc" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <MdDescription className="mr-2 text-green-600" />
                            Short Description
                        </label>
                        <input type="text" {...register('shortDesc', { required: "Item's short description is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        {errors.shortDesc && <p className="mt-1 text-sm text-red-600">{errors.shortDesc.message}</p>}
                    </div>

                    <div className="fade-in-up delay-1">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <MdCategory className="mr-2 text-green-600" />
                            Category
                        </label>
                        <select {...register('category', { required: "Item's category is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="dairy">Dairy</option>
                        </select>
                        {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
                    </div>

                    <div className="col-span-2 fade-in-up delay-2">
                        <label htmlFor="briefDesc" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <MdDescription className="mr-2 text-green-600" />
                            Brief Description
                        </label>
                        <textarea {...register('briefDesc', { required: "Item's brief description is required" })} rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
                        {errors.briefDesc && <p className="mt-1 text-sm text-red-600">{errors.briefDesc.message}</p>}
                    </div>

                    <div className="fade-in-up delay-2">
                        <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <MdAttachMoney className="mr-2 text-green-600" />
                            Price
                        </label>
                        <input type="number" step="0.01" {...register('price', { required: "Item's price is required", min: { value: 0, message: "Price cannot be negative" } })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>}
                    </div>

                    <div className="fade-in-up delay-2">
                        <label htmlFor="discount" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <FaPercent className="mr-2 text-green-600" />
                            Discount
                        </label>
                        <input type="number" step="0.01" {...register('discount')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>

                    <div className="fade-in-up delay-3">
                        <label htmlFor="rating" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <FaStar className="mr-2 text-green-600" />
                            Rating
                        </label>
                        <input type="number" step="0.1" {...register('rating', { required: "Item's rating is required", min: { value: 1, message: "Rating cannot be less than 1" }, max: { value: 5, message: "Rating cannot be more than 5" } })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        {errors.rating && <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>}
                    </div>

                    <div className="fade-in-up delay-3">
                        <label htmlFor="weight" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <FaWeightHanging className="mr-2 text-green-600" />
                            Weight
                        </label>
                        <input type="number" step="0.01" {...register('weight', { required: "The weight of item is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        {errors.weight && <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>}
                    </div>

                    <div className="fade-in-up delay-3">
                        <label htmlFor="quality" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <MdGrade className="mr-2 text-green-600" />
                            Quality
                        </label>
                        <select {...register('quality', { required: "Item's quality is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="premium">Premium</option>
                            <option value="mid">Mid</option>
                            <option value="low">Low</option>
                        </select>
                        {errors.quality && <p className="mt-1 text-sm text-red-600">{errors.quality.message}</p>}
                    </div>

                    <div className="fade-in-up delay-3">
                        <label htmlFor="checkMinWeight" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <FaWeightHanging className="mr-2 text-green-600" />
                            Minimum Purchase Weight
                        </label>
                        <input type="number" step="0.01" {...register('checkMinWeight', { required: "Min weight to be purchased is required" })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                        {errors.checkMinWeight && <p className="mt-1 text-sm text-red-600">{errors?.checkMinWeight.message}</p>}
                    </div>

                    <div className="col-span-2 fade-in-up delay-3">
                        <label htmlFor="image" className="text-sm font-medium text-gray-700 mb-1 flex items-center">
                            <FaImage className="mr-2 text-green-600" />
                            Image URL
                        </label>
                        <input type="url" {...register('image')} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>

                    <div className="col-span-2 fade-in-up delay-3">
                        <h3 className="text-lg font-medium text-green-800 mb-2">Nutrition Facts</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {['calories', 'protein', 'carbs', 'fiber', 'sugar'].map((nutrient, index) => (
                                <div key={nutrient} className={`fade-in-up delay-${index + 4}`}>
                                    <label htmlFor={nutrient} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                        {nutrient}
                                    </label>
                                    <input type="text" {...register(`nutritionFacts.${nutrient}`)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 slide-in-left button-pulse">
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Add Item
                    </button>
                </div>
            </form>

           
        </div>
    );
};

export default CreateItem;