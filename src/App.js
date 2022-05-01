import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inventories from './pages/Inventories/Inventories';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <h1>Welcome To My Books House</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
