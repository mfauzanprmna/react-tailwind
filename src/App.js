import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from './components/about';
import Nama from './components/nama';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <About /> }></Route>
        <Route path='/nama' element={ <Nama />}></Route>
      </Routes>
    </div>
  );
}

export default App;
