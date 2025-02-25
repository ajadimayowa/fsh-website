import { wordpress_websites } from "../../constants"
import PortFolioCard from "../cards/portfolio-card"

const WebsiteTabs = ()=>{
return(
   <div className="w-100">
    <div className="d-flex flex-wrap  justify-content-center align-items-center">
        {
            wordpress_websites.map((websites)=>(
                <div className="m-2">
                    <PortFolioCard
                    imgUrl={websites.imageUrl} url={websites.url} title={websites.title} description={websites.description} bgColor={'light'}
                    />
                </div>
            ))
        }

    </div>

   </div>
)
}
export default WebsiteTabs