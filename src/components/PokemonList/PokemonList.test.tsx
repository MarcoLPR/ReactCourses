import React from "react";
import PokemonList from "./PokemonList";
import { useGetPokemonList } from "../../hooks/useGetPokemonList";
import { renderWithProviders } from "../../testUtils/renderWithProviders";

jest.mock("../../hooks/useGetPokemonList", () => ({
  useGetPokemonList: jest.fn(),
}));

describe("PokemonList", () => {
    beforeEach(() => {
        (useGetPokemonList as jest.Mock).mockReturnValue({
            pokemonList: [
                { pokemon: { name: "Pikachu" } },
                { pokemon: { name: "Charmander" } },
            ],
            goToNextPage: jest.fn(),
            goToPreviousPage: jest.fn(),
        });
    });

    afterEach(() => jest.clearAllMocks());

    it("should render list of Pokemon Cards", () => {
        const { queryAllByTestId } = renderWithProviders(<PokemonList />);
        expect(queryAllByTestId("pokemon-card")).toHaveLength(2);
    })

    it("should call the goToNextPage function when the next button is clicked", () => {
        const { getByText } = renderWithProviders(<PokemonList />);
        getByText("Next").click();
        expect(useGetPokemonList().goToNextPage).toHaveBeenCalledTimes(1);
    })

    it("should call the goToPreviousPage function when the previous button is clicked", () => {
        const { getByText } = renderWithProviders(<PokemonList />);
        getByText("Previous").click();
        expect(useGetPokemonList().goToPreviousPage).toHaveBeenCalledTimes(1);
    })
})
