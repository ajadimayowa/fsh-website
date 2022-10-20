import React, { useState } from "react";
import './home.css'
import NavBar from "../../components/main/NavBar";
import MobileNav from "../../components/main/MobileNav";
import { paragraphs } from '../../store/data'
import PrimaryButton from "../../components/buttons/PrimaryButton";


function Home() {
    const [mobileNavState, setMobileNaveState] = useState(false)
    function toggleMobileNav() {
        setMobileNaveState(!mobileNavState)
    }
    return (
        <>
            <NavBar hamburgerPressed={toggleMobileNav} />
            <MobileNav toggleMobileNav={mobileNavState ? 'mobile-nav-on' : 'mobile-nav-off'} />
            <div className="home">
                <div className="section-one">
                    <div style={{ overflow: 'hidden', height: '270px', fontWeight: '900', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden', color: '#192252', lineHeight: '40px', textAlign: 'center', fontSize: '35px' }}>
                            We Build <br></br>
                            Digital Solutions <br></br>
                            <p style={{
                                marginTop: '-10px',
                                wordSpacing: '10px', fontSize: '12px',
                                display: 'flex', flexDirection: 'row', justifyContent: 'center'
                            }}> <p>SOFTWARE |</p> <p>GADGETS | </p>  <p> BRANDING</p>  </p>
                            <p style={{ marginTop: '-20px', fontWeight: 'normal', lineHeight: '15px', fontSize: '12px', overflow: 'hidden', textAlign: 'center' }}>{paragraphs.sect1}</p>
                        </p>

                    </div>
                    <div style={{ height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <PrimaryButton>REQUEST QUOTE</PrimaryButton>
                    </div>

                </div>
                <div className="section-two">
                    <h1>2</h1>
                </div>
                <div className="section-three">
                    <h1>3</h1>
                </div>

            </div>
        </>
    )
}
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'yellow'

    }
}


export default Home;

