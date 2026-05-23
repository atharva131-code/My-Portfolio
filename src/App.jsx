import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MatrixBg from "./components/MatrixBG";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <MatrixBg /> 

        <div className="flex flex-col min-h-screen bg-transparent font-sans">

        <Navbar />

        <main className="flex-1 pt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center py-6 text-sm text-neutral-600 border-t border-white/[0.07]">
          © 2025 Atharva Mishra. Built with React & Tailwind CSS.
        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;