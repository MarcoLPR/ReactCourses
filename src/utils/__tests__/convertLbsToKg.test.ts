import { convertLbsToKg } from "../convertLbsToKg";

const testData = [
    [1, "0.45"],
    [2, "0.91"],
    [10, "4.54"],
    [100, "45.36"],
];

describe("convertLbsToKg", () => {
    it.each(testData)("should convert %s lbs to %s kg", (inches, expected) => {
        expect(convertLbsToKg(Number(inches))).toBe(expected);
    })
});