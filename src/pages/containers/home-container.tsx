import { Outlet } from "react-router-dom";
import TopBar from "../../components/bars/topbar";
import BottomBar from "../../components/bars/bottom-bar";
const HomeContainer =()=>{
    return(
        <div>
            <TopBar/>
            <div>{<Outlet/>}</div>
           <BottomBar/>

        </div>
    )

}
export default HomeContainer