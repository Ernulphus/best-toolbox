import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KnowledgeHub" />
        <Route path="/Downloads" /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
