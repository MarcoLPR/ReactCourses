import React from "react";
import { PokemonCard } from "./PokemonCard";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { useGetPokemon } from "../../hooks/useGetPokemon";

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
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        types: [{ type: { name: "electric" } }],
        id: 25,
      },
    });
  });
  afterEach(() => jest.clearAllMocks());

  it("should render without errors", () => {
    renderWithProviders(<PokemonCard pokemon={mockPokemon} />);
  });

  it("should render the pokemon name", () => {
    const { getByText } = renderWithProviders(
      <PokemonCard pokemon={mockPokemon} />
    );
    expect(getByText("Pikachu")).toBeInTheDocument();
  });

  it("should render the pokemon image", () => {
    const { getByAltText } = renderWithProviders(
      <PokemonCard pokemon={mockPokemon} />
    );
    expect(getByAltText("Pikachu")).toBeInTheDocument();
  });
});
