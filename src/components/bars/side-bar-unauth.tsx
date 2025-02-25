import style from './sidebar.module.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { nav_links } from '../../constants';

const SideBarUnauth: React.FC<any> = ({ on, off }) => {
    const navigate = useNavigate();

    const handleGotoTech = (path:string)=>{
        off()
        navigate(path)
    }

    return (
        <div className={on ? `poppins-semibold ${style.active}` : style.inactive}>


            <div className='w-100 text-end p-4 ' role='button'>
                <i className="bi bi-x-circle text-light" role='button' onClick={off}></i>
            </div>
            <ul className='text-light p-0 m-0 d-flex flex-column gap-4' style={{ listStyle: 'none', textDecoration:'none' }}>
                {
                    nav_links.map((nav, index) => (
                        <li 
                        // onClick={()=>handleGotoNav('/')}
                        key={index} className='w-100 p-2 text-center' role='button' style={{ listStyle: 'none', textDecoration:'none' }}>
                            <a className='text-light' href={nav.path}>{nav.title}</a>
                            </li>
                    ))
                }
            </ul>
            <div className='d-flex w-100 justify-content-center mt-4'>
                <Button onClick={()=>handleGotoTech('/tech-career')} className='p-3 fw-bold'>Get started in tech</Button>
            </div>

<div className='d-flex w-100 align-items-center gap-2 text-light justify-content-center mt-5' role='button'>
<i className="bi bi-headset" style={{ fontSize: '1.5em' }} ></i>
Contact support
</div>
        </div>
    )
}

export default SideBarUnauth