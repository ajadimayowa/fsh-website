import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
// import HomeContainer from "./pages/containers/home-container";
// import TechPage from "./pages/tech-page";
// import TechInfoPage from "./pages/tech-info-page";
export default function () {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route  element={<HomeContainer />}>
                <Route index />
                <Route path="tech-career" element={<TechPage />} />
                <Route path="tech-career/:id" element={<TechInfoPage />} />
            </Route> */}

        </Routes>
    )
}