import Image from "next/image";
import HeroRe from "./ui/HeroRe";

import Experience from "./ui/Experience";
import Slider from "./ui/sider/Slider";
import Facilities from "./ui/facilities/Facilities";
import home from "../public/images/home.jpg";

export default function Home() {
  return (
    <main>
      <HeroRe
        title="Modern luxury hotel concept in the heart of Canterbury."
        subTitle=""
        imageSrc={home}
      />
      <Experience />
      <Slider />
      <Facilities />
    </main>
  );
}
