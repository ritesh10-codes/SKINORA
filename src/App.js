import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Skinora_Dashboard/Dashboard';
import About from './Skinora_About/About';
import Services from './Skinora_Services/Services';
import Contact from './Skinora_Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Router>
  );
}

export default App;
