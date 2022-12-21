import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
    it("강의목록이 렌더링 되어야 한다.", () => {
        const {getByTitle} = render(<Home />);
        const lectureList = getByTitle("lectureList", {
            name: "강의목록",
        });
        expect(lectureList).toBeInTheDocument();
    });
});
