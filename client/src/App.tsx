import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const IslandLandingPage = React.lazy(() => import('./pages/IslandLanding'));
const ToursHomePage = React.lazy(() => import('./pages/ToursHome'));
const TourPage = React.lazy(() => import('./pages/Tour'));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />} />
        <Route
          path='/island'
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <IslandLandingPage />
            </React.Suspense>
          }
        />
        <Route
          path='/tours'
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <ToursHomePage />
            </React.Suspense>
          }
        />
        <Route
          path='/tour/:id'
          element={
            <React.Suspense fallback={<>Loading...</>}>
              <TourPage />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const DefaultPage = () => (
  <div>
    <h2>Choose your page</h2>
    <Link to='/island'>Island page</Link>
    <br />
    <Link to='/tours'>Tours page</Link>
  </div>
);
