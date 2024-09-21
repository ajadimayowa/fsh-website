import { Button, Card } from 'react-bootstrap';
import './index.css';
import wok9jaLogo from '../assets/images/wok9jaBg.svg';
import surplusNaijaLogo from '../assets/images/surplusNijaLogo.svg'
import QuoteModal from '../components/modals/quote-modal';
import sect1mage from '../assets/images/sect1img.png'
import { useState } from 'react';

const HomePage = () => {
    const [onQuote, setOnQuote] = useState(false);

    const qualities = [
        'Efficient and easy to use software solutions.',
        'Customize base on your business need. ',
        'Cost effective with no value trade off.',
        '24hr Dedicated support agents.',
        'Lifelong technical support.'
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

            <div className={`w-100 d-flex flex-wrap p-3 gap-4 text-light jumbotron`}>
                <div className='leftSide d-flex flex-column justify-content-center'>
                    <h4 className='heading'>
                        Innovative Solution
                        For  Every of Your
                        Business Need.
                    </h4>
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


                <div className='rightSide text-light justify-content-center align-items-center p-3'>
                    <div className='d-flex flex-column align-items-center text-center'>
                        <Card className='w-100' style={{ height: '200px' }}>

                        </Card>
                        <p className='text-light text-center w-75' style={{ fontFamily: 'poppins' }}>
                            Watch our MD Talk About
                            the beauty of our innovations
                            and how we are changing the industry</p>
                    </div>
                </div>

            </div>

            <div className='section2 px-3 d-flex flex-wrap w-100 mt-3 align-items-center justify-content-center'>

                <div className='left'>
                    <h5 className='title m-0 mt-4'>
                        We use the best available industry standard
                        resources to drive in profit.
                    </h5>
                    <p className="m-0 mt-2">
                        bringing to your reach access to a team of tech
                        experts with years of experience across
                        different I.T field.
                    </p>
                    <div className='d-flex gap-4 mt-4 brands'>
                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-microsoft"></i>
                            Azure
                        </div>

                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-google"></i>
                            Google
                        </div>

                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-meta"></i>
                            Meta
                        </div>

                        <div className='d-flex gap-2 align-items-center'>
                            <i className="bi bi-amazon"></i>
                            Aws
                        </div>


                    </div>


                </div>
                <div className='right d-flex align-items-center mt-4 justify-content-center'>
                    <img src={sect1mage} height={424} />
                </div>

            </div>
            <div className='px-3'>








                <div className={`my-4 mt-4 .card`}>

                </div>

                <h5 className='title mt-4 w-75'>
                    Worry about  your business
                    let us handle the Tech.
                </h5>

                <p className="">
                    You dont have to trouble yourself with the
                    tech of how your business processes are
                    automated, let us take that burden.
                </p>

                <div className='px-2'>
                    {
                        qualities.map((qual: string, index: number) => (
                            <div key={index} className='d-flex gap-2'>
                                <i className="bi bi-check text-success"></i>
                                <p>{qual}</p>
                            </div>))
                    }
                </div>

                <h5 className='title mt-4 w-75'>
                    Enjoy access to a team of
                    Experienced Tech experts
                </h5>

                <p className="">
                    We bring to your reach access to a team of tech
                    experts with years of experience across
                    different I.T field.
                </p>

                <div className={`my-4 card2`}>

                </div>

                <div className='d-flex flex-column align-items-center justify-content-center w-100'>
                    <h5 className='title mt-4 text-center w-75'>
                        Trusted by over 2000 users
                        and business owners
                    </h5>

                    <p className="w-75 text-center">
                        Testimony from our users across all
                        our platform speak for us.
                    </p>
                </div>
                <div className='w-100 d-flex justify-content-center'>

                    <div className='w-100 px-3 d-flex flex-column gap-3 align-items-center justify-content-center py-4 rounded rounded-5' style={{ backgroundColor: 'rgba(42,183,200,0.09)' }}>
                        {
                            ourApps.map((app: IApps, index: number) => (
                                <Card key={index} className='bg-light w-100 shadow-sm p-3 rounded rounded-3 border border-0'>
                                    <Card.Body className='d-flex flex-column align-items-start flex-start gap-3'>
                                        <img src={app.imgUrl} height={70} />
                                        <h5 className='title'>{app.title}</h5>
                                        <p>{app.desc}</p>
                                        <div className='d-flex gap-2'>
                                            <a className='text-dark' href={app.url} target="_blank" style={{ textDecoration: 'none' }}>Try it out</a>
                                            <i className="bi bi-arrow-right"></i>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                    </div>

                </div>


                <div className='w-100 d-flex justify-content-center'>
                    <Card className='bg-primary text-light mt-4 text-center shadow-sm p-3 rounded rounded-3 border border-0'>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center'>

                            <h5 className='title'>
                                Want to start a career
                                in tech today?
                            </h5>
                            <p className='text-light'>Join our training academy and
                                get yourself on track
                            </p>

                            <Button className='fw-bold bg-light d-flex gap-2 text-secondary' style={{ fontFamily: 'poppins' }}>
                                {/* <i className="bi bi-headset"></i> */}
                                <a href='tech-career' style={{ textDecoration: 'none' }}>Get Started</a>
                            </Button>
                        </Card.Body>
                    </Card>
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