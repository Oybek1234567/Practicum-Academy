import { useState } from "react";

const SetOpenDrawer = () => {
    const [open, setOpen] = useState(false);
    const onOpen = () => {
        setOpen(true);
        console.log("Hello");
        
    };
    const onClosed = () => {
        setOpen(false);
        console.log("Hello")
    };
    return {
        open,
        onOpen,
        onClosed,
    };
};

export default SetOpenDrawer;