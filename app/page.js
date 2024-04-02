import Image from "next/image";

import Hero from "./ui/Hero";
import Experience from "./ui/Experience";
import Slider from "./ui/sider/Slider";
import Facilities from "./ui/facilities/Facilities";
import Contact from "./ui/Contact";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Slider />
      <Facilities />
      <Contact />
      <Footer />
    </main>
  );
}
