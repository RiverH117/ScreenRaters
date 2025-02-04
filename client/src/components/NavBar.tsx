import { Link } from "react-router-dom";

interface NavBarProps {
  showLinks: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ showLinks }) => {
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
        <div className="flex flex-row space-x-4 font-bold">
          <Link to="/home">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
