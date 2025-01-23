
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/home';
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
