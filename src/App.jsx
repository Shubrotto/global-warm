import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./component/About/About";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* basename={`/global-warm`} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
