import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RoutesList1 } from "./routes";

export const MyAppRouter1 = () => (
    <RouterProvider router={createBrowserRouter(RoutesList1)}/>
)