import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white w-full h-16 flex justify-between items-center px-10">
      <div className="flex flex-row font-bold space-x-4">
        <div>
          <Link to="/">ScreenRaters</Link>
        </div>
      </div>
      <div className="flex flex-row space-x-4 font-bold">
        <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
