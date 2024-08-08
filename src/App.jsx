import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'
import Header from './assets/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <>
    <Header/>
      <RouterProvider router={router} />
    </>
  )
}

export default App