import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";


const Layout2 = () => {

    return (
        <div>
            <main>
                <Outlet />
            </main>
            <Navbar />
        </div>
    );
};

export default Layout2;