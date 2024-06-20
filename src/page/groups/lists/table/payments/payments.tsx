import { Table, TableColumnsType } from "antd";
import { DataPayments, IDataPayments } from "./data";

const GroupsPayments = () => {
    const columns: TableColumnsType<IDataPayments> = [
        {
            title: "O'quvchi",
            dataIndex: "pupil",
            render: (text: string) => (
                <p style={{ fontSize: "15px", fontWeight: "600" }}>{text}</p>
            ),
        },
        {
            title: "Umumiy to’lov summasi",
            dataIndex: "common",
        },
        {
            title: "Qarzdorlik summasi",
            dataIndex: "debt",
            render: (text: string) => (
                <p style={{ color: "#FF5252" }}>{text}</p>
            ),
        },
        {
            title: "To‘langan summa",
            dataIndex: "paid",
            render: (text: string) => (
                <p style={{ color: "#008E76" }}>{text}</p>
            ),
        },
        {
            title: "So‘ngi to’lov vaqti",
            dataIndex: "deadline",
        },
        {
            title: "Amal",
            dataIndex: "action",
            render: (text: string) => (
                <button
                    style={{
                        width: "195px",
                        height: "38px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "rgba(41, 160, 227, 0.1)",
                        color: "#29A0E3",
                        fontSize: "18px",
                        cursor: "pointer",
                    }}>
                    {text}
                </button>
            ),
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={DataPayments}
                style={{ width: "1410px", fontWeight:'600' }}
            />
        </div>
    );
};

export default GroupsPayments;
