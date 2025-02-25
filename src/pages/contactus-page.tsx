import { useState } from 'react';
import BottomBar from '../components/bars/bottom-bar';
import TopBar from '../components/bars/topbar';
import './contactus-page.css';
import QuoteModal from '../components/modals/quote-modal';
import SideBarUnauth from '../components/bars/side-bar-unauth';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import {object, string } from 'yup';
import { Button } from 'react-bootstrap';

// import { services } from '../constants';
// import ServiceCard from '../components/cards/service-card';

const location = [
    {
        icon: 'bi bi-flag',
        description: 'No 28, Plot 2B Providence Street,Lekki, Lagos.'
    },
    {
        icon: 'bi bi-telephone-fill',
        description: '+2348166064166'
    },
    {
        icon: 'bi bi-envelope-fill',
        description: 'hello@floatsolutionhub.com'
    },
]

const ContactUsPage = () => {

    const [onQuote, setOnQuote] = useState(false);
    const [toggleSideNav, setToggleSideNav] = useState(false);

    const initialValues = {
        fullName: '',
        email: '',
        // phoneNumber: '',
        quoteDetail: ''
    }

    const validationSchema = object({
        fullName: string().required().label('Fullname'),
        email: string().email().required().label('Email'),
        // phoneNumber: number().required().label('Phone number'),
        quoteDetail: string().required().label('Your request')
    })

    const handleQuerySubmit =(body:any)=>{
        console.log(body)
        alert('Thank you for reaching out.');
        window.location.reload()

    }

    return (
        <>
            <TopBar toggleSideNav={() => setToggleSideNav(!toggleSideNav)} />
            <QuoteModal on={onQuote} off={() => setOnQuote(false)} />
            <SideBarUnauth on={toggleSideNav} off={() => setToggleSideNav(!toggleSideNav)} />
            <div className='contactus-container w-100'>
                <div className='contactus-hero-section text-light justify-content-center align-items-center w-100 text-center  p-3'>
                    <h5 className='title'>
                        Contact us.
                    </h5>

                    <p className='text-center'>
                        Talk to us, our support channels are available 24hrs
                    </p>
                </div>

                <h3 className='title text-center m-3'>
                    Get in touch
                </h3>

                <div className='d-flex flex-wrap justify-content-center align-items-center m-3 mt-5 mb-5'>
                    <div className='p-4 bg-secondary text-light' style={{ minHeight: '500px', minWidth: '350px', maxWidth: '350px', }}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(val) => handleQuerySubmit(val)}
                            validationSchema={validationSchema}
                        >{
                                ({ handleSubmit }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <h3 className='title'>
                                            Write to us
                                        </h3>
                                        <div className="w-100">
                                            <div className="d-flex flex-column m-2">
                                                <label htmlFor="fullName">Name</label>
                                                <Field id='fullName' name='fullName' className='p-2 rounded border border-2 ' style={{ outline: 'none' }} />
                                                <ErrorMessage
                                                    name="fullName"
                                                    component="div"
                                                    className="text-danger fw-medium" />
                                            </div>

                                            <div className="d-flex flex-column m-2">
                                                <label htmlFor="email">Email</label>
                                                <Field id='email' name='email' className='p-2 rounded border border-2 ' style={{ outline: 'none' }} />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="text-danger fw-medium" />
                                            </div>

                                            <div className="d-flex flex-column m-2 mt-4">
                                                <label htmlFor="quoteDetail">Message</label>
                                                <Field as="textarea" id='quoteDetail' name='quoteDetail' className='p-2 rounded border border-2 ' style={{ outline: 'none' }} />
                                                <ErrorMessage
                                                    name="quoteDetail"
                                                    component="div"
                                                    className="text-danger fw-medium" />
                                            </div>

                                        </div>

                                        <div className="mt-4 mx-2">
                                            <Button type="submit" className="px-4 text-light">Submit</Button>
                                        </div>


                                    </Form>
                                )
                            }

                        </Formik>


                    </div>


                    <div className='p-3' style={{ minHeight: '500px', minWidth: '350px', maxWidth: '350px', backgroundColor: '#F4F4F4' }}>
                        <h3 className='title' style={{ color: '#8A8A8A' }}>
                            Locate us
                        </h3>
                        <p>
                            You dont have to trouble yourself with the
                            tech of how your business processes are
                            automated, let us take that burden.
                        </p>
                        <ul className='mt-5'>
                            {
                                location.map((location) => (
                                    <li className='d-flex gap-3'>
                                        <i className={location.icon}></i>
                                        <p>{location.description}</p>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <BottomBar />
        </>

    )
}
export default ContactUsPage;