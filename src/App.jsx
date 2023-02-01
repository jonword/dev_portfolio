import Nav from "./components/Navigation/Nav";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  return (
    <div className="App flex">
      <Nav />
      <div className="main-container mt-26 mx-4 flex w-full shrink flex-col gap-96 border border-white pt-40 pb-40">
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
