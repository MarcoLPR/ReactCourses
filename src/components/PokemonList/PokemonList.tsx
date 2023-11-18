import React from "react";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Grid } from "../shared/Grid/Grid";

const PokemonList: React.FC = () => {
  const { pokemonList, goToNextPage, goToPreviousPage } = useGetPokemonList();
  return (
    <Grid goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}>
      {pokemonList?.map((pokemon) => (
        <div key={pokemon?.name}>
          <PokemonCard key={pokemon?.name} pokemon={pokemon} />
        </div>
      ))}
    </Grid>
  );
};

export default PokemonList;
