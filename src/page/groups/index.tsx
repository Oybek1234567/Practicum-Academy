import {  Input, Upload } from "antd";
import "../../style/main/__groups.scss";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import GroupsTable from "./table";

const Groups = () => {
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
                <button className="groups__form_filter">Filter</button>
                <button className="groups__form_add">+ Qo'shish</button>
            </form>
            </div>
            <GroupsTable />
        </>
    );
};

export default Groups;
