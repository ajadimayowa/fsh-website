import BottomBar from '../components/bars/bottom-bar';
import TopBar from '../components/bars/topbar';
import './services-page.css';
import { services } from '../constants';
import ServiceCard from '../components/cards/service-card';

const AboutUsPage = () => {

    return (
        <>
            <TopBar />
            <div className='services-container'>
                <div className='services-hero-section text-light justify-content-center align-items-center w-100 text-center  p-3'>
                    <h5 className='title'>
                        About Us
                    </h5>

                    <p className='text-center'>
                    Who we are and what our Journey has been.
                    </p>
                </div>

<div className='d-flex p-4  justify-content-center align-items-center m-3'>
    {/* <Image className='' src={serviceWoman}/> */}
    <div className='d-flex rounded service-img w-100'>
        {
            ` `
        }
    </div>
</div>

<div className='d-flex flex-wrap p-4 justify-content-center' style={{marginTop:'-100px'}}>
    {
        services.map((service)=>(
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
export default AboutUsPage;