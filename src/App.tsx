import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './Pages/Home/Home'
import KnowledgeHub from './Pages/KnowledgeHub/KnowledgeHub';
import Downloads from './Pages/Downloads/Downloads';

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
