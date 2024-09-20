import { Button, Card } from 'react-bootstrap';

import frontEndImg from '../assets/images/frontendImage.png';
import prodImg from '../assets/images/prodWomanImage.png';
import fullImg from '../assets/images/frontendImage.png';
import wordPress from '../assets/images/managemnetPhoto.png';
import curriculum from '../assets/pdfs/Software Development Curriculum - fsh.pdf'

const TechInfoPage = () => {


    interface ICourse {
        courseTitle: string,
        courseId: string,
        courseDesc: string,
        courseImage: string
    }


    const courses = [
        {
            courseTitle: 'Full-Stack Development',
            courseId: '002',
            courseDesc: 'Immerse yourself in the world of web development, learn to create robust web applications, and build a portfolio that will attract recruiters.',
            courseImage: fullImg
        },
        {
            courseTitle: 'Product Designer (UI/UX)',
            courseId: '001',
            courseDesc: 'For beginners to learn the fundamentals of design; focus is majorly on UI (User Interface) design.',
            courseImage: prodImg
        },

        {
            courseTitle: 'Front-End Development',
            courseId: '003',
            courseDesc: 'A beginner-friendly training, tailored to help you build your first web application with hands-on learning and expert guidance.',
            courseImage: frontEndImg
        },
        {
            courseTitle: 'Product Management',
            courseId: '004',
            courseDesc: 'Learn the rudiment of product management and what it takes to manage a product from start to finish.',
            courseImage: wordPress
        },

        {
            courseTitle: 'Wordpress Development',
            courseId: '004',
            courseDesc: 'Learn how to build business websites and landing pages with wordpress.',
            courseImage: frontEndImg
        },


    ]

    const courseSchedule = {
        Duration: '24 weeks',
        Approach: ' 10 hours/week',
        DeliveryMode: 'Online',
        Options: 'Weekend classes available'
    }

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
        <div className='w-100 p-4'>
            {/* <QuoteModal on={onQuote} off={() => setOnQuote(false)} /> */}
            <h4 className='headers'>
                Software Development
                Course- Full Stack
            </h4>
            <p className='fw-bold text-info' style={{ fontSize: '1.2em' }}>N150,000</p>
            <p className="">
                In 16 weeks, immerse yourself in the world of web development, learn to create robust front-end web applications, and build a portfolio that will attract recruiters.
            </p>
           
            <div className='d-flex flex-column gap-3'>
            <a href='https://paystack.com/buy/floath-hub-software-developer-track-wjpqld' target='blank' style={{textDecoration:'none'}}>
                <Button className='fw-bold bg-success py-3 text-center text-light w-100' style={{ fontFamily: 'poppins', minWidth: '13em' }}>

                    Register
                </Button>
            </a>
                <a href='https://api.whatsapp.com/message/YLK4QJBSIGZ5M1' target='blank' style={{textDecoration:'none'}}>
                <Button variant='light w-100 border py-3 fw-bold' style={{ fontFamily: 'poppins', minWidth: '13em' }}>

                    Talk to an advisor
                </Button>
                </a>
            </div>

            <div className='d-flex justify-content-center mt-4  text-start flex-column w-100 lato-regular' style={{}}>
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
            <div className='mt-5'>
                <Card
                    // style={{ backgroundColor: 'rgba(233,248,255,0.5)' }}
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
                <a href={curriculum} target='blank' style={{textDecoration:'none'}}>
                <Button className='fw-bold mt-5 bg-info py-3 text-center text-light w-100' style={{ fontFamily: 'poppins', minWidth: '13em' }}>

                    Download Curriculum
                </Button>
                </a>
            </div>
        </div>
    )
}
export default TechInfoPage;