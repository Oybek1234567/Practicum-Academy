import { ReactNode } from "react";
import Groups from "../page/groups";
import Help from "../page/help";
import Lesson from "../page/lesson";
import Main from "../page/main";
import Tasks from "../page/subject";
import Lists from "../page/groups/lists/lists";
import Frontend from "../page/subject/frontend";
import Success from "../page/subject/frontend/access";
import Video from "../page/subject/frontend/access/video";

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
        path: "/help",
        element: <Help />,
    },
    {
        id: 6,
        path: "/lists",
        element: <Lists />
    },
    {
        id: 7,
        path: "/frontend",
        element: <Frontend />
    },
    {
        id: 8,
        path: "/success",
        element: <Success />
    },
    {
        id: 9,
        path: "/video",
        element: <Video />,
    }
];