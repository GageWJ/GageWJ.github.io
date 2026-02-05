
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ProjectList from './pages/ProjectList';
import Research from './pages/Research';
import AssistantPage from './pages/AssistantPage';
import CyberAssistant from './components/CyberAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/research" element={<Research />} />
            <Route path="/assistant" element={<AssistantPage />} />
          </Routes>
        </main>
        
        {/* Global Components */}
        <CyberAssistant />
        
        <footer className="bg-black/50 border-t border-white/5 py-12 px-6 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 font-mono text-xs">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 CYBERNEXUS PROTOCOL - ALL RIGHTS RESERVED</p>
              <p className="mt-1 opacity-50">EST. CONNECTION VIA ENCRYPTED TUNNEL v2.4.0</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
