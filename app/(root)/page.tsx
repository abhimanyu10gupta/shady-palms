import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatsOn from "@/components/WhatsOn";
import ShadyBanner from '../../public/ShadyBanner.png'
import ShadyBanner2 from '../../public/ShadyBanner2.png'
import ShadyBanner3 from '../../public/ShadyBanner3.png'
import ShadyBanner4 from '../../public/ShadyBanner4.png'
import Images from "@/components/Images";
import Footer from "@/components/Footer";
import ReserveTable from "@/components/ReserveTable";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className=''>

      <div className="-z-10 fixed top-0">
        <div className="bg-[linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 1))] w-screen max-w-screen h-[962px] relative">
          <Image 
            src={ShadyBanner3}
            alt={'shady_banner'}
            layout="fill" objectFit="cover"
            style={{
              filter: 'contrast(115%)',
              opacity: 0.6,
              backgroundColor: "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0))"
              
            }}
          />
        </div>

        
      </div>
      <div className="relative top-0">
          <Hero />
        </div>


      <div className="z-10 flex flex-col bg-[#0D0C11]">
        <div className="p-0">

        <About />
        <Separator />

        <WhatsOn />
        <Images />
        <ReserveTable />
        </div>

      </div>

    </div>
  );
}
