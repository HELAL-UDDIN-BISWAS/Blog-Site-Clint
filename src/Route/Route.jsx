import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Ragester from "../pages/Ragester/Ragester";
import AddBlog from "../pages/Add-Blog/AddBlog";
import AllBlogs from "../pages/All-Blogs/AllBlogs";
import FeaturedBlogs from "../pages/Featured-Blogs/FeaturedBlogs";
import Wishlist from "../pages/Wishlist/Wishlist";
import Details from "../pages/Wishlist/Details";
import Blogdetails from "../pages/All-Blogs/Blogdetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"ragester",
            element:<Ragester></Ragester>
        },
        {
            path:"addblog",
            element:<AddBlog></AddBlog>,
        },
        {
            path:"allblogs",
            element:<AllBlogs></AllBlogs>
            
        },
        {
            path:"featuredblogs",
            element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
            path:"wishlist",
            element:<Wishlist></Wishlist>,
        },
         {
          path:"/details/:id",
          element:<Details></Details>,
          loader:({params})=>fetch(`http://localhost:5000/wishlist/${params.id}`)
        },
        {
          path:"blogdetails/:id",
          element:<Blogdetails></Blogdetails>,
          loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)

        }
      
      ],
    },
  ]);
  export default router