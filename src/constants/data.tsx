import { ReactNode } from "react";
import { Icons } from "../assets/Icons";

interface IMenu{
    id: number;
    title: string;
    path: string;
    icon: ReactNode;
}
interface IMenus extends IMenu {
    children?: Omit<IMenu, "icon">[];
}
const MenuList: IMenus[] = [
    {
        id: 1,
        title: "Bosh sahifa",
        path: "/",
        icon: <Icons.home />,
    },
    {
        id: 2,
        title: "Guruhlar ro‘yxati",
        path: "/groups",
        icon: <Icons.book />,
    },
    {
        id: 3,
        title: "Darslar ro'yxati",
        path: "/tasks",
        icon: <Icons.subject />,
    },
    {
        id: 5,
        title: "Tavsiyalar",
        path: "/reference",
        icon: <Icons.file />,
    },
    {
        id: 6,
        title: "Yo'riqnomalar",
        path: "/help",
        icon: <Icons.help />,
    },
];

export {MenuList}