import Image from "next/image";
import { Button, Carousel } from 'flowbite-react';
import Picture from "./components/Picture";
import Popup from "./components/Popup";


export default function Home() {
  return (
      <div className="h-screen w-screen relative">
      <Carousel>

        <Picture pic='https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Picture pic='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <Picture pic='https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      </Carousel>
      
    </div>
  );
}
