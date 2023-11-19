import React from "react";
import { useGetPokemon } from "../../hooks/useGetPokemon";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { PokemonCard } from "./PokemonCard";

jest.mock("../../hooks/useGetPokemon", () => ({
  useGetPokemon: jest.fn(),
}));

const mockPokemon = {
  name: "Pikachu",
  url: "https://pokeapi.co/api/v2/pokemon/25/",
};

describe("PokemonCard", () => {
  beforeEach(() => {
    (useGetPokemon as jest.Mock).mockReturnValue({
      pokemonData: {
        name: "Pikachu",
        id: 25,
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        types: [
          {
            type: {
              name: "electric",
            },
          },
        ],
      },
    });
  });

  afterEach(() => jest.clearAllMocks());

  it("should render the Pokemon name", () => {
    const { getByText } = renderWithProviders(
      <PokemonCard pokemon={mockPokemon} />
    );
    expect(getByText("Pikachu")).toBeInTheDocument();
  });

  it("should render the Pokemon image", () => {
    const { getByAltText } = renderWithProviders(
      <PokemonCard pokemon={mockPokemon} />
    );
    const pokemonImage = getByAltText("Pikachu");
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    );
  });
});
