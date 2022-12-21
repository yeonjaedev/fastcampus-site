import useLectures from "hooks/useLectures";
import LectureItem from "./LectureItem";
import {useQuery} from "react-query";
const LectureList = (): JSX.Element => {
    const {isLoading, data} = useLectures();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const lectureItems = data.map((lecture: any) => {
        return <LectureItem key={lecture.id} lecture={lecture} />;
    });
    console.log(data);
    return <div style={{textAlign: "center"}}>{lectureItems}</div>;
};
export default LectureList;
