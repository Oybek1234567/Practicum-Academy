import { Input, Tabs, Upload } from "antd";
import "../../../style/main/index.scss";
import {
    DiffOutlined,
    DownloadOutlined,
    FileDoneOutlined,
    SearchOutlined,
    UserSwitchOutlined,
    WalletOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import GroupsJournal from "./table/journal/journal";
import GroupsPayments from "./table/payments/payments";
import GroupsLessons from "./table/lessons/lessons";
import UseDrawer from "../useDrawer";
import SetOpenDrawer from "../../../hook/setOpenDrawer";
import GroupsPupils from "./table/pupils/pupils";

const Lists = () => {
    const { open, onOpen, onClosed } = SetOpenDrawer();
    return (
        <div className='lists'>
            <Link to={"/groups"} className='lists__link'>
                #P-10/2023 guruh
            </Link>
            <Upload className='lists__file'>
                <p>
                    Export excel
                    <span>
                        <DownloadOutlined />
                    </span>
                </p>
            </Upload>
            <Input
                type='search'
                addonAfter={<SearchOutlined />}
                placeholder='Izlash'
                className='groups__form_input'
            />
            <button type='button' className='lists__btn' onClick={onOpen}>
                Darsni boshlash
            </button>
            <UseDrawer open={open} onClosed={onClosed} />
            <Tabs
                type='card'
                items={[
                    {
                        label: "O'quvchilar ro'yxati",
                        key: "pupils",
                        icon: <UserSwitchOutlined />,
                        children: <GroupsPupils />,
                    },
                    {
                        label: "Jurnal",
                        key: "journal",
                        icon: <DiffOutlined />,
                        children: <GroupsJournal />,
                    },
                    {
                        label: "To'lovlar grafigi",
                        key: "payments",
                        icon: <WalletOutlined />,
                        children: <GroupsPayments />,
                    },
                    {
                        label: "Darslar ro'yxati",
                        key: "lessons",
                        icon: <FileDoneOutlined />,
                        children: <GroupsLessons />,
                    },
                ]}
                size='large'
                style={{
                    fontSize: "20px",
                    marginTop: "30px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                }}
            />
        </div>
    );
};

export default Lists;
