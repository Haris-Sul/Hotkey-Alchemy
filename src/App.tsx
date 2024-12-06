import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Remap from "./pages/Remap";
import Guide from "./pages/Guide";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/remap" element={<Remap />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<h1 className="text-center text-3xl"> We couldn't find the page you were looking for...</h1>} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
