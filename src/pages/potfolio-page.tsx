import BottomBar from '../components/bars/bottom-bar';
import TopBar from '../components/bars/topbar';
import './services-page.css';
import { useState } from 'react';
import SideBarUnauth from '../components/bars/side-bar-unauth';
import QuoteModal from '../components/modals/quote-modal';
import { Tab, Tabs } from 'react-bootstrap';
import WebsiteTabs from '../components/tabs/website-tabs';

const PotfolioPage = () => {
    const [onQuote, setOnQuote] = useState(false);
        const [toggleSideNav, setToggleSideNav] = useState(false)

    return (
        <>
        <TopBar toggleSideNav={()=>setToggleSideNav(!toggleSideNav)}/>
        <QuoteModal on={onQuote} off={() => setOnQuote(false)} />
        <SideBarUnauth on={toggleSideNav} off={()=>setToggleSideNav(!toggleSideNav)}/>
            <div className='services-container'>
                <div className='services-hero-section text-light justify-content-center align-items-center w-100 text-center  p-3'>
                    <h5 className='title'>
                        See amazing things we have done.
                    </h5>

                    <p className='text-center'>
                    We have developed websites, web applications and mobile applications accross industries.
                    </p>
                </div>

                <div className="d-flex flex-column w-100 justify-content-center align-items-center">
                                <Tabs
                                    defaultActiveKey="website"
                                    id="uncontrolled-tab-example"
                                    variant="underline"
                                    className="mb-3 gap-5"
                                >
                                    <Tab eventKey="website" title="Websites"
                                        tabClassName=""
                                    >
                                        <WebsiteTabs/>
                                        {/* <ArtisanSavingTab thrifts={artisanSavingThrift} /> */}
                                    </Tab>

                                    <Tab eventKey="portals" title="Web Apps">
                                    <p>B</p>
                                    {/* <ArtisanWithdrawTab thrifts={artisanWithdrawThrift} /> */}
                                    </Tab>

                                    <Tab eventKey="mobile" title="Mobile Apps">
                                    <p>B</p>
                                    {/* <ArtisanWithdrawTab thrifts={artisanWithdrawThrift} /> */}
                                    </Tab>

                                    <Tab eventKey="branding" title="Branding">
                                    <p>B</p>
                                    {/* <ArtisanWithdrawTab thrifts={artisanWithdrawThrift} /> */}
                                    </Tab>

                                    


                                </Tabs>

                            </div>



            </div>
            <BottomBar />
        </>

    )
}
export default PotfolioPage;