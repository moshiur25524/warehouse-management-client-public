import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inventories from './pages/Inventories/Inventories';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Shared/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import SignUp from './pages/Login/SignUp/SignUp';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import ManageBook from './pages/ManageBook/ManageBook';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
              <ManageBook></ManageBook>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
