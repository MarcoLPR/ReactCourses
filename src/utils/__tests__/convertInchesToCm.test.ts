import { convertInchesToCm } from "../convertInchesToCm";

const testData = [
    [1, "2.54"],
    [2, "5.08"],
    [10, "25.40"],
    [100, "254.00"],
];

describe("convertInchesToCm", () => {
    it.each(testData)("should convert %s inches to %s cm", (inches, expected) => {
        expect(convertInchesToCm(Number(inches))).toBe(expected);
    })
});