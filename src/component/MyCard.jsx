import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = ({ card, loader, setLoader }) => {
    const { _id, photo, subcategory, itme, price, rating, email, username } = card;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/artcraft/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = loader.filter(load => load._id !== _id);
                        setLoader(remaining);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                    }
                });
            }
        });
    }

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover" 
                    src={photo} 
                    alt={itme} 
                />
            </div>
            
            <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                            {subcategory}
                        </span>
                        <h3 className="text-lg font-bold text-gray-800 mt-1">{itme}</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-blue-600">${price}</p>
                        <div className="flex items-center justify-end mt-1">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-sm text-gray-600">{rating}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <span className="text-blue-600 text-xs font-medium">
                                    {username?.charAt(0).toUpperCase()}
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">{username}</p>
                            <p className="text-xs text-gray-500 truncate">{email}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-4 pt-3 border-t border-gray-100">
                    <Link 
                        to={`/viewpage/${_id}`}
                        className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
                        title="View Details"
                    >
                        <FaEye className="text-xl" />
                    </Link>
                    <Link 
                        to={`/update/${_id}`}
                        className="text-orange-500 hover:text-orange-700 p-2 rounded-full hover:bg-orange-50 transition-colors"
                        title="Edit"
                    >
                        <FaEdit className="text-xl" />
                    </Link>
                    <button 
                        onClick={() => handleDelete(_id)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                        title="Delete"
                    >
                        <FaTrash className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyCard;