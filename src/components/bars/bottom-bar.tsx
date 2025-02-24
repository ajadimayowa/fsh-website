import React from 'react'
import './bottombar.css'
import { business_links, legal_links, nav_links, resources_links } from '../../constants'
const BottomBar: React.FC<any> = ({ socials }) => {
    return (
        <>
            <div className="footer-container  gap-5 bg-secondary p-3 px-5 w-100 text-light" style={{ minHeight: '300px' }}>
                <div className='m-3'>
                    <p className='fw-bold' style={{fontSize:'1.2em'}}>Connect with us</p>
                    <p style={{fontSize:'1em'}}>hello@floatsolutionhub.com</p>
                    <div className='d-flex gap-3'>
                        {
                            socials && socials.map((social: any) => (
                                <a className='link p-2 bg-light rounded' href={social?.path} target='blank' > <i role="button" className={`text-dark ${social.icon}`}></i></a>


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

                <div className='m-3'>
                    
                <p  className='fw-bold' style={{fontSize:'1.2em'}}>Overview</p>
                
                {
                        nav_links.map((navs)=>(
                            <a style={{textDecoration:'none',color:'#fff'}} href={navs.path}>
                <p style={{fontSize:'1em'}}>{navs.title}</p>
                </a>
                        ))
                }
                
                </div>

                <div className='m-3'>
                    
                <p  className='fw-bold' style={{fontSize:'1.2em'}}>Business</p>
                
                {
                        business_links.map((navs)=>(
                            <a style={{textDecoration:'none',color:'#fff'}} href={navs.path}>
                <p style={{fontSize:'1em'}}>{navs.title}</p>
                </a>
                        ))
                }
                
                </div>

                <div className='m-3'>
                    
                <p  className='fw-bold' style={{fontSize:'1.2em'}}>Resources</p>
                
                {
                        resources_links.map((navs)=>(
                            <a style={{textDecoration:'none',color:'#fff'}} href={navs.path}>
                <p style={{fontSize:'1em'}}>{navs.title}</p>
                </a>
                        ))
                }
                
                </div>

                <div className='m-3'>
                    
                <p  className='fw-bold' style={{fontSize:'1.2em'}}>Legal</p>
                
                {
                        legal_links.map((navs)=>(
                            <a style={{textDecoration:'none',color:'#fff'}} href={navs.path}>
                <p style={{fontSize:'1em'}}>{navs.title}</p>
                </a>
                        ))
                }
                
                </div>
            </div>

            <p className="text-light bg-dark p-4 text-center w-100 fw-bold">Floath Solution Hub All Right Reserved.</p>
        </>
    )
}

export default BottomBar