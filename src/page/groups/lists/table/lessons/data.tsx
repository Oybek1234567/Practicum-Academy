import { ReactNode } from "react";
import { Icons } from "../../../../../assets/Icons";

export interface IDataLessons {
    id: number;
    icon: ReactNode;
    title: string;
    time: string;
    firstBtn: string;
    secondBtn: string;
}

const DataLessons: IDataLessons[] = [
    {
        id: 1,
        icon: <Icons.video />,
        title: "Xush kelibsiz",
        time: "00:06:00",
        firstBtn: "Darsni ochish",
        secondBtn: "Dars ochilgan",
    },
    {
        id: 2,
        icon: <Icons.video />,
        title: "Darslarni kompyuterda ko'rish",
        time: "00:06:00",
        firstBtn: "Darsni ochish",
        secondBtn: "Dars ochilgan",
    },
    {
        id: 3,
        icon: <Icons.video />,
        title: "Darslarni telefonda ko'rish",
        time: "00:08:00",
        firstBtn: "Darsni ochish",
        secondBtn: "Dars ochilgan",
    },
    {
        id: 4,
        icon: <Icons.video />,
        title: "Ommaviy oferta bilan tanishib chiqing",
        time: "00:05:00",
        firstBtn: "Darsni ochish",
        secondBtn: "Dars ochilgan",
    },
    {
        id: 5,
        icon: <Icons.video />,
        title: "Yopiq guruhga kirish",
        time: "00:05:00",
        firstBtn: "Darsni ochish",
        secondBtn: "Dars ochilgan",
    },
    {
        id: 6,
        icon: <Icons.video />,
        title: "Savol so'rash bo'yicha qo'llanma",
        time: "00:05:00",
        firstBtn: "Darsni ochish",
        secondBtn: "Dars ochilgan",
    },
];
export default DataLessons;
