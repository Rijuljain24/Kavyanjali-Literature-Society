import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./frontend/components/Navbar";
import ChatbotButton from "./frontend/components/ChatbotButton";
import LandingPage from "./frontend/Pages/LandingPage";
import SignUpLogin from "./frontend/Pages/SignUpLogin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpLogin />} />
      </Routes>
      <ChatbotButton />
    </div>
  );
}

export default App;
