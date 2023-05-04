import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home";
import ChefCard from "../Home/ChefCard/ChefCard";
import Login from "../Home/Login/Login";
import Registration from "../Home/Registration/Registration";
import Blog from "../Home/blogs/Blog";
import RecipeDetails from "../Home/ChefCard/RecipeDetails";
import PrivateRoute from "../Private/PrivateRoute";
import HappyClients from "../xtrasection/HappyClients";
import Review from "../xtrasection/Review";
import ErrorPage from "../ErrorPage/ErrorPage";
  const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage> ,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
              path:'/login',
              element: <Login></Login>
            },
            {
              path:'/register',
              element: <Registration></Registration>
            },
            {
              path: '/blogs',
              element: <Blog></Blog>
            },
            {
              path: '/',
              element: <HappyClients></HappyClients>
            },
            {
              path: '/',
              element: <Review></Review>
            },
            {
              path: '/',
              element: <ChefCard></ChefCard>
            },
            {
              path: '/recipe/:id',
              element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
              loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
  ]);


  export default router;