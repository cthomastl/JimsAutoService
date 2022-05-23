import logo from './logo.svg';
import './App.css';

import CarShop from './components/CarShop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<CarList />}></Route>
      <Route index element={<CarList />}></Route>
      <Route path ="/addCar" element = {<CarShop />  }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
