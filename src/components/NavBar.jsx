import { NavLink } from 'react-router-dom';
import { Home, User, MessageSquare } from 'feather-icons-react';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    return (
        
    <nav className="fixed bottom-0 left-0 w-full shadow-lg bg-card" aria-label="Main Navigation">
      <ul className="flex justify-around py-2">
        {/* Home */}
        <li className="flex flex-col items-center group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              [
                'flex',
                'flex-col',
                'items-center',
                'transition-colors',
                'duration-300',
                isActive ? 'text-primary-foreground' : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
            aria-label="Home"
          >
            <Home className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
            <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto"></span>
          </NavLink>
        </li>

        {/* Account */}
        <li className="flex flex-col items-center group">
          <NavLink
            to="/Account"
            className={({ isActive }) =>
              [
                'flex',
                'flex-col',
                'items-center',
                'transition-colors',
                'duration-300',
                isActive ? 'text-primary-foreground' : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
            aria-label="Account"
          >
            <User className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
            <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto"></span>
          </NavLink>
        </li>

        {/* Post */}
        <li className="flex flex-col items-center group">
          <NavLink
            to="/Post"
            className={({ isActive }) =>
              [
                'flex',
                'flex-col',
                'items-center',
                'transition-colors',
                'duration-300',
                isActive ? 'text-primary-foreground' : null,
              ]
                .filter(Boolean)
                .join(' ')
            }
            aria-label="Post"
          >
            <MessageSquare className="w-6 h-6 transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue" />
            <span className="text-sm transition-colors duration-300 text-accentBlack group-hover:text-primaryBlue font-roboto"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
