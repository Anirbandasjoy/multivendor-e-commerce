import { lazy } from "react";

const Login = lazy(() => import("../../views/auth/Login"))
const Registation = lazy(() => import("../../views/auth/Registation"))

const publicRoutes = [
    {
        path: "/login",
        element: <Login />
    }, {
        path: "/registation",
        element: <Registation />
    },
];

export default publicRoutes