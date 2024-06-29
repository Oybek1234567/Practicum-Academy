import { useState } from "react";
import "../../../../../style/main/table/index.scss";
import { Icons } from "../../../../../assets/Icons";
import DataLessons from "./data";
import SecondCard from "./secondCard";
import Button from "./Button";

const GroupsLessons = () => {
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(0);


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
        <>
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
                {open &&
                    DataLessons.map((item) => (
                        <div className='lessons__card' key={item.id}>
                            <picture className='lessons__card_icon'>
                                {item.icon}
                            </picture>
                            <p className='lessons__card_title'>{item.title}</p>
                            <span className='lessons__card_time'>
                                {item.time}
                            </span>
                            <Button  />
                        </div>
                    ))}
            </div>
                <SecondCard />
        </>
    );
};

export default GroupsLessons;
