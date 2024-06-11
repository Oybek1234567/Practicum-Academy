import { ReactNode } from "react";
import Groups from "../page/groups";
import Help from "../page/help";
import Lesson from "../page/lesson";
import Main from "../page/main";
import References from "../page/references";
import Tasks from "../page/tasks";
import Lists from "../page/groups/lists/lists";

interface IRouter{
    id: number,
    path: string,
    element: ReactNode;
}

export const Router:IRouter[] = [
    {
        id: 1,
        path: "/",
        element: <Main />,
    },
    {
        id: 2,
        path: "/groups",
        element: <Groups />,
    },
    {
        id: 3,
        path: "/tasks",
        element: <Tasks />,
    },
    {
        id: 4,
        path: "/lesson",
        element: <Lesson />,
    },
    {
        id: 5,
        path: "/reference",
        element: <References />,
    },
    {
        id: 6,
        path: "/help",
        element: <Help />,
    },
    {
        id: 7,
        path: "/lists",
        element: <Lists />
    }
];