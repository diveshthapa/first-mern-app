import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import Homepage from './pages/Homepage';
import Details from './component/Home/Details';
import Login from './component/Home/Login';
import RegisterPage from './component/Home/RegisterPage';
import Profilepage from './component/Home/Profilepage';
import Listing from './pages/Listing';
import Bookings from './pages/Bookings';
import { Toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/acc' element={<Details />}/>

      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<RegisterPage/>}/>

      <Route path='/profilepage' element={<Profilepage/>}/>
      <Route path='/listing' element={<Listing/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
    </Routes>
    <ToastContainer autoClose={5000}/>
    </BrowserRouter>
  );
}

export default App;
