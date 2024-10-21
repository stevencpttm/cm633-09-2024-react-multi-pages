import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Fetch from "./Fetch";
import Root from "./Root";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Page1 />,
      },
      {
        path: "/page/:id",
        element: <Page2 />,
        loader: async (context) => {
          const id = context.params.id;

          // API Call to fetch data...
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts/${id}`
            );
            const json = await response.json();

            return {
              id: id,
              data: json,
            };
          } catch (err) {
            console.error(err);
          }
        },
      },
      {
        path: "/fetch/:id",
        element: <Fetch />,
        loader: async ({ params }) => {
          return {
            id: params.id,
          };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
