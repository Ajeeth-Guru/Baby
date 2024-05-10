import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Sign from './components/Sign';
import{Routes,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login';
import Auth  from './components/Auth';
import Profile from './components/Profile';
import RequiredAuth from './components/RequiredAuth';
import Product from './components/Product';
import Stadium from './components/Stadium';
import Stadium1 from './components/stadium1';
import Stadium2 from './components/stadium2';


function App() {
  return (
    <div className="App">
      <Auth>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path='stadium' element={<Stadium/>}/>
        <Route path='stadium1' element={<Stadium1/>}/>
        <Route path='stadium2' element={<Stadium2/>}/>
        </Route>
        <Route path='/profile' element={<RequiredAuth><Profile/></RequiredAuth>}/>
      </Routes>
      <Footer className="footer"></Footer>
      </Auth>
    </div>
  );
}

export default App;
