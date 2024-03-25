import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { RouterProvider } from "./Router"
import Navigation from "./components/Navigation"
import Me from "./components/Me"

const appRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about/me",
    element: <Me />,
  },
]

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <Navigation />
    <RouterProvider router={appRouter} />
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
