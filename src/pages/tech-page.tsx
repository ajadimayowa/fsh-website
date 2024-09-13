import { Card } from 'react-bootstrap';

import frontEndImg from '../assets/images/frontendImage.png';
import prodImg from '../assets/images/prodWomanImage.png';
import fullImg from '../assets/images/frontendImage.png';
import wordPress from '../assets/images/managemnetPhoto.png';

const TechPage = () => {
 

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
    return (
        <div className='w-100 p-4'>
            {/* <QuoteModal on={onQuote} off={() => setOnQuote(false)} /> */}
            <h4 className='headers'>
                Learn a digital skill today
                take your career to
                the next Level.
            </h4>

            <p className="">
                We've got Beginner-friendly courses that will teach you the jobs of today and tomorrow,
                provided by experienced and trusted instructors.
            </p>

            <div className='d-flex gap-3 flex-wrap'>
                {
                    courses.map((app: ICourse, index: number) => (
                        <Card 
                        style={{backgroundColor:'rgba(233,248,255,0.5)'}}
                        key={index} className='w-100 shadow-sm rounded rounded-3 border border-0'>
                            <Card.Body className='d-flex flex-column align-items-start flex-start gap-3'>
                                <img className='w-100 rounded' src={app.courseImage} height={150} />
                                <h5 className='title'>{app.courseTitle}</h5>
                                <p>{app.courseDesc}</p>
                                <div className='d-flex gap-2'>
                                    <a className='text-dark' role='button' style={{ textDecoration: 'none' }}>Register</a>
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
            <p className='w-100 fw-bold text-secondary mt-4 text-center' role='button'>Explore more</p>
        </div>
    )
}
export default TechPage;