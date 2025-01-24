import { NavLink } from 'react-router-dom';
import { Home, User, MessageSquare } from 'feather-icons-react';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="fixed bottom-0 left-0 w-full shadow-lg bg-card" aria-label="Main Navigation">
            <ul className="flex justify-around py-2">
                <li className="flex flex-col items-center group">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Home"
                    >
                        <Home className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
                        <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto"></span>
                    </NavLink>
                </li>
                <li className="flex flex-col items-center group">
                    <div
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="Account" onClick={() => navigate('/Account')} 
                    >


                        <User className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
                        <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto"></span>

                    </div>
                </li>
                <li className="flex flex-col items-center group">
                    <div
                        className={({ isActive }) =>
                            `flex flex-col items-center ${isActive ? 'text-primary-foreground' : ''} transition-colors duration-300`}
                        aria-label="" onClick={() => navigate('/Post')} 
                    >
                        <MessageSquare className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
                        <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto"></span>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
