"use client"
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FadeIn from "../scrollfade";
import { getHiresek } from "../datas";

const people = getHiresek()

 
export default function Hiresek() {
  const [selected, setSelected] = useState(people[0].id)


  return (
    <div>
      <div className="  w-full">
        <div className="flex flex-row space-x-4">
          <h1 className="md:text-[2.5rem] text-2xl font-bold text-neutral-100">
            Válassz ki egy híres személyt! <br />
            <p className="text-neutral-100 text-xs md:text-[1.2rem] font-thin">
              Tudd meg a történetét, és hogy hogyan nézett ki!
            </p>
          </h1>

        </div>
        <div className="mt-10">
          <Select onValueChange={setSelected}  >
            <SelectTrigger className="text-neutral-100 cursor-pointer"  >
              <SelectValue placeholder="Válassz egy személyt" />
            </SelectTrigger>
            <SelectContent className=" " >
              <SelectGroup>
                {people.map((hires) => (
                  <SelectItem key={hires.id} value={hires.id} className="cursor-pointer ">
                    {hires.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <hr className="mt-10 mb-10" />
        <div>

          <div  >
            <div>
              {people
                .filter(person => person.id === selected)
                .map(person => (
                  <FadeIn>

                    <div key={person.id} className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                      <div>
                        <a href={person.wiki} target="_blank  ">
                          <h1 className="text-neutral-100 md:text-[2.5rem] text-2xl  font-bold no-underline hover:underline hover:text-neutral-400 transition-all duration-300 inline-block">{person.name}</h1>
                        </a>
                        <p className=" text-justify text-neutral-100 max-w-[600px] mt-1">{person.description}</p>
                      </div>
                      <div className="mt-5">
                        <Image className="rounded-lg max-w-lg" src={person.img} width={10} height={20} layout="responsive" alt={person.name} title={person.name}></Image>
                      </div>
                    </div>
                  </FadeIn>
                ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}