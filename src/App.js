import "./App.css";
import "./assets/CSS/styles.css";
import "./components/navbar";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
