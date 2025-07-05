import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = () => {
    const categorys = useLoaderData();
    const { category } = useParams();
    const catego = categorys.filter(catego => catego.subcategory === category);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 capitalize">{category} Collection</h1>
            
            {catego.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {catego.map(card => (
                        <div key={card._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <img 
                                className="w-full h-48 object-cover" 
                                src={card.photo} 
                                alt={card.itme} 
                            />
                            <div className="p-6">
                                <div className="flex justify-between mb-4">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                            {card.subcategory}
                                        </p>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {card.itme}
                                        </h3>
                                    </div>
                                    <div className="text-right space-y-2">
                                        <p className="text-lg font-bold text-blue-600">
                                            ${card.price}
                                        </p>
                                        <div className="flex items-center justify-end">
                                            <svg 
                                                className="w-5 h-5 text-yellow-400" 
                                                fill="currentColor" 
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="ml-1 text-gray-600">{card.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link 
                                    to={`/viewpage/${card._id}`}
                                    className="block w-full px-4 py-2 text-center font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No items found in this category</p>
                    <Link 
                        to="/" 
                        className="mt-4 inline-block px-6 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                        Back to Home
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Category;