import ProductList from "./components/ProductList";
import './App.css'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
//const element = <FontAwesomeIcon icon={faEnvelope} />

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductList />   
      <Footer />
    </>
  );
}


export default App;
