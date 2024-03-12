import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";
import Home from "./pages/Home";

function App() {
  const skillsRef = useRef()
  const projectsRef = useRef()
  return (
    <>
      <Navbar skillsRef={skillsRef} projectsRef={projectsRef} />
      <Home skillsRef={skillsRef} projectsRef={projectsRef}/>
    </>
  );
}

export default App;
