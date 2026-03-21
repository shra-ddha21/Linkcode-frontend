<<<<<<< HEAD
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';

function App() {
  return <RouterProvider router={router} />;
=======
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const noLayoutPaths = ['/login', '/signup'];
  const showLayout = !noLayoutPaths.includes(location.pathname);

  return (
    <div className="app-container">
      {showLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {showLayout && <Footer />}
    </div>
  );
>>>>>>> c718952162a51fca5babe06406688083bd7c2476
}

export default App;
