import { Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import ServicesPage from "./pages/services-page";
import PotfolioPage from "./pages/potfolio-page";
import AboutUsPage from "./pages/about-us-page";
import ContactUsPage from "./pages/contactus-page";
import TechPage from "./pages/tech-page";
import TechInfoPage from "./pages/tech-info-page";
// import HomeContainer from "./pages/containers/home-container";
// import TechPage from "./pages/tech-page";
// import TechInfoPage from "./pages/tech-info-page";
export default function () {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/potfolio" element={<PotfolioPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/tech-career" element={<TechPage/>} />
            <Route path="tech-career/:id" element={<TechInfoPage/>} />

            {/* <Route  element={<HomeContainer />}>
                <Route index />
                <Route path="tech-career" element={<TechPage />} />
                
            </Route> */}

        </Routes>
    )
}