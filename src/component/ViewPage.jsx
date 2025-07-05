import { useLoaderData, useParams } from "react-router-dom";

const ViewPage = () => {
    const viewCard = useLoaderData();
    const { id } = useParams();
    const view = viewCard.find(view => view._id === id);
    const { subcategory, itme, description, photo, price, rating, customization, time, stock, username, email } = view;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
                        <img 
                            src={photo} 
                            alt={itme} 
                            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                        />
                    </div>
                    
                    {/* Details Section */}
                    <div className="md:w-1/2 p-8">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{itme}</h1>
                                <p className="text-lg text-blue-600 mt-1">{subcategory}</p>
                            </div>
                            
                            <div className="border-t border-b border-gray-200 py-4">
                                <p className="text-gray-700">{description}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Price</p>
                                    <p className="text-xl font-semibold text-gray-900">${price}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Rating</p>
                                    <div className="flex items-center">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="ml-1 text-gray-900">{rating}</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Customization</p>
                                    <p className={`font-medium ${customization === 'Yes' ? 'text-green-600' : 'text-gray-900'}`}>
                                        {customization}
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-sm font-medium text-gray-500">Processing Time</p>
                                    <p className="text-gray-900">{time}</p>
                                </div>
                            </div>
                            
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm font-medium text-gray-500">Stock Status</p>
                                <p className={`font-medium ${stock === 'In stock' ? 'text-green-600' : 'text-blue-600'}`}>
                                    {stock}
                                </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 font-medium">
                                                {username?.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{username}</p>
                                        <p className="text-sm text-gray-500">{email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewPage;