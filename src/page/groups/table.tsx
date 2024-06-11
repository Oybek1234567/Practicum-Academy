import { Table, TableColumnsType } from "antd";
import { Data, IDataType } from "./data";
import { Link } from "react-router-dom";

const GroupsTable = () => {
    const columns: TableColumnsType<IDataType> = [
        {
            title: "#",
            dataIndex: "key",
        },
        {
            title: "Guruh kodi",
            dataIndex: "link",
            render: (text: string) => <Link to={"/lists"}>{text}</Link>,
        },
        {
            title: "Yo'nalish",
            dataIndex: "group",
        },
        {
            title: "Dars kunlari",
            dataIndex: "day",
        },
        {
            title: "Dars vaqti",
            dataIndex: "time",
        },
        {
            title: "O'quvchilar soni",
            dataIndex: "count",
        },
        {
            title: "Dars boshlangan sana",
            dataIndex: "lessonStarted",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text: string) => (
                <button
                    style={{
                        width: "123px",
                        height: "38px",
                        borderRadius: "50px",
                        border: "none",
                        backgroundColor: "rgba(7, 162, 135, 0.1)",
                        color: "#07A287",
                        fontSize: "18px",
                        cursor: "pointer",
                    }}>
                    {text}
                </button>
            ),
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text: string) => (
                <button
                    style={{
                        width: "123px",
                        height: "38px",
                        borderRadius: "50px",
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
            <Table columns={columns} dataSource={Data} />
        </div>
    );
};

export default GroupsTable;
