import React, { useState } from "react";
import { ModalData } from "../interfaces/ModalData";

interface ModalProps {
  movie: {
    id: number;
    comment: string;
    rating: number;
    image: string;
    director: string;
  };
  onClose: () => void;
  onSave: (data: ModalData) => void;
}

const Modal: React.FC<ModalProps> = ({ movie, onClose, onSave }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: ModalData = { movieOrShowId: movie.id, comment, rating, favorite };
    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4">{movie.image}</h1>
        <p className="mb-4">Directed by: {movie.director}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Comment:</label>
            <textarea
              className="w-full p-2 border rounded"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Rating:</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min="0"
              max="5"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              <input
                type="checkbox"
                checked={favorite}
                onChange={(e) => setFavorite(e.target.checked)}
              />
              Add to Favorites
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
