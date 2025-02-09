import { Link } from "react-router-dom";

interface NavBarProps {
  showLinks: boolean;
  userName?: string;
  userAvatar?: string;
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ showLinks, userName, userAvatar, onLogout }) => {
  return (
    <nav className="bg-gray-800 text-white w-full h-16 flex justify-between items-center px-10">
      <div className="flex flex-row font-bold space-x-4">
        <div>
          <Link className="font-primary text-2xl" to="/">
            ScreenRaters
          </Link>
        </div>
      </div>
      {showLinks && (
        <div className="flex flex-row space-x-4 font-bold items-center">
          {userAvatar && (
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          )}
          {userName && <span className="ml-2">Hi, {userName}</span>}
          <Link to="/home">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <button 
            onClick={onLogout} 
            className="text-white hover:text-red-700 font-bold"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
