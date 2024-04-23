import HelpingHand from "../ui/HelpingHand";
import Special from "../ui/Special";
import Relaxing from "../ui/Relaxing";
import Parking from "../ui/Parking";
import HeroRe from "../ui/HeroRe";
import home from "../../public/images/Concierge/7M3A7491-900x500.jpg";

export default function Page() {
  return (
    <>
      <HeroRe title="The Hugo" subTitle="Concierge" imageSrc={home} />
      <HelpingHand />
      <Special />
      <Relaxing />
      <Parking />
    </>
  );
}
