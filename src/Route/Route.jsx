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
import Errorpage from "../pages/Errorpage/Errorpage";
import ContactUs from "../pages/ContactUS/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
      errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "ragester",
        element: <Ragester></Ragester>
      },
      {
        path: "addblog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "allblogs",
        element: <AllBlogs></AllBlogs>

      },
      {
        path: "featuredblogs",
        element: <FeaturedBlogs></FeaturedBlogs>
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://assignment-11-server-mu-plum.vercel.app/wishlist/${params.id}`)
      },
      {
        path: "blogdetails/:id",
        element: <Blogdetails></Blogdetails>,
        loader: ({ params }) => fetch(`https://assignment-11-server-mu-plum.vercel.app/blog/${params.id}`)
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      }
    ],
  },
]);
export default router