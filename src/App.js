import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import Homepage from './pages/Homepage';
import Details from './component/Home/Details';
import Login from './component/Home/Login';
import RegisterPage from './component/Home/RegisterPage';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/acc' element={<Details />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
