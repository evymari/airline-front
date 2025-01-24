import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";



const Layout1 = () => {

    return (
        <div>
            <main>
                <Outlet />
                <Navbar /> 
               
            </main>
            
        </div>
    );
};

export default Layout1;
