const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy; 2025 ScreenRaters. All rights reserved.</p>

      <div className="flex justify-center mt-2 space-x-4">

        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-white" viewBox="0 0 24 24">
            <path d="M4 3h3l5 11v-11h3v18h-3l-5-11v11h-3z"/>
          </svg>
        </a>

        <a href="https://www.hulu.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" className="h-6 w-6" />
        </a>

        <a href="https://www.disneyplus.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt="Disney+" className="h-6 w-6" />
        </a>

        <a href="https://www.primevideo.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
