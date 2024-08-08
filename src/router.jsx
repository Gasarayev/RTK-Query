import { createBrowserRouter } from "react-router-dom";
import Basket from "./assets/components/Basket";
import CategoriesList from "./assets/components/CategoriesList";
import React from 'react';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <CategoriesList />,
      children: [
        {
          path: "basket",
          element: <Basket />
        }
      ]
    }
]);
