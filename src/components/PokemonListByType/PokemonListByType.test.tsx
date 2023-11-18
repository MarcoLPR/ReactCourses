import React from "react";
import { useParams } from "react-router";
import useGetPokemonListByType from "../../hooks/useGetPokemonListByType";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { PokemonByTypeList } from "./PokemonListByType";

jest.mock("react-router", () => ({
    useParams: jest.fn(),
    useNavigate: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    BrowserRouter: ({ children }: { children: React.ReactNode }) => (<div>{children}</div>),
}));

jest.mock("../../hooks/useGetPokemonListByType", () => jest.fn());

describe("PokemonByTypeList", () => {
    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({ typeName: "fire" });
        (useGetPokemonListByType as jest.Mock).mockReturnValue({
            pokemonList: [
                { pokemon: { name: "charmander" } },
                { pokemon: { name: "charizard" } },
            ],
        });
    });

    afterEach(() => jest.clearAllMocks());

    it("should render without errors", () => {
        renderWithProviders(<PokemonByTypeList />);
    });

    it("should render a list of PokemonCards", () => {
        const { getAllByTestId } = renderWithProviders(<PokemonByTypeList />);
        expect(getAllByTestId("pokemon-card")).toHaveLength(2);
    });
});