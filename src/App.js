import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// pages
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<div>Dom Loading...</div>}>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;