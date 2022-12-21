// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";
const mockCategory = {
    id: 0,
    name: "프로그래밍",
};
const mockTags = [
    {id: 0, name: "무료세미나"},
    {id: 1, name: "JavaScript"},
    {id: 2, name: "비동기처리"},
];
const lecturesData = [
    {
        id: 0,
        category: mockCategory,
        title: "패스트캠퍼스 개발 세미나 D-day Vol. 2 (2022년 12월)",
        tags: mockTags,
        description: "매월 마지막주 수요일 패스트캠퍼스가 준비한 무료 개발 세미나가 여러분을 찾아갑니다.",
        thumbs: "/one.png",
        isHot: true,
        isNew: true,
    },
    {
        id: 1,
        category: mockCategory,
        title: "한 번에 끝내는 Java/Spring 웹 개발 Essential",
        tags: mockTags,
        description: "Spring 핵심 기술 스택부터 Kotlin, Redis, RabbitMQ 등 백엔드 최신 기술을 한 번에!",
        thumbs: "/two.png",
        isHot: true,
        isNew: true,
    },
    {
        id: 2,
        category: mockCategory,
        title: "파이썬으로 할 수 있는 모든 것 with 47개 프로젝트 초격차 패키지",
        tags: mockTags,
        description: "파이썬으로 할 수 있는 모든 것을 다룬다! 표준 라이브러리, 게임, 웹 크롤링, 업무 자동화",
        thumbs: "/three.png",
        isHot: true,
        isNew: true,
    },
];
type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(lecturesData);
}
