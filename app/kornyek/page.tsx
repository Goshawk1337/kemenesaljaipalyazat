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
            description: "Kemenesalja földrajzi tájegység Vas vármegyében, a Kemeneshát keleti oldalán, a Rába, Zala és Marcal folyók között fekvő terület. Területe 90–100 km², tengerszint feletti átlagos magassága 110-140 méter. Legmagasabb pontjai a 291 méter magasságú Ság hegy (291 méter) és a 235 m-es Kis-Somlyó. Nyugatról a Kemeneshát, keletről a Marcal völgye, délről pedig részben a Kemeneshát, részben a Zalai-dombvidék határolja, nyugat és délnyugat felé a Kemenesalja a Kemeneshátban folytatódik, északról a Rába határolja. Az éves átlagos csapadékmennyiség 633 milliméter. A legcsapadékosabb hónap a július a 74,4 milliméteres átlagával, csapadékban legszegényebb hónapja a január 37,2 milliméteres átlagával.",
            img: "/assets/kemenesalja/kemenesalja.png",
        },
        {
            Label: "Sághegy",
            description: "A Ság tanúhegy Vas vármegye keleti részén, a Kemenesháton.  279 méter magasan emelkedik Celldömölk fölött, és közigazgatásilag is hozzá tartozik. 1891-ben a hegy platóján végzett méréseket Eötvös Loránd a róla elnevezett torziós ingával. A hegyen a 20. században bazaltot bányásztak, ma azonban itt található a Sághegyi Tájvédelmi Körzet. A környező síkságából 150 m-re kiemelkedő hegy egy 5 millió éves tűzhányó maradványa. A tanúhegy lankája homokos pannon képződményekből, a meredekebb kúp vulkáni tufából és bazaltból áll. A térséget a vulkáni működés előtt a Pannon-tenger vize borította. A kőzetolvadék több kilométeres mélységből, tektonikus törések kereszteződésében létrejött magmacsatornákon került a felszínre. Az első kitöréssel kiszórt törmelék, a tufa, mintegy 2000 méter vastag homokos rétegre hullott. A tűzhányó működésének második szakaszában a lávafolyam 50 m vastag bazalttakaróvá dermedt a hegy tetején. ",
            img: "/assets/kemenesalja/saghegy.jpg",
        }
    ],
    "Celldömölk": [
        {
            "Label": "Kemenes Vulkán Park",
            "description": "A Kemenes Vulkán Park Magyarország egyetlen vulkanológiai látogatóközpontja, amely interaktív kiállításokkal mutatja be a vulkánok működését és a Ság hegy geológiai jelentőségét. A modern épületben látványos installációk és tanösvények várják a látogatókat.",
            "img": "/assets/celldomolk/kemenespark.jpg"
        },
        {
            "Label": "Vulkán Gyógy- és Élményfürdő",
            "description": "A Ság hegy lábánál fekvő fürdő 1600 m² vízfelülettel rendelkezik, és gyógyvize különösen jótékony hatású mozgásszervi betegségek esetén. A fürdő különféle medencékkel és wellness szolgáltatásokkal várja a pihenni vágyókat.",
            "img": "/assets/celldomolk/kemenesfurdo.jpg"
        },
        {
            "Label": "Kegytemplom és Mária-kert",
            "description": "A celldömölki Nagyboldogasszony-templom a város egyik legfontosabb zarándokhelye, amelyet a 18. században építettek. A templom mellett található Mária-kert csendes elvonulást kínál a látogatóknak.",
            "img": "/assets/celldomolk/kegytemplom.jpg"
        }
    ],
    "sitke": [
        {
            "Label": "Szentháromság római katolikus templom",
            "description": "A 18. században épült barokk templom Sitke egyik legjelentősebb műemléke. A templom belső tere gazdag díszítésű, és fontos szerepet játszik a helyi vallási életben.",
            "img": "/assets/sitke/sitketemplom.jpg"
        },
        {
            "Label": "Felsőbüki Nagy kastély",
            "description": "A középkori alapokon nyugvó kastély előbb barokk, majd 1851-ben romantikus stílusban került átépítésre. Az épület előtt áll a 'Búsuló Krisztus szobor', amelyet Felsőbüki Nagy Franciska állíttatott 1734-ben.",
            "img": "/assets/sitke/sitkekastely.jpg"
        },
        {
            "Label": "Kalaposkút",
            "description": "A Kalaposkút egy 1914-ben épült forrásfoglalás, amelyet a helyiek összefogásával újítottak fel. A kút a település egyik különleges nevezetessége, amely a múlt század elejének építészeti stílusát tükrözi.",
            "img": "/assets/sitke/sitkekut.jpg"
        }
    ],
    "Jánosháza": [
        {
            "Label": "Erdődy-Choron várkastély",
            "description": "A 16. század elején épült várkastély Jánosháza északi szélén található. Az egykor védelmi célokat szolgáló épület ma már funkció nélkül áll, de történelmi jelentősége miatt érdemes megtekinteni.",
            "img": "/assets/janoshaza/erdodykastely.jpg"
        }
    ]
};


export default function Kornyek() {
    return (
        <div>
            <div className="mb-10 ">
                <h1 className="text-[1.7rem] md:text-[2.5rem] font-bold text-neutral-300">Olvass a környékről!</h1>

                <p className="text-neutral-300 text-xs md:text-[1.2rem] font-thin" >Válaszd ki, hogy a környék melyik részét szeretnéd megtekinteni!</p>
            </div>
            <Tabs defaultValue="kemenesalja" className="">
                <TabsList className="  w-full     rtl:space-x-reverse overflow-x-auto bg-neutral-800 rounded-sm p-1 text-neutral-300">
                    {Object.keys(tabsData).map((key, index) => (
                        <TabsTrigger className="w-full cursor-pointer" key={index} value={key}>
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
                                    <h1 className="text-[1.5rem] md:text-[2.2rem] font-bold mb-2 text-neutral-300">{item.Label}</h1>
                                    <p>{item.description}</p>
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
                    </TabsContent>
                ))}
            </Tabs>
        </div>

    )
}