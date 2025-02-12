const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">

        <div className="text-sm text-center md:text-left">
          <p>
            Data provided by{" "}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
              TMDb API
            </a>{" "}
            &{" "}
            <a href="https://www.watchmode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 transition duration-300">
              WatchMode API
            </a>
          </p>
          <p className="mt-2">&copy; 2025 ScreenRaters. All Rights Reserved.</p>
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-0">
          <p className="text-lg font-semibold mb-4">Recommended Streaming Platforms</p>
          <div className="flex space-x-8">
            <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                <path d="M4 2h4l4 10V2h4v20h-4l-4-10v10H4V2z" />
              </svg>
            </a>
            <a href="https://www.hulu.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30" width="50" height="36" fill="currentColor">
                <rect width="100" height="30" rx="5" fill="#1ce783" />
                <text
                  x="50%"
                  y="50%"
                  fill="black"
                  fontSize="18"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  hulu
                </text>
              </svg>
            </a>
            <a href="https://www.primevideo.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 50" width="60" height="36">
                <text x="5" y="28" fill="#00a8e1" fontSize="24" fontWeight="bold">
                  prime
                </text>
                <text x="75" y="28" fill="#00a8e1" fontSize="24">
                  video
                </text>
                <path d="M70 35l6 6 12-12" stroke="#00a8e1" strokeWidth="3" fill="none" />
              </svg>
            </a>
            <a href="https://www.disneyplus.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="60" height="36">
                <text x="5" y="40" fill="white" fontSize="26" fontWeight="bold">
                  Disney
                </text>
                <path d="M5 25q50-30 150 0" stroke="#1ce783" strokeWidth="3" fill="none" />
                <text x="150" y="45" fill="#1ce783" fontSize="26">
                  +
                </text>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
