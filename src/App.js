import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { initGamesMockAdapter, initPLayersMockAdapter, initStandsMockAdapter } from "./mock";
import Standings from "./pages/Standings";
import Players from "./pages/Players";
import BreadcrumbsMui from "./components/BreadcrumbsMui";
import Layout from "./components/Layout";
import Topbar from "./components/Topbar";

const App = () => {

  useEffect(() => {
    initGamesMockAdapter();
    initStandsMockAdapter();
    initPLayersMockAdapter();
  }, [])

  return (
    <>

      <Suspense fallback={<div>Dom Loading...</div>}>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto px-4 pb-10">
          <BrowserRouter>
          <Topbar/>
          <BreadcrumbsMui />
          <Layout/>
          </BrowserRouter>
        </div>
      </Suspense>
    </>
  );
};

export default App;