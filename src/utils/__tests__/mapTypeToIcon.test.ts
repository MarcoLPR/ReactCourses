import { PokemonType } from "../../interfaces/PokemonData";
import { mapTypeToIcon } from "../mapTypeToIcon";

const testData = [
  ["fire", "test-file-stub"],
  ["water", "test-file-stub"],
  ["grass", "test-file-stub"],
  ["bug", "test-file-stub"],
  ["normal", "test-file-stub"],
  ["poison", "test-file-stub"],
  ["electric", "test-file-stub"],
  ["ground", "test-file-stub"],
  ["fairy", "test-file-stub"],
  ["fighting", "test-file-stub"],
  ["psychic", "test-file-stub"],
  ["rock", "test-file-stub"],
  ["ghost", "test-file-stub"],
  ["ice", "test-file-stub"],
  ["dragon", "test-file-stub"],
  ["dark", "test-file-stub"],
  ["steel", "test-file-stub"],
  ["flying", "test-file-stub"],
];

describe("mapTypeToIcon", () => {
  it.each(testData)("should return the correct icon for the type", (type, expectedIcon) => {
    const pokemonType = { type: { name: type, url: "" } };
    expect(mapTypeToIcon(pokemonType as PokemonType)).toBe(expectedIcon);
  });

  it("should return empty string if the type is not found", () => {
    const pokemonType = { type: { name: "unknown", url: "" } };
    expect(mapTypeToIcon(pokemonType as PokemonType)).toBe("");
  });
});
