import Image from "next/image";
import { Carousel } from 'flowbite-react';



export default function Home() {

  return (
      <div className="h-screen w-screen relative ">
      <Carousel>
        <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}
