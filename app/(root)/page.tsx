import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatsOn from "@/components/WhatsOn";
import ShadyBanner from '../../public/ShadyBanner.png'
import ShadyBanner2 from '../../public/ShadyBanner2.png'
import ShadyBanner3 from '../../public/ShadyBanner3.png'
import ShadyBanner4 from '../../public/ShadyBanner4.png'
import ShadyBanner5 from '../../public/ShadyBanner5.png'

import Images from "@/components/Images";
import Footer from "@/components/Footer";
import ReserveTable from "@/components/ReserveTable";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className='top-0'>
        <Hero />
        <div className="">        
          <About />
          <Separator className="w-4/5 mx-auto"/>
          <WhatsOn />
          <Images />
          <ReserveTable />
        </div>
    </div>
  );
}
