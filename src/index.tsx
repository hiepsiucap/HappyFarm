/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  HomePage,
  EventList,
  ErrorPage,
  Layout,
  Login,
  Register,
  Project,
  ChooseSub,
  Projects,
  RegisterFarmer,
  UserLayOut,
  Events,
  Community,
  Orders,
  PriceTable,
  Chart,
  AdminLayout,
  AdminListEvent,
  AdminListProject,
  DashBoard,
} from "./page";
// import { ScrollToTop } from "./component";
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
        path: "/price",
        element: <PriceTable></PriceTable>,
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
      {
        path: "/registerfarmer",
        element: <RegisterFarmer></RegisterFarmer>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/user",
    element: <UserLayOut></UserLayOut>,
    children: [
      {
        path: "/user/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/user/events",
        element: <EventList></EventList>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/admin/events",
        element: <AdminListEvent></AdminListEvent>,
      },
      {
        path: "/admin/projects",
        element: <AdminListProject></AdminListProject>,
      },

      {
        path: "/admin/chart",
        element: <Chart></Chart>,
      },
    ],
  },
  {
    path: "/community",
    element: <Community></Community>,
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
