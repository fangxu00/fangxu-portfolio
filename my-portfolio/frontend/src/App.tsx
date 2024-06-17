import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Biography from './components/Biography';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Upload from './components/Upload';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" element={<Biography />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/upload" element={<Upload />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
