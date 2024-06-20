import { Table, TableColumnsType } from "antd";
import { DataPupils, IDataTypePupils } from "./data";

const GroupsPupils = () => {
    const columns: TableColumnsType<IDataTypePupils> = [
        {
            title: "O'quvchi kodi",
            dataIndex: "code",
        },
        {
            title: "O'quvchi",
            dataIndex: "student",
        },
        {
            title: "Telefon raqami",
            dataIndex: "number",
        },
        {
            title: "Loyiha",
            dataIndex: "project",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: string) => {
                const index = text.includes("O'qimoqda") ? (
                    <p style={{ color: "#008E76", fontWeight: "600" }}>
                        {text}
                    </p>
                ) : (
                    <p style={{ color: "#FF5252", fontWeight: "600" }}>
                        {text}
                    </p>
                );
                return index;
            },
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
            <Table columns={columns} dataSource={DataPupils} />
        </div>
    );
};

export default GroupsPupils;
