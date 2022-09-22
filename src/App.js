import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import './App.css';
import Router from './Config/Router';
import Nav from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer Section/Footer';

function App() {
  Aos.init()
  return (
    <div className="App">
      <Nav className="Navbar"/>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
