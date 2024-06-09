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
    <div className=''>

      <div className="-z-10 fixed top-0">
        <div className="bg-[linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 1))] w-screen max-w-screen h-[350px] md:h-[1000px] relative">
          <Image 
            src={ShadyBanner5}
            alt={'shady_banner'}
            fill
            style={{
              filter: 'contrast(115%)',
              opacity: 0.6,
              backgroundColor: "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))"
              
            }}
          />
        </div>
        
        
      </div>
      {/* <div className="relative z-40 top-0">
        </div> */}


      <div className="z-10 flex flex-col relative">
        <Hero />
        <div className="p-0 z-10 bg-[#0D0C11] relative">
        

          <About />

          <Separator className="w-4/5 mx-auto"/>

          <WhatsOn />

          <Images />

          <ReserveTable />
        </div>

      </div>

    </div>
  );
}
