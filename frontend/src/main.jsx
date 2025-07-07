import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import PrivateRoutes from "./pages/auth/PrivateRoutes.jsx";
import Register from "./pages/auth/Register.jsx";
import BlogDetails from "./pages/blog/BlogDetails.jsx";
import Profile from "./pages/user/Profile.jsx";
import CreateBlog from "./pages/blog/CreateBlog.jsx";
import AdminRoutes from "./pages/Admin/AdminRoutes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route index={true} path="/" element={<Home />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="/profile" element={<Profile/>} />
      </Route>
      <Route path="/" element={<AdminRoutes />}>
        <Route path="/create" element={<CreateBlog/>} />
        
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
