import { Link } from "react-router-dom";

interface NavBarProps {
  showLinks: boolean;
  userName?: string;
  userAvatar?: string;
}

const NavBar: React.FC<NavBarProps> = ({ showLinks, userName, userAvatar }) => {
  return (
    <nav className="bg-[#121212] text-[#e0e0e0] w-full h-20 flex justify-between items-center px-8 md:px-12 font-primary">
      <div className="flex items-center font-bold space-x-8">
        <div>
          <Link 
            className="text-5xl text-[#39FF14] hover:text-[#FF00FF] font-bangers transition duration-300 ease-in-out" 
            to="/">
            ScreenRaters
          </Link>
        </div>
      </div>
      {showLinks && (
        <div className="flex items-center space-x-8">
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
        </div>
      )}
    </nav>
  );
};

export default NavBar;
