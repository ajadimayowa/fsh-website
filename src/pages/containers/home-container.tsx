import { Outlet } from "react-router-dom";
import TopBar from "../../components/bars/topbar";
// import BottomBar from "../../components/bars/bottom-bar";
import SideBarUnauth from "../../components/bars/side-bar-unauth";
import { useState } from "react";
const HomeContainer =()=>{
    const [toggleSideNav,setToggleSideNav] = useState(false)

    // const socialMedia = [
    //     {
    //         name: 'Instagram',
    //         color: 'light',
    //         icon: 'bi bi-instagram',
    //         path: 'https://www.instagram.com/floathsolutionhub?igsh=MXh5emQ0M2tlZ3VvOA=='
    //     },
    //     {
    //         name: 'Linkdn',
    //         color: 'light',
    //         icon: 'bi bi-linkedin',
    //         path: 'https://www.linkedin.com/company/floath-solution-hub/'
    //     },
    //     {
    //         name: 'Youtube',
    //         color: 'danger',
    //         icon: 'bi bi-youtube',
    //         path: 'https://www.youtube.com/@floathub'
    //     }
    // ]
    return(
        <div className="w-100 min-vh-100">
            <TopBar toggleSideNav={()=>setToggleSideNav(!toggleSideNav)}/>
            
            <div>{<Outlet/>}</div>
            <SideBarUnauth on={toggleSideNav} off={()=>setToggleSideNav(!toggleSideNav)}/>
          

        </div>
    )

}
export default HomeContainer