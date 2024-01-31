import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Group no of test cases in block -> using describe
// You can use it instad of test for your test cases .. both valid and same  ..easy to read and naming convension
describe("Contact Us page Test cases", ()=> {

    test("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });

    test("Should load Submit inside contact us component", () => {
        render(<Contact />);
        const submit = screen.getByText("Submit");
        expect(submit).toBeInTheDocument();
    });

    test("Should load Input Name inside contact us component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the  contact us component", () => {
        render(<Contact />);
        //For multiple item use ByALL and it return JSX element ..ie. Obj //Querrying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2); //length if element
    });

});