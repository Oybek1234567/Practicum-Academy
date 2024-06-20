import { useState } from "react";

const SetOpenDrawer = () => {
    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(true);
        
    };
    const onClosed = () => {
        setOpen(false);
    };
    return {
        open,
        onOpen,
        onClosed,
    };
};

export default SetOpenDrawer;