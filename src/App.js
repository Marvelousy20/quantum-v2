import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero/hero";
import Mint from "./components/Mint";
import QuantumSoul from "./components/QuantumSouls";
import VideoGallery from "./components/VideoGalary";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FAQ from "./components/FAQ";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Hero />
      <QuantumSoul />
      <About />
      <Mint />
      <FAQ />
    </div>
  );
}

export default App;
