import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ROUTES from './router';
const router=createBrowserRouter(ROUTES)

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App