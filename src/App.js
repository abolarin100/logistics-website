// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Faqdtl from './components/Faqdtl';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Bookd from './components/Bookd';
import Bookmd from './components/Bookmd';
import Bookrw from './components/Bookrw';
import Pay from './components/Pay';


// Layout with Navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    {/* <Footer /> */}
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
            path="/faqdtl"
            element={
              <MainLayout>
                <Faqdtl />
              </MainLayout>
            }
          />
          <Route
            path="/bookd"
            element={
              <MainLayout>
                <Bookd />
              </MainLayout>
            }
          />
          <Route
            path="/bookmd"
            element={
              <MainLayout>
                <Bookmd />
              </MainLayout>
            }
          />
          <Route
            path="/bookrw"
            element={
              <MainLayout>
                <Bookrw />
              </MainLayout>
            }
          />
          <Route
            path="/pay"
            element={
              <MainLayout>
                <Pay />
              </MainLayout>
            }
          />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
