import { capitilizeFirstLetter } from "../capitilizeFirstLetter";

describe("capitilizeFirstLetter", () => {
  it("should capitilize first letter", () => {
    const result = capitilizeFirstLetter("hello");
    expect(result).toEqual("Hello");
  });

  it("should return an empty string if the input is an empty string", () => {
    const result = capitilizeFirstLetter("");
    expect(result).toEqual("");
  });

  it("should return the same string if the first letter is already capitilized", () => {
    const result = capitilizeFirstLetter("Hello");
    expect(result).toEqual("Hello");
  });

  it("should capitilize the first letter of a sentence", () => {
    const result = capitilizeFirstLetter("hello world");
    expect(result).toEqual("Hello world");
  });
});
