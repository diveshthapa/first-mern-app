import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>Homepage</h1>}/>
      <Route path='/login' element={<h1>Loginpage</h1>}/>
      <Route path='/register' element={<h1>Register</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
