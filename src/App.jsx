// import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// const Wrapper = styled.section``;
