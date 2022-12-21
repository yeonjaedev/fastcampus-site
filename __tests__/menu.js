import {render, screen} from "@testing-library/react";
import Menu from "../components/Menu"
import "@testing-library/jest-dom";

describe("Menu는", () => {
    it("fastcampus 텍스트를 가지고 있어야 한다.", () => {
        const {getByText} = render(<Menu />);
        const menu = getByText("fastcampus");
        expect(menu).toBeInTheDocument();
    });
});
