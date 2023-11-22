// import { Link, useSearchParams } from "react-router-dom";
import { Destinations } from "./sections/Destinations";
import { ReviewsDest } from "./sections/ReviewsDest";
import { TopDestinations } from "./sections/TopDestinations";
import { VideoDestinationPlaceholder } from "./sections/VideoDestinationPlaceholder";
// import { Link } from "react-router-dom";

export function Destination(){
    // const [queryParams,setQueryParams]=useSearchParams();
    // console.log(queryParams.get('sort'));

    return(
        <>
        {/* <ul>
            <li><Link to='Azerbaijan'>Azerbaijan</Link></li>
            <li><Link to='Italy'>Italy</Link></li>
            <li><Link to='Turkey'>Turkey</Link></li>
        </ul> */}
        <VideoDestinationPlaceholder/>
        <Destinations/>
        <TopDestinations/>
        <ReviewsDest/>
        </>
    )
}