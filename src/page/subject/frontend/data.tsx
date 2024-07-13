import { EditOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export interface IFrontendData {
    id: number;
    number: string;
    group: string;
    modul: string;
    count: string;
    status: string;
    btn: string;
    edit: ReactNode;
}

export const FrontendData: IFrontendData[] = [
    {
        id: 1,
        number: "1",
        group: "Frontend Basic",
        modul: "Kirish",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 2,
        number: "1",
        group: "Frontend Basic",
        modul: "HTML bilan tanishish",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 3,
        number: "1",
        group: "Frontend Basic",
        modul: "CSS bilan tanishish",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 4,
        number: "1",
        group: "Frontend Basic",
        modul: "Sass bilan tanishish",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
];
