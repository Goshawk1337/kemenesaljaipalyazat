"use client"
import React, { useState } from "react";
 import Image from "next/image";
import { motion } from "motion/react"

// import celldom from "@/public/celldom.jpg"
// import celljajas from "@/public/celljaras.png"
// import tortenelmi from "@/public/tortenelmiahah.jpg"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
 import { getTelepulesek } from "../datas";
const tabsData = getTelepulesek()

export default function Kornyek() {
    const [selectedKey, setSelectedKey] = useState("Kemenesalja-[Tájegység]")
    const selected = tabsData[selectedKey]
    return (
        <div>
            <div className="mb-10 ">
                <div className="flex flex-row space-x-4">
                    <h1 className="md:text-[2.5rem] text-2xl font-bold text-neutral-100">
                        Válassz ki egy  falut, vagy várost! <br />
                        <p className="text-neutral-100 text-xs md:text-[1.2rem] font-thin">
                            Ismerd meg kemenesalja neves helyeit.
                        </p>

                    </h1>

                </div>
                <div className="mt-10">
                    <Select onValueChange={setSelectedKey} >
                        <SelectTrigger className="text-neutral-100 cursor-pointer"   >
                            <SelectValue placeholder="Válassz egy falut, vagy várost" />
                        </SelectTrigger>
                        <SelectContent className=" " >
                            <SelectGroup>
                                {Object.keys(tabsData).map((key) => (
                                    <SelectItem key={key} value={key} className="cursor-pointer ">
                                        {key}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <hr className="mt-10 mb-10" />
            </div>

            <div>
                {selected.map((item, index) => (
                              <div
                                className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 mt-10"
                                key={index}
                                                     >
                                <div>
                                    <h1 className="text-[1.5rem] md:text-[2.2rem] font-bold mb-2 text-neutral-100">{item.Label}</h1>
                                    <p className="text-justify">{item.description}</p>
                                </div>
                                <div>
                                    <Image
                                        src={item.img}
                                        alt={item.Label}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                        className="lg:max-w-[28rem]    rounded-lg"
                                    />
                                </div>
                                                     </div>
                          
 
                ))}
            </div>




        </div>

    )
}