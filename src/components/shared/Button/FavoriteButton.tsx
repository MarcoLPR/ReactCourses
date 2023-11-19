import React, { useMemo } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useFavoriteStore } from "../../../store/useFavoriteStore";

interface FavoriteButtonProps {
  pokemonId: number;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  pokemonId,
}) => {
  const [favorites, addFavorite, deleteFavorite] = useFavoriteStore((state) => [
    state.favorites,
    state.addFavorite,
    state.deleteFavorite,
  ]);

  const isFavorite = useMemo(
    () => favorites.includes(pokemonId.toString()),
    [favorites, pokemonId]
  );

  const onClick = () => {
    const idToModify = pokemonId.toString();
    isFavorite ? deleteFavorite(idToModify) : addFavorite(idToModify);
  };

  return (
    <button
      className="bg-white p-1 rounded-full absolute top-2 left-2"
      onClick={onClick}
      data-testid="favorite-button"
    >
      {isFavorite ? <FaHeart fill="#EF4444" /> : <FaRegHeart fill="#EF4444" />}
    </button>
  );
};
