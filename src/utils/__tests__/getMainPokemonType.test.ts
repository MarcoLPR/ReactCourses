import { PokemonData } from "../../interfaces/PokemonData";
import { getMainPokemonType } from "../getMainPokemonType";

describe("getMainPokemonType", () => {
    it("should return the first type if there is two types", () => {
        const pokemon: PokemonData = {
            types: [
                { slot: 1, type: { name: "fire", url: "" } },
                { slot: 2, type: { name: "water", url: "" } },
            ],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: { front_default: "" },
        }
        const result = getMainPokemonType(pokemon);
        expect(result).toEqual("fire");
    });

    it("should return undefined if the pokemon has no types", () => {
        const pokemon: PokemonData = {
            types: [],
            name: "",
            id: 0,
            height: 0,
            weight: 0,
            sprites: { front_default: "" },
        }

        const result = getMainPokemonType(pokemon);
        expect(result).toBeUndefined();
    });
});
