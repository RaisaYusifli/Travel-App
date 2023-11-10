import { LocalExperts } from "./sections/LocalExperts";
import { AboutPlc } from "./sections/AboutPlc";
import { AboutUs } from "./sections/AboutUs";
import { WhyUs } from "./sections/WhyUs";

export function About() {
  return (
    <>
      <AboutPlc />
      <AboutUs />
      <WhyUs/>
      <LocalExperts/>
    </>
  );
}
