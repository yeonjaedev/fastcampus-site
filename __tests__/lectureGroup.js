import {render, screen} from "@testing-library/react";
import LectureGroup from "../components/lecture/LectureGroup"
import "@testing-library/jest-dom";

describe("강의 그룹은", () => {
    it("제목을 가지고 있어야 한다.", () => {
        const {getByRole} = render(<LectureGroup />);
        const lectureTitle = getByRole("heading");
        expect(lectureTitle).toBeInTheDocument();
    });

    it("뱃지를 가지고 있어야 한다.", () => {
        const {getByText} = render(<LectureGroup />);
        const badge = getByText("best");
        expect(badge).toBeInTheDocument();
    });
});
