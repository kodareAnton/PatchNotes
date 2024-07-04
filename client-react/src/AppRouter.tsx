import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Borderlands3 from "./Components/Page_One/Games/Borderlands3/Borderlands3";

// Lazy loading route components
const LazyPageOne = lazy(() => import("./Components/Page_One/Page_one"));
const LazyFortnite = lazy(
  () => import("./Components/Page_One/Games/Fortnite/Fortnite")
);
const LazyValorant = lazy(
  () => import("./Components/Page_One/Games/Valorant/Valorant")
);
const LazyDiablo4 = lazy(() => import("././Components/Page_One/Games/D4/D4"));
const LazyCs = lazy(() => import("././Components/Page_One/Games/Cs/Cs"));
const LazyCs2 = lazy(() => import("./Components/Page_One/Games/Cs2/Cs2"));
const LazyOverwatch = lazy(
  () => import("././Components/Page_One/Games/Overwatch/Overwatch")
);
const LazyFinals = lazy(
  () => import("./Components/Page_One/Games/Finals/Finals")
);

function AppRouter() {
  return (
    <Suspense fallback={<div className="lazy-loading-overlay">loading...</div>}>
      <Routes>
        <Route path="/" element={<LazyPageOne />} />
        <Route path="/Page_one/Fortnite/" element={<LazyFortnite />} />
        <Route path="/Page_one/Fortnite/:id" element={<LazyFortnite />} />
        <Route path="/Page_one/Valorant" element={<LazyValorant />} />
        <Route path="/Page_one/Valorant/:id" element={<LazyValorant />} />
        <Route path="/Page_one/D4" element={<LazyDiablo4 />} />
        <Route path="/Page_one/Cs" element={<LazyCs />} />
        <Route path="/Page_one/Cs2" element={<LazyCs2 />} />
        <Route path="/Page_one/Overwatch" element={<LazyOverwatch />} />
        <Route path="/Page_one/finals" element={<LazyFinals />} />
        <Route path="/Page_one/Borderlands3" element={<Borderlands3 />} />
        <Route path="*" />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
