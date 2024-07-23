
import Main from "../layout/Main";

import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../Components/Signup";
import PrivateRouter from "../layout/PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/Shop/CartPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/menu",
                element:<PrivateRouter><Menu/></PrivateRouter>,
            },
            {
                path:"/signup",
                element:<Signup/>,
            },
            {
                path:"/update-profile",
                element:<UpdateProfile/>,
            },
            {
                path:"/cart-page",
                element:<CartPage/>
            }
        ]
    },
]

);

export default router;