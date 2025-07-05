import { useContext } from "react";
import { authProvider } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";

const AddArtCraft = () => {
    const { user } = useContext(authProvider);

    const handleArtCraft = e => {
        e.preventDefault()
        const form = e.target;
        const subcategory = form.subcategory.value;
        const itme = form.itme.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const username = form.username.value;
        const email = form.email.value;
        const addArtCraft = { subcategory, itme, description, photo, price, rating, customization, time, stock, username, email }
        
        fetch('http://localhost:5000/artcraft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addArtCraft)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Add New Art&craft',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                form.reset();
            }
        })
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-600 py-4 px-6">
                    <h2 className="text-2xl font-bold text-white text-center">Add Art And Craft</h2>
                </div>
                
                <form onSubmit={handleArtCraft} className="p-6 space-y-6">
                    {/* Subcategory */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subcategory Name</label>
                        <select 
                            name="subcategory" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select Subcategory</option>
                            <option value="Landscape Painting">Landscape Painting</option>
                            <option value="Portrait Drawing">Portrait Drawing</option>
                            <option value="Watercolour Painting">Watercolour Painting</option>
                            <option value="Oil Painting">Oil Painting</option>
                            <option value="Charcoal Sketching">Charcoal Sketching</option>
                            <option value="Cartoon Drawing">Cartoon Drawing</option>
                        </select>
                    </div>

                    {/* Item Name and Description */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                            <input 
                                type="text" 
                                name="itme" 
                                placeholder="Enter Item Name" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                            <input 
                                type="text" 
                                name="description" 
                                placeholder="Enter Description" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                        <input 
                            type="url" 
                            name="photo" 
                            placeholder="Enter Photo URL" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Price and Rating */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-gray-500">$</span>
                                </div>
                                <input 
                                    type="number" 
                                    name="price" 
                                    placeholder="Enter Price" 
                                    className="w-full pl-8 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                            <input 
                                type="number" 
                                name="rating" 
                                placeholder="Enter Rating (1-5)" 
                                min="1" 
                                max="5" 
                                step="0.1"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Customization and Processing Time */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Customization</label>
                            <select 
                                name="customization" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Processing Time</label>
                            <input 
                                type="text" 
                                name="time" 
                                placeholder="Enter Processing Time" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Stock Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
                        <select 
                            name="stock" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Select Stock Status</option>
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select>
                    </div>

                    {/* User Info */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                            <input 
                                type="text" 
                                name="username" 
                                defaultValue={user?.displayName} 
                                placeholder="Enter User Name" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                defaultValue={user?.email} 
                                placeholder="Enter User Email" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            Add Art & Craft Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArtCraft;