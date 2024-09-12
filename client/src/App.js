
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Newnav from './components/header/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Signin from './components/signin/Signin';
import Signup from './components/signin/Signup';
import {Routes,Route} from "react-router-dom";
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
function App() {
  return (
 <>
<Navbar/>
<Newnav/>
<Routes>
  <Route path="/" element={<Maincomp/>}/>
  <Route path="/login" element={<Signin/>}/>
  <Route path="/register" element={<Signup/>}/>
  <Route path="/getproduct/:id" element={<Cart/>}/>
  <Route path='/buynow' element={<Buynow/>}/>
</Routes>

<Footer/>

 </>

  );
}

export default App;
