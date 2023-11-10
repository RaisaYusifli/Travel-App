import { useNavigate, useParams } from "react-router-dom"
import { VideoItalyPlc } from "./sections/VideoItalyPlc";
import { AvailableTrips } from "./sections/AvailableTrips";
import { MapItaly } from "./sections/Map";
import { NewAttractions } from "./sections/NewAttractions";
import { ReviewsItaly } from "./sections/ReviewsItaly";
import { WhyUsItaly } from "./sections/WhyUsItaly";
import { LookingGoElsewhere } from "../../components/LookingGoElsewhere";

export function Country(){
    const params=useParams();//dinamik parametrleri goturmek ucun
    console.log(params)
    const navigate=useNavigate();//sehifede geri getmek, istediymiz page'e getmek

    return(
        <>
        {/* <h1>Destination-{params.country}</h1> */}
        {/* <button onClick={()=>{navigate('/destination')}}>Back</button> */}
        <VideoItalyPlc/>
        <AvailableTrips/>
        <MapItaly/>
        <NewAttractions/>
        <ReviewsItaly/>
        <WhyUsItaly/>
        <LookingGoElsewhere/>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        </>
    )
}