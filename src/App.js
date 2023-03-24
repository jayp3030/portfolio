import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Social from './components/Social';
import About from './components/About';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ResponsiveNavbar from './components/ResponsiveNavbar';


function App() {
  return (
    <>
    <ResponsiveNavbar />
    <Nav />
    <Social/>
    <Home />
    <About/>
    <Projects/>
    {/* <Contact/> */}
    <Footer/>
    </>
  );
}

export default App;
