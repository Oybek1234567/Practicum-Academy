import { Table, TableColumnsType } from "antd";
import { DataJournal, IDataJournal } from "./data";

const GroupsJournal = () => {
    const columns: TableColumnsType<IDataJournal> = [
        {
            title: "O'quvchi",
            dataIndex: "pupil",
            render: (text: string) => (
                <p style={{fontSize: "15px", fontWeight: "600"}}>{text}</p>
            )
        },
        {
            title: "Qoldirilgan darslar soni",
            dataIndex: "lesssonsCount",
        },
        {
            title: "19.11.2023",
            dataIndex: "firstDate",
        },
        {
            title: "21.11.2023",
            dataIndex: "secondDate",
        },
        {
            title: "23.11.2023",
            dataIndex: "thirdDate",
        },
        {
            title: "26.11.2023",
            dataIndex: "fourthDate",
        },
        {
            title: "28.11.2023",
            dataIndex: "fifthDate",
        },
        {
            title: "30.11.2023",
            dataIndex: "sixthDate",
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
            <Table columns={columns} dataSource={DataJournal} style={{width: "1410px"}}/>
        </div>
    );
};

export default GroupsJournal;
