// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import {Home} from './components/Home'

function App() {
  return (
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
