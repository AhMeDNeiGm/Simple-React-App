import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Layout/RootLayout";
import Menu from "./Resturant/Menu";
import ShoppingCart from "./Resturant/ShoppingCart";
import Error from "./Pages/Error";
import DashboardLayout from "./Layout/Dashboard";
import Users from "./Pages/Users";
import Posts, { PostsLoading } from "./Posts/Posts";
import Dashboard from "./Pages/DashboardHome";
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Admin from "./Auth/Admin";
import ProductForm from "./Resturant/ProductForm";

// const user = null;
const user = { name: "Ahmed" };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="post/:id?" element={<Post />} /> */}
      <Route path="post/new" element={<NewPost />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="menu" element={<Menu />} />
      <Route path="*" element={<Error />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute user={user}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="posts" element={<Posts />} loader={PostsLoading} />
        <Route path="post" element={<Post />} />
      </Route>
      <Route path="admin" element={<Admin />} />
      <Route path="productform/:id" element={<ProductForm />} />
    </Route>
  )
);

//   //  useEffect
//   //  1. Run After First Render & After Every Render
//   // useEffect(
//   //   () => {
//   //     console.log("Effect");
//   //   },
//   //   // 2. With Empty depsArr => After First Render Only
//   //   // []
//   //   // 3. With  depsArr => After First Render & depsArr Value Changes
//   //   [products]
//   //   4. CleanUp Fun => Before Next Effect
//   //      CleanUp Fun => اي عملية كلين اب حابب تعملها بتحطها في الريترن و تتنفذ قبل اليوزإفكت
//   //    return () => {
//   //    console.log("Clean Up");
//   // );
//   // };
//   // console.log("Render");

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
