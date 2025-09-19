import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Whoweare";
import Whychoose from "@/components/Landingpage/Whychoose";
import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
import Footer from "@/components/Landingpage/Footer";
import Social from "@/components/Landingpage/Social";
import Stickybutton from "@/components/Landingpage/Stickybutton";
export default function Home() {
  return (
   <>
   <Social></Social>
   <Stickybutton></Stickybutton>
   <Hero />
   <About />
   <Categories />
   <Countup />
   <Cta></Cta>
   <Whoweare />
   <Whychoose />
   <Process></Process>
   <Faq></Faq>
   <TestimonialSlider></TestimonialSlider>
   <Formsection></Formsection>

   </>

  
  );
}
