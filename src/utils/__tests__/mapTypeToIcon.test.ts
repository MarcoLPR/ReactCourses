import { mapTypeToIcon } from "../mapTypeToIcon";
import { PokemonTypes } from "../../constants/types";

const testData = [
    [PokemonTypes.bug, "test-file-stub"],
    [PokemonTypes.dark, "test-file-stub"],
    [PokemonTypes.dragon, "test-file-stub"],
    [PokemonTypes.electric, "test-file-stub"],
    [PokemonTypes.fairy, "test-file-stub"],
    [PokemonTypes.fighting, "test-file-stub"],
    [PokemonTypes.fire, "test-file-stub"],
    [PokemonTypes.flying, "test-file-stub"],
    [PokemonTypes.ghost, "test-file-stub"],
    [PokemonTypes.grass, "test-file-stub"],
    [PokemonTypes.ground, "test-file-stub"],
    [PokemonTypes.ice, "test-file-stub"],
    [PokemonTypes.normal, "test-file-stub"],
    [PokemonTypes.poison, "test-file-stub"],
    [PokemonTypes.psychic, "test-file-stub"],
    [PokemonTypes.rock, "test-file-stub"],
    [PokemonTypes.steel, "test-file-stub"],
    [PokemonTypes.water, "test-file-stub"],
]

describe("mapTypeToIcon", () => {
    it.each(testData)("should return the correct icon for %s", (type, expected) => {
        const result = mapTypeToIcon({ type: { name: type, url: "" }, slot: 1 });
        expect(result).toEqual(expected);
    });

    it("should return empty string if the type is not found", () => {
        const result = mapTypeToIcon({ type: { name: "test", url: "" }, slot: 1 });
        expect(result).toBe("");
    });
});