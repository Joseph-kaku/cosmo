import Image from "next/image";
import Header from "./components/Header";
import Gallery from "./gallery/page";

export default function Home() {
  return (
    <main>
<div>
  <Header />
  
  <h1 className="flex justify-center text-4xl mb-10"> COSMO PAGE </h1>
  <Gallery /> 
</div>

    </main>
  );
}
