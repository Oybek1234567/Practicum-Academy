import { Input, Upload } from "antd";
import "../../../style/main/index.scss"
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Lists = () => {
  return (
      <div className='lists'>
          <Link to={"/groups"} className='lists__link'>#P-10/2023 guruh</Link>
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
      <button type="button" className="lists__btn_add">+ O'quvchi qo'shish</button>
      <button type="button" className="lists__btn_course">Kursni yakunlash</button>
      </div>
  );
}

export default Lists
