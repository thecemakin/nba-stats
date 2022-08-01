import { Routes, Route } from "react-router-dom"
import { lazy } from "react";
import Standings from "../pages/Standings";
import Players from "../pages/Players";

const Home = lazy(() => import("../pages/Home"));
export default function Layout() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>Page not found</h1>} />
                <Route path="/standings" element={<Standings />} />
                <Route path="/players" element={<Players />} />
            </Routes>
        </div>
    )
}
