import { useState } from "react";
import "../../../../../style/main/table/index.scss";
import { Icons } from "../../../../../assets/Icons";

const GroupsLessons = () => {
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(0);
    // const [secondBtn, setSecondBtn] = useState(false)

    // const showSecondBtn = () => {
    //     setSecondBtn(true)
    // }

    const Clicked = () => {
        setClicked((prevCount) => (prevCount + 1) % 2);
    };
    let buttonClass = "";
    if (clicked === 1) {
        buttonClass = "btn-clicked";
    } else {
        buttonClass = "btn-clicked-2";
    }
    const onCloseBtn = () => {
        setOpen(!open);
    };

    return (
        <div className='lessons'>
            <span className='lessons__header'>
                <h3>01</h3>
                <b>Kirish</b>
                <button onClick={onCloseBtn}>
                    <Icons.closeBtn
                        className={`button ${buttonClass}`}
                        onClick={Clicked}
                    />
                </button>
            </span>
            {open && (
                <div className='lessons__card'>
                     
                </div>
            )}
        </div>
    );
};

export default GroupsLessons;
