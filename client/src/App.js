
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Newnav from './components/header/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Signin from './components/signin/Signin';
import Signup from './components/signin/Signup';
function App() {
  return (
 <>
<Navbar/>
<Newnav/>
<Maincomp/>
<Footer/>

 </>

  );
}

export default App;
