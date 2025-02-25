import { useState } from 'react';
import BottomBar from '../components/bars/bottom-bar';
import TopBar from '../components/bars/topbar';
import './contactus-page.css';
import QuoteModal from '../components/modals/quote-modal';
import SideBarUnauth from '../components/bars/side-bar-unauth';

// import { services } from '../constants';
// import ServiceCard from '../components/cards/service-card';

const ContactUsPage = () => {

    const [onQuote, setOnQuote] = useState(false);
        const [toggleSideNav, setToggleSideNav] = useState(false)
    return (
        <>
            <TopBar toggleSideNav={()=>setToggleSideNav(!toggleSideNav)}/>
        <QuoteModal on={onQuote} off={() => setOnQuote(false)} />
        <SideBarUnauth on={toggleSideNav} off={()=>setToggleSideNav(!toggleSideNav)}/>
            <div className='contactus-container'>
                <div className='contactus-hero-section text-light justify-content-center align-items-center w-100 text-center  p-3'>
                    <h5 className='title'>
                        Contact us.
                    </h5>

                    <p className='text-center'>
                    Talk to us, our support channels are available 24hrs
                    </p>
                </div>
            </div>
            <BottomBar />
        </>

    )
}
export default ContactUsPage;