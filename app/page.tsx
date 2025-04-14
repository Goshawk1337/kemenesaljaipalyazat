import Image from "next/image";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
 
      <div className=" mt-24">
        <div className="grid-cols-1 w-full mx-auto">
          <div className="text-neutral-300 text-center   ">
            <h1 className="font-bold md:text-[2.5rem]  text-2xl">Üdv a honlapon!</h1>
            <div className="text-center">
              <p className="font-thin md:text-[1.2rem] text-xs max-w-[400px]  text-neutral-300  mt-2 mx-auto text-justify">A honlapot olyan céllel készítettem, hogy bemutassam Celldömölk nevezetes helyeit, és híres személyeit, mind ezt egy jól kinéző letisztult dizájn-nal megáldva. </p>
              <div className="flex-row ">
                <Link href={"/kornyek"}><Button variant={"ghost"} className="mt-5 cursor-pointer transition-all duration-500 bg-neutral-800">A környék</Button></Link>
                <Link href={"/hiresek"}><Button variant={"ghost"} className="mt-5 cursor-pointer transition-all duration-500 ml-3 bg-neutral-800">A Híres személyek</Button></Link>
                <Link href={""}><Button variant={"ghost"} className="mt-5 cursor-pointer transition-all duration-500 ml-3 bg-neutral-800">Celldömölk nevezetességei</Button></Link>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
