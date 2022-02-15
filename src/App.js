

import './App.css';
import Home from './components/Home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {

  return (
   <>
   <Header/>
    <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/city/:id' element={<TourDetails/>} />

         </Routes>
         <Footer/>
    </>
  );
}
export default App;
