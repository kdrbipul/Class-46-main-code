import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import SignIn from "../Components/LoginAccess/SignIn";
import SignUP from "../Components/LoginAccess/SignUP";
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
                path:'/signIn',
                element:<SignIn />
            },
            {
                path:'/register',
                element:<SignUP />
            }
        ]
    }
])

export default router;