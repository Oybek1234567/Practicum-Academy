import { Input, Tabs, Upload } from "antd";
import "../../../style/main/index.scss";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import GroupsPupils from "./table/pupils";
import GroupsJournal from "./table/journal";
import GroupsPayments from "./table/payments";
import GroupsLessons from "./table/lessons";
const Lists = () => {
    const onChange = (key: string) => {
        console.log(key);
    };
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
            <button type='button' className='lists__btn_add'>
                + O'quvchi qo'shish
            </button>
            <button type='button' className='lists__btn_course'>
                Kursni yakunlash
            </button>
            <Tabs
                onChange={onChange}
                type='card'
                items={[
                    {
                        label: "Pupils",
                        key: "pupils",
                        children: <GroupsPupils />,
                    },
                    {
                        label: "Journal",
                        key: "journal",
                        children: <GroupsJournal />,
                    },
                    {
                        label: "Payments",
                        key: "payments",
                        children: <GroupsPayments />,
                    },
                    {
                        label: "Lessons",
                        key: "lessons",
                        children: <GroupsLessons />,
                    },
                ]}
            />
        </div>
    );
};

export default Lists;
