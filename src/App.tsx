import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Store } from './pages/Store';
import { Courses } from './pages/Courses';
import { Contact } from './pages/Contact';
import { ProductDetail } from './pages/ProductDetail';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;