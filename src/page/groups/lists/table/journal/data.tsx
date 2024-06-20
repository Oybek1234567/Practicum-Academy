import { ReactNode } from "react";
import { Icons } from "../../../../../assets/Icons";

export interface IDataJournal {
    id: number;
    pupil: string;
    lesssonsCount: number;
    firstDate: ReactNode;
    secondDate: ReactNode;
    thirdDate: ReactNode;
    fourthDate: ReactNode;
    fifthDate: ReactNode;
    sixthDate: ReactNode;
    action: string;
}

const DataJournal: IDataJournal[] = [
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
    {
        id: 1,
        pupil: "Jumaniyozov Umidbek Dilshodovich",
        lesssonsCount: 4,
        firstDate: <Icons.tick />,
        secondDate: <Icons.tick />,
        thirdDate: <Icons.err />,
        fourthDate: <Icons.tick />,
        fifthDate: <Icons.err />,
        sixthDate: <Icons.tick />,
        action: "Davomatni yuklash",
    },
];
export {DataJournal}