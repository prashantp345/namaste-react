import { sum } from "../sum";

test("Sum function calculate the sum if two numbers", () => {
    const result = sum(3,4);
    console.log("result", result);
    //Assertion
    expect(result).toBe(7);
});