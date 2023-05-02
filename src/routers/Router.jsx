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
  const router = createBrowserRouter([
    {
        path:'/',
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
              element: <ChefCard></ChefCard>
            },
            {
              path: '/recipe/:id',
              element: <RecipeDetails></RecipeDetails>,
              loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
            }
        ]
    }
  ]);


  export default router;