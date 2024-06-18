import { Drawer } from "antd";
import { FC } from "react";
interface ISetOpenDrawer {
    open: boolean;
    onClosed: () => void;
}
const UseDrawer: FC<ISetOpenDrawer> = ({ open, onClosed }) => {
    return (
        <div>
            <Drawer open={open} onClose={onClosed}>
                salom
            </Drawer>
        </div>
    );
};

export default UseDrawer;
