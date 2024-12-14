import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <About />
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;