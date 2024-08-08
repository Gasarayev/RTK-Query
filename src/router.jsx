import React from 'react';
import MainRoot from "./assets/Pages/MainRoot";
import Home from "./assets/Pages/Home";
import Detail from './assets/Pages/Detail';

// export const router = createBrowserRouter([
//     {
//       path: "/",
      
      
//     }
// ]);


const ROUTES=[
  {
    path:'/',
    element:<MainRoot/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:`/Detail/:id`,
        element:<Detail/>
      }
    ]
  }
]
export default ROUTES