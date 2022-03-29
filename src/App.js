import Copyright from "./components/00-Copyright/Copyright";
import NavBar from "./components/01-NavBar/NavBar";
import Hero from "./components/02-Hero/Hero";
import About from "./components/03-About/Section";
import Flavors from "./components/04-Flavors/Flavors";
import Press from "./components/05-Press/Press";
import Merch from "./components/06-Merch/Merch";
import Footer from "./components/07-Footer/Footer";


function App() {
  return (
    <>
      <Copyright />
      <NavBar />
      <Hero />
      <About />
      <Flavors />
      <Press />
      <Merch />
      <Footer />
    </>
  );
}

export default App;
