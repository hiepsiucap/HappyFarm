/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  HomePage,
  ErrorPage,
  Layout,
  Login,
  Register,
  Project,
  ChooseSub,
  Projects,
} from "./page";
import { ScrollToTop } from "./component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/projects",
        children: [
          {
            path: "/projects",
            element: <Projects></Projects>,
          },
          {
            path: "/projects/:id",
            element: <Project></Project>,
          },
          {
            path: "/projects/:id/subscription",
            element: <ChooseSub></ChooseSub>,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
