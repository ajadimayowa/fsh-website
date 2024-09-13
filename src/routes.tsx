import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import HomeContainer from "./pages/containers/home-container";
import TechPage from "./pages/tech-page";
export default function () {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />}>
                <Route index element={<HomePage />} />
                <Route path="tech-career" element={<TechPage />} />
            </Route>

        </Routes>
    )
}