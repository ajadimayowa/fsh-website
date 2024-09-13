import { Outlet } from "react-router-dom";
import TopBar from "../../components/bars/topbar";
import BottomBar from "../../components/bars/bottom-bar";
import SideBarUnauth from "../../components/bars/side-bar-unauth";
import { useState } from "react";
const HomeContainer =()=>{
    const [toggleSideNav,setToggleSideNav] = useState(false)
    return(
        <div className="w-100">
            <TopBar toggleSideNav={()=>setToggleSideNav(!toggleSideNav)}/>
            
            <div>{<Outlet/>}</div>
            <BottomBar/>
            <SideBarUnauth on={toggleSideNav} off={()=>setToggleSideNav(!toggleSideNav)}/>
          

        </div>
    )

}
export default HomeContainer