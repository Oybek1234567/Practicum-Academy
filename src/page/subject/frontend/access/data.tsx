import { EditOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export interface ISuccessData {
    id: number;
    number: string;
    group: string;
    time: string;
    count: string;
    status: string;
    btn: string;
    edit: ReactNode;
}

export const SuccessData: ISuccessData[] = [
    {
        id: 1,
        number: "1",
        group: "Frontend bilan tanishuv",
        time: "00:05:30",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 2,
        number: "1",
        group: "Frontend Haqida",
        time: "00:20:25",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 3,
        number: "1",
        group: "Frontend Basic",
        time: "00:18:12",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
    {
        id: 4,
        number: "1",
        group: "Frontend Basic",
        time: "00:30:12",
        count: "20",
        status: "Aktiv",
        btn: "Batafsil",
        edit: <EditOutlined />,
    },
];
