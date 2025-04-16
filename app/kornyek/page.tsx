import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
// import celldom from "@/public/celldom.jpg"
// import celljajas from "@/public/celljaras.png"
// import tortenelmi from "@/public/tortenelmiahah.jpg"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { desc, img } from "motion/react-client";

const tabsData: { [key: string]: any[] } = {
    "kemenesalja": [
        {
            Label: "Kemenesalja",
            description: "Kemenesalja földrajzi tájegység Vas vármegyében, a Kemeneshát keleti oldalán, a Rába, Zala és Marcal folyók között fekvő terület.",
            img: "/assets/kemenesalja.png",
        },
        {
            Label: "Ság hegy",
            description: "A Ság tanúhegy Vas vármegye keleti részén, a Kemenesháton.  279 méter magasan emelkedik Celldömölk fölött, és közigazgatásilag is hozzá tartozik. 1891-ben a hegy platóján végzett méréseket Eötvös Loránd a róla elnevezett torziós ingával. A hegyen a 20. században bazaltot bányásztak, ma azonban itt található a Sághegyi Tájvédelmi Körzet.",
            img: "/assets/saghegy.jpg",
        }
    ],
    "Celldömölk": [

    ]
};


export default function Kornyek() {
    return (
        <div>
            <Tabs defaultValue="kemenesalja" className="">
                <TabsList>
                    {Object.keys(tabsData).map((key, index) => (
                        <TabsTrigger key={index} value={key}>
                            {key}
                        </TabsTrigger>
                    ))}

                </TabsList>
                {Object.entries(tabsData).map(([key, items]) => (
                    <TabsContent key={key} value={key} className="w-fit h-fit">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4 mt-10"
                            >
                                <div>
                                    <h1 className="text-xl font-bold mb-2">{item.Label}</h1>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <Image
                                    
                                        src={item.img}
                                        alt={item.Label}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                        className="lg:max-w-[25rem]  rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
        </div>

    )
}