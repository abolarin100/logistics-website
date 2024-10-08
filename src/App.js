// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Ba from './components/Ba';
import Da from './components/Da';
import Faqdtl from './components/Faqdtl';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import TutorLogin from './components/TutorLogin';


// Layout with Navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

// Layout without Navbar
const AuthLayout = ({ children }) => <>{children}</>;

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/business-analysis"
            element={
              <MainLayout>
                <Ba />
              </MainLayout>
            }
          />
          <Route
            path="/data-analysis"
            element={
              <MainLayout>
                <Da />
              </MainLayout>
            }
          />
          <Route
            path="/faqdtl"
            element={
              <MainLayout>
                <Faqdtl />
              </MainLayout>
            }
          />

          <Route
            path="/adminlogin"
            element={
              <AuthLayout>
                <AdminLogin />
              </AuthLayout>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <AuthLayout>
                <AdminDashboard />
              </AuthLayout>
            }
          />
          <Route
            path="/tutorlogin"
            element={
              <AuthLayout>
                <TutorLogin />
              </AuthLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
