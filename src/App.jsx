import './App.css';
import Sam from './sam.jsx';
import Projects from './Projects.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
