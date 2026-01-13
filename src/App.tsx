import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import KnowledgeHub from './components/KnowledgeHub/KnowledgeHub';
import Downloads from './components/Downloads/Downloads';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KnowledgeHub" element={<KnowledgeHub />} />
        <Route path="/Downloads" element={<Downloads />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
