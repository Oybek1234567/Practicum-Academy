import { Table, TableColumnsType } from "antd";
import { ISubjectData, SubjectData } from "./data";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const SubjectsTable = () => {
    const columns: TableColumnsType<ISubjectData> = [
        {
            title: "#",
            dataIndex: "number",
        },
        {
            title: "Yo'nalish",
            dataIndex: "group",
            render: (text: string) => <b>{text}</b>,
        },
        {
            title: "Kurs nomi",
            dataIndex: "course",
            render: (text: string) => <b>{text}</b>,
        },
        {
            title: "Darslar soni",
            dataIndex: "count",
            render: (text: string) => <b>{text}</b>,
        },
        {
            title: "Kurs turi",
            dataIndex: "type",
            render: (text: string) => {
                const index = text.length;
                if (index === 6) {
                    return (
                        <p style={{ color: "#008E76", fontWeight: "600" }}>
                            {text}
                        </p>
                    );
                } else if (index > 6) {
                    return (
                        <p style={{ color: "#FFAA00", fontWeight: "600" }}>
                            {text}
                        </p>
                    );
                } else {
                    return (
                        <p style={{ color: "#00AEED", fontWeight: "600" }}>
                            {text}
                        </p>
                    );
                }
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: string) => (
                <p style={{ color: "#008E76", fontWeight: "600" }}>{text}</p>
            ),
        },
        {
            title: "Amal",
            dataIndex: "btn",
            render: (btn: string) => (
                <Link to={"/frontend"}>
                    <button
                        style={{
                            width: "135px",
                            height: "36px",
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor: "rgba(0, 142, 118, 0.1)",
                            color: "#008E76",
                            fontSize: "18px",
                        }}>
                        {btn}
                    </button>
                </Link>
            ),
        },
        {
            dataIndex: "edit",
            render: (edit: ReactNode) => (
                <button
                    style={{
                        border: "none",
                        width: "36px",
                        height: "36px",
                        backgroundColor: "rgba(41, 160, 227, 0.1)",
                        transform: "translateX(-50px)",
                    }}>
                    {edit}
                </button>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={SubjectData} />
        </div>
    );
};

export default SubjectsTable;
