import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../pages/Donations/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Donationed from "../pages/Donationed/Donationed";


const myCreatedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader: ()=> fetch('/blog.json')
            },
            {
                path:"/Donation",
                element: <Donation></Donation>
            },
            {
                path:"/Statistics",
                element: <Statistics></Statistics>
            },
            {
                path : "/donates/:id",
                element: <Donationed></Donationed>,
                loader:()=>fetch('/blog.json'),
                
            }
        ]
    }
])

export default myCreatedRoute;