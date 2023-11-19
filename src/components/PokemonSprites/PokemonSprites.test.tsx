import React from "react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { PokemonSprites } from "./PokemonSprites";
import { useGetPokemon } from "../../hooks/useGetPokemon";

jest.mock("../../hooks/useGetPokemon", () => ({
  useGetPokemon: jest.fn(),
}));

describe("PokemonSprites", () => {
  afterEach(() => jest.clearAllMocks());

  it("should render all four pokemon sprites", () => {
    (useGetPokemon as jest.Mock).mockReturnValue({
      pokemonData: {
        sprites: {
          front_default: "front_default",
          back_default: "back_default",
          front_shiny: "front_shiny",
          back_shiny: "back_shiny",
        },
        name: "Pikachu",
      },
    });

    const { getByAltText } = renderWithProviders(<PokemonSprites />);
    const frontDefaultSprite = getByAltText("Pikachu front default");

    expect(frontDefaultSprite).toBeInTheDocument();
    expect(frontDefaultSprite).toHaveAttribute("src", "front_default");

    const backDefaultSprite = getByAltText("Pikachu back default");

    expect(backDefaultSprite).toBeInTheDocument();
    expect(backDefaultSprite).toHaveAttribute("src", "back_default");

    const frontShinySprite = getByAltText("Pikachu front shiny");

    expect(frontShinySprite).toBeInTheDocument();
    expect(frontShinySprite).toHaveAttribute("src", "front_shiny");

    const backShinySprite = getByAltText("Pikachu back shiny");

    expect(backShinySprite).toBeInTheDocument();
    expect(backShinySprite).toHaveAttribute("src", "back_shiny");
  });

  it("should render no sections if sprites are undefined", () => {
    (useGetPokemon as jest.Mock).mockReturnValue({
      pokemonData: {
        sprites: {
          front_default: undefined,
          back_default: undefined,
          front_shiny: undefined,
          back_shiny: undefined,
        },
        name: "Pikachu",
      },
    });

    const { queryByAltText, queryByText } = renderWithProviders(
      <PokemonSprites />
    );
    expect(queryByAltText("Pikachu front default")).not.toBeInTheDocument();
    expect(queryByAltText("Pikachu back default")).not.toBeInTheDocument();
    expect(queryByAltText("Pikachu front shiny")).not.toBeInTheDocument();
    expect(queryByAltText("Pikachu back shiny")).not.toBeInTheDocument();
    expect(queryByText("Normal")).not.toBeInTheDocument();
    expect(queryByText("Shiny")).not.toBeInTheDocument();
  });
});
