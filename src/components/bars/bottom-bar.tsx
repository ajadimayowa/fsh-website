import React from 'react'
import './bottombar.css'
const BottomBar: React.FC<any> = ({ socials }) => {
    return (
        <>
            <div className="footer-container gap-5 bg-secondary px-5 py-4 w-100 text-light" style={{ minHeight: '300px' }}>
                <div>
                    <p className='fw-bold' style={{fontSize:'1.2em'}}>Connect with us</p>
                    <p style={{fontSize:'1em'}}>hello@floatsolutionhub.com</p>
                    <div className='d-flex gap-3'>
                        {
                            socials && socials.map((social: any) => (
                                <a className='p-2 bg-light rounded' href={social?.path} target='blank' > <i role="button" className={`text-dark ${social.icon}`}></i></a>


                            ))
                        }
                    </div>

                    <p style={{fontSize:'1em'}} className='mt-5 fw-bold'>
                        Lagos
                    </p>

                    <p style={{fontSize:'1em'}} className='m-0'>
                        No 28 Providence Street
                        Lekki, Lagos.
                    </p>

                    <p style={{fontSize:'1em'}} className='m-0 fw-bold'>
                        +2348166064166
                    </p>
                </div>

                <div>
                <p  className='fw-bold' style={{fontSize:'1.2em'}}>Overview</p>
                
                <a style={{textDecoration:'none',color:'#fff'}} href='/'>
                <p style={{fontSize:'1em'}}>Home</p>
                </a>

                <a style={{textDecoration:'none',color:'#fff'}} href='/'>
                <p style={{fontSize:'1em'}}>Portfolio</p>
                </a>

                <a style={{textDecoration:'none',color:'#fff'}} href='/'>
                <p style={{fontSize:'1em'}}>About us</p>
                </a>

                <a style={{textDecoration:'none',color:'#fff'}} href='/'>
                <p style={{fontSize:'1em'}}>Contact Us</p>
                </a>

                <a style={{textDecoration:'none',color:'#fff'}} href='/'>
                <p style={{fontSize:'1em'}}>Services</p>
                </a>

                
                </div>

                {/* <div>
                    a
                </div>

                <div>
                    a
                </div>

                <div>
                    a
                </div> */}
            </div>

            <p className="text-light bg-dark p-4 text-center w-100 fw-bold">Floath Solution Hub All Right Reserved.</p>
        </>
    )
}

export default BottomBar