import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Register from "./pages/Register";
import RegisterIn from "./pages/RegisterIn";
import Login from "./pages/Login";
import Home from "./pages/Home";
// import Write from "./pages/Write";
// import {Single} from "./pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/style.scss"
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/registerIn",
        element: <RegisterIn />,
      },
    ],
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className = "container">
      <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
