import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { ModalData } from "../interfaces/ModalData";
import axios from "axios";
import AuthService from "../utils/auth.js"
// Define the movie type
interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  director: string;
  releaseDate: string;
  comment: string;
  rating: number;
}

// API Key from .env file
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || "";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch popular movies
        const movieRes = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const movieData = await movieRes.json();

        if (!movieData.results) {
          throw new Error("Failed to load movies.");
        }

        // Fetch director details for each movie
        const moviesWithDirectors = await Promise.all(
          movieData.results.slice(0, 6).map(async (movie: any) => {
            const creditsRes = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=${TMDB_API_KEY}`
            );
            const creditsData = await creditsRes.json();

            const director =
              creditsData.crew.find((member: any) => member.job === "Director")
                ?.name || "Unknown";

            return {
              id: movie.id, // Using TMDB built-in movie ID
              title: movie.title,
              description: movie.overview || "No description available.",
              image: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "",
              director,
              releaseDate: movie.release_date || "Unknown",
            };
          })
        );

        setMovies(moviesWithDirectors);
      } catch (error: any) {
        console.error("Error fetching movies:", error);
        setError(error.message || "Failed to load movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSave = (data: ModalData) => {
    // Store data in localStorage
    // localStorage.setItem(`movie-${selectedMovie?.id}`, JSON.stringify(data));

    // Save data to the database
    axios.post("/api/ratings/", data , {
      headers: {'Authorization': `Bearer ${AuthService.getToken()}`  }
    })
      .then(response => {
        console.log("Data saved to the database:", response.data);
      })
      .catch(error => {
        console.error("Error saving data to the database:", error);
      });
  
axios.post("/api/favorites/", data, {
  headers: {
    'Authorization': `Bearer ${AuthService.getToken()}`
  }
})
      .then(response => {
        console.log("Data saved to the database:", response.data);
      })
      .catch(error => {
        console.error("Error saving data to the database:", error);
      });
  
    axios.post("/api/comments/", data, {
      headers: {
        
        'Authorization': `Bearer ${AuthService.getToken()}`
      }
    })
      .then(response => {
        console.log("Data saved to the database:", response.data);
      })
      .catch(error => {
        console.error("Error saving data to the database:", error);
      });
  };


  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#39FF14] mb-8">Popular Movies</h1>
      {/* Show loading state */}
      {loading && (
        <p className="text-center text-gray-400">Loading movies...</p>
      )}
      {/* Show error if needed */}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="max-w-xs w-full bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
            onClick={() => setSelectedMovie(movie)}
          >
            {/* Movie Poster */}
            <div className="w-full h-56">
              <img
                src={movie.image}
                alt={`Poster of ${movie.title}`}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            {/* Movie Info */}
            <div className="p-4 flex flex-col">
              <h2 className="text-[#39FF14] text-xl font-semibold mb-2 truncate">{movie.title}</h2>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{movie.description}</p>
              <div className="text-sm text-gray-400">
                <p className="font-semibold">Director: {movie.director}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <Modal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">Popular Movies</h1>

//       {/* Show loading state */}
//       {loading && (
//         <p className="text-center text-gray-600">Loading movies...</p>
//       )}

//       {/* Show error if needed */}
//       {error && <p className="text-center text-red-600">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {movies.map((movie) => (
//           <div
//             key={movie.id}
//             className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow cursor-pointer"
//             onClick={() => setSelectedMovie(movie)}
//           >
//             {/* Movie Poster */}
//             <div className="w-48 flex-none">
//               <img
//                 src={movie.image}
//                 alt={`Poster of ${movie.title}`}
//                 className="h-full w-full object-cover rounded-l"
//               />
//             </div>

//             {/* Movie Info */}
//             <div className="border border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal flex-1">
//               <div className="mb-4">
//                 <h2 className="text-gray-900 font-bold text-xl mb-2">
//                   {movie.title}
//                 </h2>
//                 <p className="text-gray-700 text-base">{movie.description}</p>
//               </div>
//               <div className="text-sm text-gray-600">
//                 <p className="font-semibold">Director: {movie.director}</p>
//                 <p>Release Date: {movie.releaseDate}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedMovie && (
//         <Modal
//           movie={selectedMovie}
//           onClose={() => setSelectedMovie(null)}
//           onSave={handleSave}
//         />
//       )}
//     </div>
//   );
// };

export default Movies;
