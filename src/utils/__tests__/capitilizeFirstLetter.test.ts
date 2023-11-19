import { capitilizeFirstLetter } from "../capitilizeFirstLetter";

describe("capitilizeFirstLetter", () => {
  it("should capitilize first letter", () => {
    expect(capitilizeFirstLetter("hello")).toBe("Hello");
  });

  it("should return empty string if empty string is passed", () => {
    expect(capitilizeFirstLetter("")).toBe("");
  });

  it("should return the same string if the first letter is already capitalized", () => {
    expect(capitilizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should capitilize the first letter of a sentence", () => {
    expect(capitilizeFirstLetter("hello world")).toBe("Hello world");
  });
});
