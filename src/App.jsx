import Nav from "./components/Nav";
import Home from "./components/Home";
import TechSkills from "./components/TechSkills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <TechSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
