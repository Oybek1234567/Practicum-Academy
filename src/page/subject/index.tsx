import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Upload } from "antd";
import SetOpenDrawer from "../../hook/setOpenDrawer";
import UseDrawer from "../groups/useDrawer";
import SubjectsTable from "./table";

const Tasks = () => {
  const { open, onOpen, onClosed } = SetOpenDrawer();
  return (
      <div className='subject'>
          <form className='groups__form'>
              <h2 className='groups__form_title'>Darslar ro'yxati</h2>
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
              <button className='groups__form_filter'>Filter</button>
              <button
                  type='button'
                  className='groups__form_add'
                  onClick={onOpen}>
                  + Qo'shish
              </button>
              <UseDrawer open={open} onClosed={onClosed} />
      </form>
        <SubjectsTable />
      </div>
  );
}

export default Tasks
