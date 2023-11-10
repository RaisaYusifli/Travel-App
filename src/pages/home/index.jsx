import { LookingGoElsewhere } from "../../components/LookingGoElsewhere";
import { Asia } from "./sections/Asia";
import { BrandNewTrips } from "./sections/BrandNewTrips";
import { Europe } from "./sections/Europe";
import { LocalExperts } from "./sections/LocalExperts";
import { ReviewSection } from "./sections/ReviewSection";
import { TrendingNow } from "./sections/TrendingNow";
import { VideoPlaceholder } from "./sections/VideoPlaceholder";
import { WhyUs } from "./sections/WhyUs";

export function Home(){
    return (
        <>
        <VideoPlaceholder/>
        <TrendingNow/>
        <BrandNewTrips/>
        <WhyUs/>
        <LocalExperts/>
        <ReviewSection/>
        <Europe/>
        <Asia/>
        <LookingGoElsewhere/>
        </>
    )
}