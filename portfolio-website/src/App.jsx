import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen selection:bg-primary-500/30 overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-12 pt-24 pb-20 flex flex-col gap-24 lg:gap-32">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
