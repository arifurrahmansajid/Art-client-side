import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.jpg";
import bg3 from "../../assets/bg-3.jpg";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { useTypewriter } from 'react-simple-typewriter';

const Home = () => {
    const cards = useLoaderData();
    const [cardse, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/artcraft')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, []);

    const [text] = useTypewriter({
        words: ['Explore the World of Art & Craft!'],
        loop: 3
    });

    // Get unique categories only from artcraft items
    const uniqueCategories = [];
    const uniqueCategoryCards = cardse.filter(card => {
        if (!uniqueCategories.includes(card.subcategory)) {
            uniqueCategories.push(card.subcategory);
            return true;
        }
        return false;
    });

    return (
        <div className="bg-gray-50">
            {/* Hero Carousel */}
            <div className="relative">
                <div className="carousel w-full h-[70vh]">
                    {[bg1, bg2, bg3].map((bg, index) => (
                        <div 
                            key={`slide${index+1}`} 
                            id={`slide${index+1}`} 
                            className="carousel-item relative w-full"
                        >
                            <img 
                                src={bg} 
                                className="w-full h-full object-cover" 
                                alt={`Slide ${index+1}`} 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                <div className="text-center max-w-2xl px-4">
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                        Unleash Your Creativity: {text}
                                    </h2>
                                    <p className="text-lg text-white">
                                        Art and craft allow us to explore our creativity, express our emotions, and connect with others on a deeper level.
                                    </p>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a 
                                    href={`#slide${index === 0 ? 3 : index}`} 
                                    className="btn btn-circle btn-outline btn-sm text-white hover:bg-white hover:text-black"
                                >
                                    ❮
                                </a>
                                <a 
                                    href={`#slide${index === 2 ? 1 : index+2}`} 
                                    className="btn btn-circle btn-outline btn-sm text-white hover:bg-white hover:text-black"
                                >
                                    ❯
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <Zoom>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Art & Craft Categories</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our store&apos;s vast selection of Art & Craft categories, ranging from painting and drawing supplies to DIY kits and crafting materials!
                        </p>
                    </Zoom>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Zoom cascade damping={0.1}>
                        {uniqueCategoryCards.slice(0, 6).map(card => (
                            <Link 
                                key={card._id} 
                                to={`/category/${card.subcategory}`}
                                className="group"
                            >
                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                            src={card.photo} 
                                            alt={card.subcategory}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-center text-gray-800 group-hover:text-blue-600 transition-colors">
                                            {card.subcategory}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Zoom>
                </div>
            </section>

            {/* Featured Items */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <Zoom>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Art & Craft Items</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Amidst the quaint streets of a small town, a family-owned store brims with colorful threads, intricate beads, and the promise of endless creative possibilities!
                            </p>
                        </Zoom>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Zoom cascade damping={0.1}>
                            {cards.slice(0, 6).map(card => (
                                <div key={card._id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img 
                                            className="w-full h-full object-cover" 
                                            src={card.photo} 
                                            alt={card.itme}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{card.itme}</h3>
                                                <p className="text-sm text-gray-500">{card.subcategory}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xl font-bold text-blue-600">${card.price}</p>
                                                <div className="flex items-center justify-end">
                                                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-1 text-sm text-gray-600">{card.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link 
                                            to={`/viewpage/${card._id}`}
                                            className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </Zoom>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <Zoom>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            In the heart of downtown, our clients store beckons with its eclectic mix of artisanal treasures, captivating every passerby with its unique charm!
                        </p>
                    </Zoom>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <Zoom cascade damping={0.1}>
                        {[client1, client2, client3, client4, client1, client2, client3, client4].map((client, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <img 
                                    className="w-full h-32 object-contain" 
                                    src={client} 
                                    alt={`Client ${index+1}`}
                                />
                            </div>
                        ))}
                    </Zoom>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <Zoom>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Blog</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                In our blog, explore a virtual emporium where words weave tales, ideas flourish, and creativity finds its sanctuary!
                            </p>
                        </Zoom>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Zoom cascade damping={0.1}>
                            {[blog1, blog2, blog3].map((blog, index) => (
                                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img 
                                            className="w-full h-full object-cover" 
                                            src={blog} 
                                            alt={`Blog ${index+1}`}
                                        />
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-4 line-clamp-3">
                                            Welcome to our art and craft blog, where creativity flourishes and inspiration abounds. Join us as we explore the latest trends, share DIY projects, and celebrate the beauty of handmade creations. From beginners guides to expert tips, theres something for everyone to discover and enjoy. Lets embark on a journey of imagination together, where every brushstroke and stitch tells a story of passion and craftsmanship
                                        </p>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                            See More
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Zoom>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;