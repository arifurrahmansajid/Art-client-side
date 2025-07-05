import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authProvider } from "../../../Auth/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const navMenu = <>
        <Link to="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</Link>
        <Link to="/addartcraft" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">Add Art&Craft</Link>
        <Link to="/allartcraft" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">All Items</Link>
        <Link to="/myartcraft" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">My List</Link>
    </>

    // theme change state
    const [themes] = useState('light');
    const { user, handleSignOut } = useContext(authProvider);
    // Add state for mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('themes', themes)
        const localTheme = localStorage.getItem('themes')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [themes])



    const handleLogOut = () => {
        handleSignOut()
            .then(() => {
                toast("User signed out successfully");
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo and mobile menu */}
                <div className="flex items-center space-x-4">
                    <button 
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {/* Hamburger icon changes when open */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileMenuOpen ? (
                                // X icon
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                // Hamburger icon
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">CraftNest</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-2">
                    {navMenu}
                </nav>

                {/* Right side controls */}
                <div className="flex items-center space-x-4">
                   

                    {/* User profile */}
                    {user ? (
                        <div className="relative group">
                            <button className="flex items-center space-x-2 focus:outline-none">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                                    <img 
                                        src={user.photoURL || "https://e7.pngegg.com/pngimages/384/706/png-clipart-computer-icons-user-login-gender-miscellaneous-desktop-wallpaper.png"} 
                                        alt="User profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </button>
                            <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-1 px-4">
                                    <p className="text-sm font-medium text-gray-900 truncate">{user.displayName || 'User'}</p>
                                </div>
                                <button 
                                    onClick={handleLogOut}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Link 
                            to="/login" 
                            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Navigation (show/hide based on state) */}
            <div className={`lg:hidden bg-white border-t border-gray-200 px-4 py-2 transition-all duration-200 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-2">
                    {navMenu}
                </div>
            </div>
        </header>
    );
};

export default Header;