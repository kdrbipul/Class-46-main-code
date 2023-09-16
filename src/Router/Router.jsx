import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/registration',
                element:<Registration />
            }
        ]
    }
])


export default router;