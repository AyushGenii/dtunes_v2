import {Routes, Route, Navigate } from "react-router-dom";

import HomePage from "@/pages/homePage";
import SignupPage from "@/pages/auth/SignupPage";
import SigninPage from "./pages/auth/SigninPage";
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignupPage />} />
         <Route path="/sign-in" element={<SigninPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    
  );
}

export default App;
