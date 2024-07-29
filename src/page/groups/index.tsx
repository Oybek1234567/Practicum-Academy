import { Input, Upload } from "antd";
import "../../style/main/index.scss";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import GroupsTable from "./table";
import UseDrawer from "./useDrawer";
import SetOpenDrawer from "../../hook/setOpenDrawer";
import { useState } from "react";
import { Data, IDataType } from "./data";

const Groups = () => {
    const { open, onOpen, onClosed } = SetOpenDrawer();
    const [originalData] = useState(Data as IDataType[]);
    const [sortedData, setSortedData] = useState(originalData);
    const [isAscending, setIsAscending] = useState(true);

    const handleSort = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();

        const sorted = isAscending
            ? [...sortedData].sort((a, b) => b.count - a.count)
            : [...originalData].sort((a, b) => a.count - b.count);

        setSortedData(sorted);
        setIsAscending(!isAscending);
    };

    return (
        <>
            <div className='groups'>
                <form className='groups__form'>
                    <h2 className='groups__form_title'>Guruhlar ro'yxati</h2>
                    <Upload className='groups__form_file'>
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
                    <button
                        type='button'
                        className='groups__form_filter'
                        onClick={handleSort}>
                        Filter
                    </button>
                    <button
                        type='button'
                        className='groups__form_add'
                        onClick={onOpen}>
                        + Qo'shish
                    </button>
                    <UseDrawer open={open} onClosed={onClosed} />
                </form>
            </div>
            <GroupsTable sortedData={sortedData} />
        </>
    );
};

export default Groups;
