import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { authProvider } from "./AuthProvider";

const ProtectRouter = ({children}) => {
    const { user, loader } = useContext(authProvider)
    const location = useLocation()
    console.log(location)
    if (loader) {
        return <span className="loading loading-bars loading-lg "></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectRouter; 
