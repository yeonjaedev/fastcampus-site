import {Lecture} from "interface/lecture";
import TagList from "../tags/TagList";
interface Props {
    lecture: Lecture;
}
const LectureItem = ({lecture}: Props): JSX.Element => {
    return (
        <div>
            <img alt="초격차 패키지" src={lecture.thumbs} width={50} height={50} />
            <TagList tagListData={lecture.tags} />
            <h3>{lecture.title}</h3>
            <p>{lecture.description}</p>
        </div>
    );
};
export default LectureItem;
