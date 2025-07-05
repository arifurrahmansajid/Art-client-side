import { useContext } from "react";
import { Link } from "react-router-dom";
import { auth, authProvider } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const { handleCreateUser, handleSignOut } = useContext(authProvider);
    const navigate = useNavigate()

    const handelUserCreate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        if (!/@gmail\.com$/.test(email)) {
            toast('Email must end with @gmail.com')
            return
        }
        if (password.length < 6) {
            toast('Password should be at least 6 characters')
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast('Your password must contain at least one uppercase letter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast('Your password must contain at least one Lowercase letter')
            return;
        }
        handleCreateUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast('Your sign-up successful')
                handleSignOut()
                    .then(() => {
                        console.log('LogOut')
                        navigate("/login")
                    })
                    .catch((error) => {
                        console.error(error)
                    })

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then((result) => {
                        console.log(result.user);
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            })
            .catch((error) => {
                console.error(error);
                toast('Email already use')
            })
    }
    return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Join us today by filling out the form below
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handelUserCreate}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="Enter your full name"
                                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="example@gmail.com"
                                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                id="photo"
                                name="photo"
                                type="url"
                                autoComplete="photo"
                                placeholder="Enter your photo URL"
                                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                placeholder="Enter your password"
                                className="appearance-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                Already have an account?
                            </Link>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;