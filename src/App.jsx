import Nav from "./components/Navigation/Nav";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <div className="App flex justify-between gap-12">
      <Nav />
      <div className="main-container flex flex-col justify-center mt-28 mr-80 w-full border border-shadow">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
