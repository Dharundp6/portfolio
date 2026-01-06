import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralBackground from './components/ui/NeuralBackground';
import ParticleField from './components/ui/ParticleField';
import FloatingOrbs from './components/ui/FloatingOrbs';
import GeometricShapes from './components/ui/GeometricShapes';
import './styles/globals.css';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0f1c',
      color: '#ffffff'
    }}>
      <NeuralBackground />
      <ParticleField />
      <FloatingOrbs />
      <GeometricShapes />
      <Navbar />
      <main style={{
        position: 'relative',
        zIndex: 10
      }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
