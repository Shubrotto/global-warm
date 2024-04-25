import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* basename={`/global-warm`} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
