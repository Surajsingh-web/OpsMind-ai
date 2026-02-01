import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import DocumentHistory from "./pages/DocumentHistory";
import Settings from "./pages/Settings";
import UserProfile from "./pages/UserProfile";



function App() {
  return (
     <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth route */}
        <Route path="/login" element={<Login />} />

        {/* Protected route (later) */}
        <Route path="/home" element={<Home />} />

        <Route path="/documents" element={<DocumentHistory />} />

        <Route path="/profile" element={<UserProfile />} />

        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;