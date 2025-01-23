import logo from './logo.svg';
import './App.css';
import { Routes,Router,Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import { Sidebar } from './components/sidebar';
import Archive from './components/archive';
import Bin from './Bin';
import Important from './important';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/archive' element={<Archive/>}></Route>
      <Route path='/bin' element={<Bin/>}></Route>
      <Route path='/important' element={<Important/>}></Route>

    </Routes>
  );
}

export default App;
