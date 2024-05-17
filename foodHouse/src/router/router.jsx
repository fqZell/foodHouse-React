import { createBrowserRouter } from "react-router-dom"
import Root from "../Pages/Root"
import HomePage from "../Pages/HomePage"
import SignUp from "../Pages/SignUp"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    }
])

export default router