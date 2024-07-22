import { Drawer } from "antd";
import { FC } from "react";
import "../../style/main/__drawer.scss";
interface ISetOpenDrawer {
    open: boolean;
    onClosed: () => void;
}
const UseDrawer: FC<ISetOpenDrawer> = ({ open, onClosed }) => {
    return (
        <div className="drawer">
            <Drawer open={open} onClose={onClosed}>
                <h1 style={{ color: "#166199" }}>Kurs qo'shish</h1>
                <input type="text" placeholder="Kurs nomi"/>
            </Drawer>
        </div>
    );
};

export default UseDrawer;
