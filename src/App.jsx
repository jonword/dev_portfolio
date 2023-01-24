import Nav from "./components/Navigation/Nav";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-container">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
