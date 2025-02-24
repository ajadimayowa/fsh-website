import { Button, Card } from 'react-bootstrap';
import curriculum from '../assets/pdfs/Software Development Curriculum - fsh.pdf';
import './tech-info-page.css'
import TopBar from '../components/bars/topbar';
import BottomBar from '../components/bars/bottom-bar';

const TechInfoPage = () => {

    const programSchedule = [
        {
            icon: 'bi bi-calendar',
            title: 'Duration :',
            value: '24 weeks'
        },
        {
            icon: 'bi bi-alarm',
            title: 'Approach :',
            value: '10 hours/week'
        },
        {
            icon: 'bi bi-journal-bookmark',
            title: 'Delivery Mode :',
            value: 'Online'
        },
        {
            icon: 'bi bi-arrow-clockwise',
            title: 'Options :',
            value: 'Weekend classes available'
        }

    ]


    return (
        <>
        <TopBar/>
        <div className='w-100'>
            <div className='tech-info-page-sec-1 flex-wrap gap-4 w-100 p-4'>
                <div className='' id='left'>
                    <h4 className='headers'>
                        Software Development
                        Course- Full Stack
                    </h4>
                    <p className='fw-bold text-info' style={{ fontSize: '1.2em' }}>N150,000</p>
                    <p className="">
                        In 16 weeks, immerse yourself in the world of web development, learn to create robust front-end web applications, and build a portfolio that will attract recruiters.
                    </p>

                    <div className='d-flex flex-column gap-3'>
                        <a href='https://paystack.com/buy/floath-hub-software-developer-track-wjpqld' target='blank' style={{ textDecoration: 'none' }}>
                            <Button className='fw-bold bg-success py-3 text-center text-light w-100' style={{ fontFamily: 'poppins', minWidth: '13em' }}>

                                Register
                            </Button>
                        </a>
                        <a href='https://api.whatsapp.com/message/YLK4QJBSIGZ5M1' target='blank' style={{ textDecoration: 'none' }}>
                            <Button variant='light w-100 border py-3 fw-bold' style={{ fontFamily: 'poppins', minWidth: '13em' }}>

                                Talk to an advisor
                            </Button>
                        </a>
                    </div>
                    <div className='d-flex justify-content-center mt-4  text-start flex-column w-100 lato-regular'>
                            {
                                programSchedule.map((prog) => (
                                    <div className='d-flex gap-2'>

                                        <i className={prog.icon}></i>
                                        <p>{prog.title}</p>
                                        <p>{prog.value}</p>

                                    </div>
                                ))
                            }
                        </div>
                </div>
               
                <div className='' id='right'>
                        
                        <Card
                            
                            className='w-100 shadow-sm rounded rounded-3 border border-0 bg-secondary text-light'>
                            <Card.Body className='d-flex flex-column align-items-start flex-start gap-3 p-4 rounded rounded-3'>
                                <h3 className='title'>
                                    Master the Tools of the Web,
                                    Become a Front-end
                                    Developer.
                                </h3>

                                <p className="text-light">
                                    You will be learning the following tools of
                                    web application at a professional level.
                                </p>

                                <h5>
                                    Html | Css | JavaScript | React |
                                    Typescript | Bootstrap
                                </h5>

                            </Card.Body>
                        </Card>
                        <a href={curriculum} target='blank' style={{ textDecoration: 'none' }}>
                            <Button className='fw-bold mt-5 bg-info py-3 text-center text-light w-100' style={{ fontFamily: 'poppins', minWidth: '13em' }}>

                                Download Curriculum
                            </Button>
                        </a>
                    </div>
               
            </div>
            {/* <QuoteModal on={onQuote} off={() => setOnQuote(false)} /> */}


        </div>
        <BottomBar/>
        </>
        
    )
}
export default TechInfoPage;