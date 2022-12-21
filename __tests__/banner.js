import {render, screen} from "@testing-library/react";
import Banner from "../components/Banner"
import "@testing-library/jest-dom";

describe("Banner", () => {
    it("배너가 렌더링 되어야 한다.", () => {
        const {getByText} = render(<Banner />);
        const banner = getByText("배너");
        expect(banner).toBeInTheDocument();
    });
});
