import { useState } from "react";
import { Table, TableColumnsType, Modal } from "antd";
import { DataPayments, IDataPayments } from "./data";
import ModalItems from "./modal";

const GroupsPayments = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                    }}
                    onClick={showModal}
                    type='button'>
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
                style={{ width: "1410px", fontWeight: "600" }}
            />
            <Modal
                title='Jumaniyozov Umidbek Dilshodovichning to‘lov grafigi'
                width={"734px"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <ModalItems />
            </Modal>
        </div>
    );
};

export default GroupsPayments;
