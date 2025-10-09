import "./global.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutonPage from "./pages/SolutionPage";
import Portofolio from "./pages/Portfolio";
import Galeri from "./pages/GalleryPage";
import Kontak from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-10">
          {/* tambahkan padding top */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/solusi-kami" element={<SolutonPage />} />
            <Route path="/portofolio" element={<Portofolio />} />
            <Route path="/galeri-kami" element={<Galeri />} />
            <Route path="/kontak-kami" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
