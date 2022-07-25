import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { initGamesMockAdapter, initLeaguesMockAdapter, initPLayersMockAdapter, initStandsMockAdapter } from "./mock";
import Standings from "./pages/Standings";
import Players from "./pages/Players";
import Leagues from "./pages/Leagues";



const Home = lazy(() => import("./pages/Home"));

const App = () => {

  useEffect(() => {
    initGamesMockAdapter();
    initStandsMockAdapter();
    initPLayersMockAdapter();
    initLeaguesMockAdapter();
  }, [])

  return (
    <>
    
    <Suspense fallback={<div>Dom Loading...</div>}>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Page not found</h1>} />
            <Route path="/standings" element={<Standings/>}/>
            <Route path="/players" element={<Players/>} />
            <Route path="/leagues" element={<Leagues/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
    </>
  );
};

export default App;