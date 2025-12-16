import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Leadership from './components/Leadership';
import TherapyAreas from './components/TherapyAreas';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Leadership />
        <TherapyAreas />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;