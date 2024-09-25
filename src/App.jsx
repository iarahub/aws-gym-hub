import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import Certifications from "./pages/Certifications";
import Labs from "./pages/Labs";
import Tutors from "./pages/Tutors";
import PracticeExams from "./pages/PracticeExams";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          {isLoggedIn && <Navigation onLogout={handleLogout} />}
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Index onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/knowledge-base" element={isLoggedIn ? <KnowledgeBase /> : <Navigate to="/" />} />
            <Route path="/certifications" element={isLoggedIn ? <Certifications /> : <Navigate to="/" />} />
            <Route path="/labs" element={isLoggedIn ? <Labs /> : <Navigate to="/" />} />
            <Route path="/tutors" element={isLoggedIn ? <Tutors /> : <Navigate to="/" />} />
            <Route path="/practice-exams" element={isLoggedIn ? <PracticeExams /> : <Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
