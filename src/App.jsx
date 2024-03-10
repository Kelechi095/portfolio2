import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNav from "./components/navbar/MainNav";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
        <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
