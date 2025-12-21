import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Calculators } from './pages/Calculators';
import { ITRFiling } from './pages/ITRFiling';
import { Insurance } from './pages/Insurance';
import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/itr-filing" element={<ITRFiling />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
