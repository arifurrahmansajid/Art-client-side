const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-gray-800">CraftNest</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                        CraftNest Industries Ltd.<br />
                        Providing reliable tech since 1992
                    </p>
                </div>

                {/* Services */}
                <div className="space-y-3">
                    <h6 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Services</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Branding</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Design</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Marketing</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Advertisement</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div className="space-y-3">
                    <h6 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">About us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Contact</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Jobs</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Press kit</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="space-y-3">
                    <h6 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Terms of use</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Privacy policy</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">Cookie policy</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-6">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} CraftNest Industries Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;