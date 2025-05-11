import Image from "next/image";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
 
      <div className="  ">
        <div className="grid-cols-1 w-full mx-auto">
          <div className="text-neutral-100 text-center   ">
            <h1 className="font-bold md:text-[2.5rem]  text-2xl">Üdv a honlapon!</h1>
            <div className="text-center">
              <p className="font-thin md:text-[1.25rem] text-xs max-w-[400px]  text-neutral-100  mt-2 mx-auto text-justify">A honlapot olyan céllel készítettem, hogy bemutassam Kemenesalja nevezetes helyeit, és híres személyeit, mind ezt egy jól kinéző letisztult dizájn-nal megáldva. </p>
              <div className="flex-row ">
                <Link href={"/kornyek"}><Button variant={"ghost"} className="w-[10rem] mt-5 cursor-pointer transition-all duration-500 hover:bg-[#27285C] ">A környék</Button></Link>
                <Link href={"/hiresek"}><Button variant={"ghost"} className="w-[10rem] mt-5 cursor-pointer transition-all duration-500 hover:bg-[#27285C] ml-3  ">A Híres személyek</Button></Link>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
