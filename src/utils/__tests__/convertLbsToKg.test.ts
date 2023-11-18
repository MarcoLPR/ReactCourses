import { convertLbsToKg } from "../convertLbsToKg";

describe("convertLbsToKg", () => {
    it("should convert lbs to kg", () => {
        const result = convertLbsToKg(1);
        expect(result).toEqual("0.45");
    });

    it("should return 0 if the input is 0", () => {
        const result = convertLbsToKg(0);
        expect(result).toEqual("0.00");
    });
});