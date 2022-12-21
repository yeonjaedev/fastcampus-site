import {render, screen} from "@testing-library/react";
import LectureItem from "../components/lecture/LectureItem"
import "@testing-library/jest-dom";

describe("강의 아이템은", () => {
    it("썸네일을 가지고 있어야 한다.", () => {
        const {getByAltText} = render(<LectureItem />);
        const thumb = getByAltText("초격차 패키지");
        expect(thumb).toBeInTheDocument();
    });

    it("뱃지를 가지고 있어야 한다.", () => {
        const {getByText} = render(<LectureItem />);
        const badge = getByText("평생소장");
        expect(badge).toBeInTheDocument();
    });

    it("강의제목을 가지고 있어야 한다.", () => {
        const {getByRole} = render(<LectureItem />);
        const title = getByRole("heading",{
            name:'초격차 패키지'
        });
        expect(title).toBeInTheDocument();
    });

    it("강의설명을 가지고 있어야 한다.", () => {
        const {getByText} = render(<LectureItem />);
        const describe = getByText("강의설명");
        expect(describe).toBeInTheDocument();
    });
});
