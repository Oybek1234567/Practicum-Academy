import { EditOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export interface ISubjectData{
    id: number;
    number: string;
    group: string;
    course: string;
    count: string;
    type: string;
    status: string;
    btn: string;
    edit: ReactNode;
}

export const SubjectData:ISubjectData[] = [
    {
        id: 1,
        number: "1",
        group: "Frontend dasturlash",
        course: "Frontend Basic",
        count: "4/20",
        type: "Asosiy",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 2,
        number: "1",
        group: "Frontend dasturlash",
        course: "Git bilan ishlash",
        count: "4/10",
        type: "Qo'shimcha",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 3,
        number: "1",
        group: "Frontend dasturlash",
        course: "Loyihani deploy qilish",
        count: "4/8",
        type: "Bonus",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
];