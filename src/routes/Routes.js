import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Details from "../pages/Details/Details";
import AddProject from "../pages/AddProject/AddProject";

const router = createBrowserRouter([
    {
        path : "/",
        element : <LandingPage/>
    },
    {
        path : "/signup",
        element : <SignUp/>
    },
    {
        path : "/home",
        element : <Home/>
    },{
        path : "/login",
        element : <Login/>
    },
    {
        path : "/details/:id",
        element : <Details/>
    },
    {
        path : "/add",
        element : <AddProject/>
    }
])
const Routes = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default Routes;