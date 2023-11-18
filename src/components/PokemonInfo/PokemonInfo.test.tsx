import React from "react";
import { PokemonInfo } from "./PokemonInfo";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { useGetPokemon } from "../../hooks/useGetPokemon";

jest.mock("../../hooks/useGetPokemon", () => ({
  useGetPokemon: jest.fn(),
}));

describe("PokemonInfo", () => {
    beforeEach(() => {
        (useGetPokemon as jest.Mock).mockReturnValue({
            pokemonData: {
                name: "Pikachu",
                height: 10,
                weight: 10,
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
        renderWithProviders(<PokemonInfo />);
    });

    it("should render the pokemon name", () => {
        const { getByText } = renderWithProviders(<PokemonInfo />);
        expect(getByText("Pikachu")).toBeInTheDocument();
    });

    it("should render the pokemon weight", () => {
        const { getByText } = renderWithProviders(<PokemonInfo />);
        expect(getByText("Weight: 4.54 kg")).toBeInTheDocument();
    });

    it("should render the pokemon height", () => {
        const { getByText } = renderWithProviders(<PokemonInfo />);
        expect(getByText("Height: 25.40 cm")).toBeInTheDocument();
    });
});