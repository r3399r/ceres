import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import AboutSlug from './page/AboutSlug';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/about/:slug" element={<AboutSlug />} />
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
