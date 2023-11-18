import { convertInchesToCm } from "../convertInchesToCm";

const testData = [
    [1, "2.54"],
    [0, "0.00"],
    [2, "5.08"],
    [3, "7.62"],
    [10, "25.40"],
]

describe("convertInchesToCm", () => {
    it.each(testData)("should convert %s inches to %s cm", (inches, cm) => {
        const result = convertInchesToCm(Number(inches));
        expect(result).toEqual(cm);
    });
});