import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import Homepage from './pages/Homepage';
import Details from './component/Home/Details';
import Login from './component/Home/Login';
import RegisterPage from './component/Home/RegisterPage';
import Profilepage from './component/Home/Profilepage';
import Listing from './pages/Listing';
import Bookings from './pages/Bookings';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import store from "./Store"
import { loadUser } from './Action/userAction';

function App() {


  const { isAuthenticated, user, loading } = useSelector((state) => state.user)
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])




  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/acc' element={<Details />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/profilepage' element={<Profilepage />} />
        <Route path='/listing' element={<Listing />} />

        <Route path='/bookings' element={<Bookings />} />
      </Routes>
      <ToastContainer autoClose={500} />
    </BrowserRouter>
  );
}

export default App;
