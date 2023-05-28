import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {

  return (
     <UserProvider>
       <Router>
          <Navbar />
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />}  />
          <Route path="/" element={<LoginPage />}  />
        </Routes>
        <Footer />
      </Router> 
    </UserProvider>
  );
};

export default App;
