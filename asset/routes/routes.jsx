import MinDoorAbout from "../page/minDoorAbout"
import MinDoorHome from "../page/minDoorHome"
import MinDoorContact from "../page/minDoorContact"
import MinDoorService from "../page/minDoorService"
import MinDoorBookASession from "../page/minDoorBookSession"

export const RoutesList1 = [
    {
        path: '/',
        element: <MinDoorHome />
    },

    {
        path: '/about',
        element: <MinDoorAbout />
    },

    {
        path: '/service',
        element: <MinDoorService   />
    },

    {
        path: '/contact',
        element: <MinDoorContact />
    },

    {
        path: '/book-a-session',
        element: <MinDoorBookASession />
    }
]