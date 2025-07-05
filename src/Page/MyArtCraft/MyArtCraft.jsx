import { useLoaderData } from "react-router-dom";
import MyCard from "../../component/MyCard";
import { useContext, useEffect, useState } from "react";
import { authProvider } from "../../Auth/AuthProvider";

const MyArtCraft = () => {
    const { user } = useContext(authProvider);
    const myCard = useLoaderData();
    const [loader, setLoader] = useState(myCard);
    const email = user.email;

    useEffect(() => {
        fetch('http://localhost:5000/artcraft')
            .then(res => res.json())
            .then(data => {
                setLoader(data.filter((singleData) => singleData.email === email));
            });
    }, []);

    const handleFilter = Filter => {
        let filterCard = [];
        if (Filter === 'Yes') {
            filterCard = myCard.filter(card => card.customization === 'Yes');
        }
        else if (Filter === 'No') {
            filterCard = myCard.filter(card => card.customization === 'No');
        }
        setLoader(filterCard);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Filter Section */}
            <div className="flex justify-center mb-8">
                <div className="relative group">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 flex items-center">
                        Filter
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                        <div className="py-1">
                            <button 
                                onClick={() => handleFilter('Yes')} 
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                Yes
                            </button>
                            <button 
                                onClick={() => handleFilter('No')} 
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            {loader.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {loader.map(card => (
                        <MyCard 
                            key={card._id} 
                            loader={loader} 
                            setLoader={setLoader} 
                            card={card}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No art & craft items found</p>
                </div>
            )}
        </div>
    );
};

export default MyArtCraft;