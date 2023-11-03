// import styled from 'styled-components';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const BASE_URL = 'https://fakestoreapi.com';
export default function App() {
  const [progress, setProgress] = useState(0);
  const updateTopLoadingBar = (value) => {
    setProgress(value);
  };
  return (
    <BrowserRouter>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home updateTopLoadingBar={updateTopLoadingBar} />}
        />
        <Route
          path="/:category"
          element={<Home updateTopLoadingBar={updateTopLoadingBar} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// const Wrapper = styled.section``;
