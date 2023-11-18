import React from "react";
import PokemonList from "./PokemonList";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";

jest.mock("../../hooks/useGetPokemonList", () => ({
  useGetPokemonList: jest.fn(),
}));

describe("PokemonList", () => {
    beforeEach(() => {
        (useGetPokemonList as jest.Mock).mockReturnValue({
            pokemonList: [
                { pokemon: { name: "charmander" } },
                { pokemon: { name: "charizard" }}
            ],
            goToNextPage: jest.fn(),
            goToPreviousPage: jest.fn(),
        });
    });

    afterEach(() => jest.clearAllMocks());

    it("should render without errors", () => {
        renderWithProviders(<PokemonList />);
    });

    it("should render a list of PokemonCards", () => {
        const { getAllByTestId } = renderWithProviders(<PokemonList />);
        expect(getAllByTestId("pokemon-card")).toHaveLength(2);
    });

    it("should call goToNextPage when the next button is clicked", () => {
        const { getByText } = renderWithProviders(<PokemonList />);
        getByText("Next").click();
        expect(useGetPokemonList().goToNextPage).toHaveBeenCalledTimes(1);
    });

    it("should call goToPreviousPage when the previous button is clicked", () => {
        const { getByText } = renderWithProviders(<PokemonList />);
        getByText("Previous").click();
        expect(useGetPokemonList().goToPreviousPage).toHaveBeenCalledTimes(1);
    });
});