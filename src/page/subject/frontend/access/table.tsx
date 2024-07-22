import { Table, TableColumnsType } from "antd";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { ISuccessData, SuccessData } from "./data";

const SuccessTable = () => {
    const columns: TableColumnsType<ISuccessData> = [
        {
            title: "#",
            dataIndex: "number",
        },
        {
            title: "Kurs nomi",
            dataIndex: "group",
            render: (text: string) => <b>{text}</b>,
        },
        {
            title: "Davomiyligi",
            dataIndex: "time",
            render: (text: string) => <b>{text}</b>,
        },
        {
            title: "Darslar soni",
            dataIndex: "count",
            render: (text: string) => <b>{text}</b>,
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
                <Link to={"/success"}>
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
                        transform: "translateX(-90px)",
                    }}>
                    {edit}
                </button>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={SuccessData} />
        </div>
    );
};

export default SuccessTable;
