import { Button, Card, Image } from 'react-bootstrap';
import './index.css';
import wok9jaLogo from '../assets/images/wok9jaBg.svg';
import surplusNaijaLogo from '../assets/images/surplusNijaLogo.svg'
import QuoteModal from '../components/modals/quote-modal';
import sect1mage from '../assets/images/sect1img.png'
import { useState } from 'react';
import ActionCard from '../components/cards/action-card';
import TestimonyCard from '../components/cards/testimony-card';
import ItemListCard from '../components/cards/item-list-card';

const HomePage = () => {
    const [onQuote, setOnQuote] = useState(false);

    const qualities = [
        'Efficient and easy to use software solutions.',
        'Customize base on your business need. ',
        'Cost effective with no value trade off.',
        '24hr Dedicated support agents.',
        'Lifelong technical support.'
    ]

    const values = [
        'Reliability',
        'Accountability',
        'Integrity',
        'Simplicity.',
        'Innovative',
        'Result'
    ]

    const testimonies = [
        'Reliability',
        'Accountability'
    ]

    interface IApps {
        title: string,
        desc: string,
        imgUrl: string,
        url: string
    }
    const ourApps: IApps[] = [
        {
            title: 'Wok9ja',
            desc: 'A Freelance platform for industry professionals in Nigeria.',
            imgUrl: wok9jaLogo,
            url: 'https://wok9ja.vercel.app/'
        },
        {
            title: 'surplusfood',
            desc: 'A grocery vendor store for buying and selling of groceries',
            imgUrl: surplusNaijaLogo,
            url: 'https://surplusfood9ija.vercel.app/'
        },
    ]

    const brands = [
        {
            icon: 'bi bi-microsoft',
            title: 'Azure'
        },
        {
            icon: 'bi bi-google',
            title: 'Google'
        },
        {
            icon: 'bi bi-amazon',
            title: 'AWS'
        },
    ]

    const socialMedia = [
        {
            name: 'Instagram',
            color: 'danger',
            icon: 'bi bi-instagram',
            path: 'https://www.instagram.com/floathsolutionhub?igsh=MXh5emQ0M2tlZ3VvOA=='
        },
        {
            name: 'Linkdn',
            color: 'secondary',
            icon: 'bi bi-linkedin',
            path: 'https://www.linkedin.com/company/floath-solution-hub/'
        },
        {
            name: 'Youtube',
            color: 'danger',
            icon: 'bi bi-youtube',
            path: 'https://www.youtube.com/@floathub'
        }
    ]
    return (
        <div className='w-100'>
            <QuoteModal on={onQuote} off={() => setOnQuote(false)} />

            <div className={`w-100 d-flex flex-wrap gap-2 p-3 text-light jumbotron`}>
                <div className='leftSide d-flex flex-column justify-content-center align-items-start'>
                    <h1 className='poppins-extrabold heading'>
                        Innovative Solution
                        For  Every of Your
                        Business Need.
                    </h1>
                    <p className='text-light'>
                        Unlock innovative solutions tailored to
                        meet your unique business needs,
                        driving growth and success in
                        a competitive market.
                    </p>
                    <div className='w-75'>
                        <Button onClick={() => setOnQuote(true)} style={{ fontFamily: 'poppins', fontSize: '1em' }} className=' d-flex align-items-center gap-2 fw-bold bg-light text-dark p-2 px-3'>
                            <i className="bi bi-headset p-0 m-0" style={{ fontSize: '1.3em' }}></i>
                            Talk to us
                        </Button>
                    </div>
                </div>


                <div className='rightSide d-flex text-light p-3'>
                    <Image className='dwoman' src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/woman3d.png' />
                </div>

            </div>

            <div className='home-section-two d-flex flex-wrap p-3 mt-3'>
                <div className='home-section-two-left'>
                    <Image className='office-sec' src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/home-sect-2-left-img.png' />
                </div>

                <div className='home-section-two-right flex-wrap mt-5' style={{ paddingInline: '2%' }}>
                    <div className='d-flex gap-4 brands'>
                        {
                            brands.map((brand) => (
                                <div className='d-flex gap-2 align-items-center heading poppins-extrabold'>
                                    <i className={brand.icon}></i>
                                    <p className='m-0 p-0'>{brand.title}</p>
                                </div>
                            ))
                        }


                    </div>

                    <h1 className='m-0 mt-3 header poppins-extrabold'>
                        Best industry
                        resources to drive in profit for you.
                    </h1>
                    <p className='mt-3'>
                        Bringing to your reach access to a team of tech
                        experts with years of experience across
                        different I.T field.
                    </p>
                </div>
            </div>


            <div className='home-section-three flex-wrap mt-5'>
                <div className='home-section-three-right flex-wrap mt-3'>
                    {/* <div className='d-flex gap-4 brands'>
                        {
                            brands.map((brand) => (
                                <div className='d-flex gap-2 align-items-center heading poppins-extrabold'>
                                    <i className={brand.icon}></i>
                                    <p className='m-0 p-0'>{brand.title}</p>
                                </div>
                            ))
                        }


                    </div> */}

                    <h1 className='m-0 mt-3 header poppins-extrabold'>
                        Worry about  your business
                        let us handle the Tech.
                    </h1>
                    <p className='mt-3 fw-bold'>
                        You dont have to trouble yourself with the
                        tech of how your business processes are
                        automated, let us take that burden.
                    </p>

                    <ul className='mt-4 p-0'>
                        {
                            qualities.map((quality) => (
                                <div className='d-flex gap-2 align-items-center my-2'>
                                    <i className="bi bi-check text-success"></i>
                                    <p className='m-0 p-0'>{quality}</p>
                                </div>
                            ))
                        }
                    </ul>
                </div>

                <div className='home-section-three-left flex-wrap mt-3 px-3'>
                    <Image className='office-sec' src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/office-man-monitor.png' />
                    <h1 className='m-0 mt-3 header poppins-extrabold'>
                        Enjoy access to a team of
                        Experienced Tech experts.
                    </h1>
                    <p className='mt-3'>
                        We bring to your reach access to a team of tech
                        experts with years of experience across
                        different I.T field.
                    </p>
                </div>
            </div>


            <div className='home-section-four flex-wrap mt-5'>
                <div className='home-section-four-right flex-wrap'>
                    <ActionCard
                        title='Want to start a career in tech today?'
                        description='Join our training academy and get yourself on a lifelong career process'
                        buttonText='Get Started With us'
                        bgColor='secondary'
                    />
                </div>

                <div className='home-section-four-left shadow shadow-sm rounded rounded-3 bg-grey'>
                <TestimonyCard
                        title='Folake James'
                        description='I Joined float solution hub in 2023 as a newbie to tech, fast foward to a two year after, i was able to get an internship with a reputable organisation.'
                        buttonText='Get Started With us'
                        bgColor=''
                        jobName='Backend Engineer'
                    />
                </div>
            </div>



            <div className='home-section-five flex-wrap mt-5 text-center p-4'>
                <ItemListCard/>
                {/* <div >

                </div>
                <div className='home-section-three-right flex-wrap mt-3'>
                    our products session
                </div>

                <div className='home-section-three-left flex-wrap mt-3 px-3'>

                </div> */}
            </div>


            <div className='home-section-two d-flex flex-wrap p-3 mt-3'>
                <div className='home-section-two-left'>
                    <Image className='office-sec' src='https://verifiedsell.s3.eu-north-1.amazonaws.com/fshwebsiteresources/home-sect-2-left-img.png' />
                </div>

                <div className='home-section-two-right flex-wrap mt-5' style={{ paddingInline: '2%' }}>
                    

                    <h1 className='m-0 mt-3 heading poppins-extrabold'>
                    What is our mission?
                    </h1>
                    <p className='mt-3'>
                    To  create a safe  space in the Nigeria tech industry while shaping how Technology is used to drive in profit and confidence.
                    </p>

                    <h1 className='m-0 mt-3 heading poppins-extrabold'>
                    Our Core Values?
                    </h1>
                    <ul className='mt-4 p-0'>
                        {
                            values.map((quality) => (
                                <div className='d-flex gap-2 align-items-center my-2'>
                                    <i className="bi bi-check text-success"></i>
                                    <p className='m-0 p-0'>{quality}</p>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>

<div className='w-100 d-flex text-center justify-content-center'>
<hr className='w-75'/>
</div>
            


<div className='home-section-four d-flex flex-wrap p-3'>
                <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <h5 className='title mt-4 text-center w-75'>
                        Trusted by over 2000 users
                        and business owners
                    </h5>

                    <p className="w-75 text-center">
                        Testimony from our users across all
                        our platform speak for us.
                    </p>

                    <div className='home-section-four-left shadow shadow-sm rounded rounded-3 bg-grey'>
                </div>
                </div>

                <div className='d-flex'>
                <ul className='p-0 d-flex flex-wrap'>
                    {
                        testimonies.map(()=>(
                            <TestimonyCard
                        title='Folake James'
                        description='I Joined float solution hub in 2023 as a newbie to tech, fast foward to a two year after, i was able to get an internship with a reputable organisation.'
                        buttonText='Get Started With us'
                        bgColor=''
                        jobName='Backend Engineer'
                    />
                        ))
                    }
                </ul>
                </div>

                {/* <div className='w-100 d-flex justify-content-center'>
                <Card className='bg-secondary text-light mt-4 text-center w-75 shadow-sm p-3 rounded rounded-3 border border-0'>
                    <Card.Body className='d-flex flex-column align-items-center justify-content-center'>

                        video
                    </Card.Body>
                </Card>
            </div> */}
                <hr className='' />
                <div className='mt-5'>
                    <h5 className='title'>
                        Connect with us
                    </h5>
                    <p className='p-0 m-0'>hello@floatsolutionhub.com</p>
                    <div className='d-flex gap-4 mt-3'>
                        {
                            socialMedia.map((media) => (<a href={media.path} target='blank' > <i role="button" className={`text-${media.color} ${media.icon}`}></i></a>))
                        }
                    </div>
                </div>

                <div className='mt-4'>
                    <h5 className='title'>
                        Lagos
                    </h5>
                    <p className='p-0 m-0'>No 22 Providence Street
                        Lekki, <br />Lagos, Nigeria
                    </p>
                    <p className='mt-3 fw-bold'>+2348166064166</p>
                </div>
            </div>
        </div>
    )
}
export default HomePage;