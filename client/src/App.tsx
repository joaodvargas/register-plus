import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const IslandLandingPage = React.lazy(() => import('./pages/IslandLanding'));

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
      </Routes>
    </BrowserRouter>
  );
}

const DefaultPage = () => (
  <div>
    <h2>Choose your page</h2>
    <Link to='/island'>Island page</Link>
  </div>
);
