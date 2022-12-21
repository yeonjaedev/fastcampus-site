import {Tag} from "interface/lecture";

interface Props {
    tagListData: [Tag];
}

const TagList = ({tagListData}: Props): JSX.Element => {
    const LectureTags = tagListData.map(tag => {
        return <span key={tag.id}>{tag.name}</span>;
    });
    return <div>{LectureTags}</div>;
};
export default TagList;
