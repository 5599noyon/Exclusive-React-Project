import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import SettingsPage from "./Components/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {index: true, Component: Home },
      {path: "/contact", Component:Contact },
      {path: "/about", Component:About },
      {path: "/loginpage", Component:LoginPage },
      {path: "/setting", Component:SettingsPage },
    ]
  },

  {
    path: "*",
    element: <ErrorPage/> ,
  }

]);

function App() {
  return (

  <>
  <RouterProvider router={router} />
  </>

  )
}

export default App
