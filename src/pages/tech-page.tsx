import frontEndImg from '../assets/images/frontendImage.png';
import frontEndIm from '../assets/images/frontendIm.png';
import prodImg from '../assets/images/prodWomanImage.png';
import fullImg from '../assets/images/frontendImage.png';
import wordPress from '../assets/images/managemnetPhoto.png';
import BottomBar from '../components/bars/bottom-bar';
import TopBar from '../components/bars/topbar';
import CourseCard from '../components/cards/course-card';
import './tech-page.css'
import { useState } from 'react';
import QuoteModal from '../components/modals/quote-modal';
import SideBarUnauth from '../components/bars/side-bar-unauth';

const TechPage = () => {
    const [onQuote, setOnQuote] = useState(false);
        const [toggleSideNav, setToggleSideNav] = useState(false)


    interface ICourse {
        courseTitle: string,
        courseId: string,
        description: string,
        courseImage: string
    }


    const courses = [
        {
            courseTitle: 'Full-Stack Development',
            courseId: '002',
            description: 'Immerse yourself in the world of web development, learn to create robust web applications, and build a portfolio that will attract recruiters.',
            courseImage: fullImg
        },
        {
            courseTitle: 'Product Designer (UI/UX)',
            courseId: '001',
            description: 'For beginners to learn the fundamentals of design; focus is majorly on UI (User Interface) design.',
            courseImage: prodImg
        },
        {
            courseTitle: 'Product Management',
            courseId: '004',
            description: 'Learn the rudiment of product management and what it takes to manage a product from start to finish.',
            courseImage: frontEndIm
        },

        {
            courseTitle: 'Front-End Development',
            courseId: '003',
            description: 'A beginner-friendly training, tailored to help you build your first web application with hands-on learning and expert guidance.',
            courseImage: frontEndImg
        },

        {
            courseTitle: 'Wordpress Development',
            courseId: '004',
            description: 'Learn how to build business websites and landing pages with wordpress.',
            courseImage: wordPress
        },


    ]
    return (
        <>
             <TopBar toggleSideNav={()=>setToggleSideNav(!toggleSideNav)}/>
        <QuoteModal on={onQuote} off={() => setOnQuote(false)} />
        <SideBarUnauth on={toggleSideNav} off={()=>setToggleSideNav(!toggleSideNav)}/>
            <div className='w-100'>
            <div className='services-hero-section text-light justify-content-center align-items-center w-100 text-center  p-3'>
            <h4 className='headers'>
                    Learn a digital skill today
                    take your career <br/> to
                    the next Level.
                </h4>

                <p className="">
                    We've got Beginner-friendly courses that will teach you the jobs of today<br/> and tomorrow,
                    provided by experienced and trusted instructors.
                </p>
                </div>


                {/* <div className='tech-page-sec-1'>
                    <div id='left'>
                    

                
                    </div>
                    <div>2</div>

                </div> */}
                {/* <QuoteModal on={onQuote} off={() => setOnQuote(false)} /> */}
                

                <div className='d-flex gap-3 justify-content-center flex-wrap'>
                    {
                        courses.map((app: ICourse, index: number) => (
                            <div key={index} style={{maxWidth:'300px'}}>
                                <CourseCard
                                    course={app}

                                />
                            </div>

                        ))
                    }
                </div>
                <p className='w-100 fw-bold text-secondary mt-4 text-center' role='button'>Explore more</p>
            </div>
            <BottomBar />
        </>

    )
}
export default TechPage;