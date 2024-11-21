import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import RecentProjects from "./components/RecentProjects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <AboutMe />
      <RecentProjects />
      <Skills />
    </div>
  );
}

export default App;
