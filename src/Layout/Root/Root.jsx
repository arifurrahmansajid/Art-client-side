import { Outlet } from "react-router-dom";
import Header from "../../Page/Shared/Header/Header";
import Footer from "../../Page/Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="container mx-auto lg:px-5 px-2">
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;