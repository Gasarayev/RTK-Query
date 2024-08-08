import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Header from './assets/components/Header';
import CategoriesList from './assets/components/CategoriesList';
// import Basket from './assets/components/Basket';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CategoriesList />} />
          {/* <Route path="/basket" element={<Basket />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;