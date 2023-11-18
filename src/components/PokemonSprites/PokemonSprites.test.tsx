import React from "react";
import { PokemonSprites } from "./PokemonSprites";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { useGetPokemon } from "../../hooks/useGetPokemon";

jest.mock("../../hooks/useGetPokemon", () => ({
  useGetPokemon: jest.fn(),
}));

describe("PokemonSprites", () => {
  beforeEach(() => {
    (useGetPokemon as jest.Mock).mockReturnValue({
      pokemonData: {
        name: "Pikachu",
        height: 10,
        weight: 10,
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        },
        types: [{ type: { name: "electric" } }],
        id: 25,
      },
    });
  });

  afterEach(() => jest.clearAllMocks());

  it("should render without errors", () => {
    renderWithProviders(<PokemonSprites />);
  });

  it("should render the normal and shiny sprites when data is available", () => {
    const { getByAltText } = renderWithProviders(
      <PokemonSprites pokemonName="Pikachu" />
    );

    expect(getByAltText("Pikachu front default")).toBeInTheDocument();
    expect(getByAltText("Pikachu back default")).toBeInTheDocument();
    expect(getByAltText("Pikachu front shiny")).toBeInTheDocument();
    expect(getByAltText("Pikachu back shiny")).toBeInTheDocument();
  });

  it("should render the normal and shiny sprites when data is available", () => {
    (useGetPokemon as jest.Mock).mockReturnValue({
      pokemonData: {
        name: "Pikachu",
        height: 10,
        weight: 10,
        sprites: {
          front_default: undefined,
          back_default: undefined,
          front_shiny: undefined,
          back_shiny: undefined,
        },
        types: [{ type: { name: "electric" } }],
        id: 25,
      },
    });

    const { queryByAltText } = renderWithProviders(
      <PokemonSprites pokemonName="Pikachu" />
    );

    expect(queryByAltText("Pikachu front default")).toBeNull();
    expect(queryByAltText("Pikachu back default")).toBeNull();
    expect(queryByAltText("Pikachu front shiny")).toBeNull();
    expect(queryByAltText("Pikachu back shiny")).toBeNull();
  });
});
