import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import celldom from "@/public/celldom.jpg"
import celljajas from "@/public/celljaras.png"
import tortenelmi from "@/public/tortenelmiahah.jpg"
 export default function Kornyek() {
    return (
        <div>

             <div className=" ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="text-neutral-300">
                         <h1 className="font-bold md:text-[2.5rem] text-2xl  inline-block">Celldömölk</h1>

                         <p className="max-w-[600px] font-thin text-justify text-xs md:text-lg mt-3">
                            Vas vármegyében, a Kemenesalján, a Ság-hegy lábánál, a Celldömölki járás székhelye. A város történelme gazdag és több évszázadra nyúlik vissza, nevét a helyi bencés apátságról kapta, amelynek központi eleme a híres Mária-kegytemplom. A templom ma is fontos zarándokhely, amely évente sok látogatót vonz.
                        </p>
                    </div>

                     <div className="flex justify-center items-center">
                        <Image src={celldom} width={400} className="rounded" alt="celldomolkvalamixdxdx" />
                    </div>
                </div>  
                
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="text-neutral-300">
                        <h1 className="font-bold md:text-[2.5rem] text-2xl  inline-block">Fekvése</h1>
                        <p className="max-w-[600px] font-thin text-justify text-xs md:text-lg mt-3">
                        A város a 8-as főút jánosházi leágazásától északra, a megyeszékhely Szombathelytől 42 kilométerre keletre, a Marcal-medencében fekszik.                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={celljajas} width={400} height={400} className="rounded" alt="másik kép" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="text-neutral-300">
                        <h1 className="font-bold md:text-[2.5rem] text-2xl  inline-block">Története</h1>
                        <p className="max-w-[600px] font-thin text-justify text-xs md:text-lg mt-3">
                        Kiscell és Nemesdömölk 1903-ban egyesült Celldömölk néven, Alsóságot 1950-ben, Izsákfát pedig Celldömölk várossá nyilvánításakor (1978. december 31-én) csatolták Celldömölkhöz.  A mai település területén egy ötödik település, Pórdömölk is volt a középkorban, ez azonban a 20. század elején már nem volt önálló.                      </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image src={tortenelmi} width={400} height={400} className="rounded" alt="másik kép" />
                    </div>
                </div>
            </div>
 
        </div>

    )
}