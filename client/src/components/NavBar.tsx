import { Link } from "react-router-dom";

interface NavBarProps {
  showLinks: boolean;
  userName?: string;
  userAvatar?: string;
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ showLinks, userName, userAvatar, onLogout }) => {
  return (
    <nav className="bg-[#121212] text-[#e0e0e0] w-full h-20 flex justify-between items-center px-8 md:px-12 font-primary">
      <div className="flex flex-row font-bold space-x-8">
        <div>
          <Link 
            className="font-bangers text-5xl text-[#39FF14] hover:text-[#FF00FF] transition duration-300 ease-in-out" 
            to="/">
            ScreenRaters
          </Link>
        </div>
      </div>
      {showLinks && (
        <div className="flex flex-row space-x-8 font-bold items-center">
          {userAvatar && (
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full border-2 border-[#39FF14] mr-4"
            />
          )}
          {userName && <span className="text-[#e0e0e0] text-xl">Hi, {userName}</span>}
          <Link className="text-[#39FF14] hover:text-[#FF00FF] transition duration-300 ease-in-out text-xl" to="/home">
            Home
          </Link>
          <Link className="text-[#39FF14] hover:text-[#FF00FF] transition duration-300 ease-in-out text-xl" to="/favorites">
            Favorites
          </Link>
        
          <button 
            onClick={onLogout} 
            className="text-[#39FF14] hover:text-red-700 font-bold text-xl"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
