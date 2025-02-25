import BottomBar from '../components/bars/bottom-bar';
import TopBar from '../components/bars/topbar';
import './services-page.css';
import { services } from '../constants';
import ServiceCard from '../components/cards/service-card';
import QuoteModal from '../components/modals/quote-modal';
import SideBarUnauth from '../components/bars/side-bar-unauth';
import { useState } from 'react';

const ServicesPage = () => {
    const [onQuote, setOnQuote] = useState(false);
        const [toggleSideNav, setToggleSideNav] = useState(false)

    return (
        <>
        <TopBar toggleSideNav={()=>setToggleSideNav(!toggleSideNav)}/>
        <QuoteModal on={onQuote} off={() => setOnQuote(false)} />
        <SideBarUnauth on={toggleSideNav} off={()=>setToggleSideNav(!toggleSideNav)}/>
            <div className='services-container p-0 m-0'>
            <div className='services-hero-section text-light justify-content-center align-items-center w-100 text-center  p-3'>
                    <h5 className='title'>
                        Services we provide.
                    </h5>

                    <p className='text-center'>
                    From general I.T Consultation to software development, <br/>
                    We got you covered.
                    </p>
                </div>

                <div className='d-flex flex-wrap p-4 justify-content-center' style={{ marginTop: '-70px' }}>
                    {
                        services.map((service) => (
                            <ServiceCard
                                bgColor={'light'}
                                title={service.title}
                                icon={service.icon}
                                description={service.description}
                            />
                        ))
                    }
                </div>
            </div>
            <BottomBar />
        </>

    )
}
export default ServicesPage;