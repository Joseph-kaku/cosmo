import Image from "next/image";
import { Button, Carousel } from 'flowbite-react';
import Picture from "./components/Picture";
import Popup from "./components/Popup";


export default function Home() {
  return (
      <div className="h-screen w-screen relative ">
      <Carousel>

        <Picture pic='https://flowbite.com/docs/images/carousel/carousel-1.svg'/>
        <Picture pic='https://flowbite.com/docs/images/carousel/carousel-2.svg'/>
        <Picture pic='https://flowbite.com/docs/images/carousel/carousel-3.svg'/>
        {/* <Button></Button> */}
      </Carousel>
      
    </div>
  );
}
