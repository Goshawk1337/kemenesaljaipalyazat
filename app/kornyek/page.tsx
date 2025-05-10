"use client"
import React, { useState } from "react";
import Navbar from "@/components/navbar";
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
import FadeIn from "../scrollfade";

const tabsData: { [key: string]: { Label: string, description: string, img: string }[] } = {
    "Kemenesalja-[Tájegység]": [
        {
            Label: "Kemenesalja",
            description: "Kemenesalja földrajzi tájegység Vas vármegyében, a Kemeneshát keleti oldalán, a Rába, Zala és Marcal folyók között fekvő terület. Területe 90–100 km², tengerszint feletti átlagos magassága 110-140 méter. Legmagasabb pontjai a 291 méter magasságú Ság hegy  és a 235 m-es Kis-Somlyó. Nyugatról a Kemeneshát, keletről a Marcal völgye, délről pedig részben a Kemeneshát, részben a Zalai-dombvidék határolja, nyugat és délnyugat felé a Kemenesalja a Kemeneshátban folytatódik, északról a Rába határolja. Az éves átlagos csapadékmennyiség 633 milliméter. A legcsapadékosabb hónap a július a 74,4 milliméteres átlagával, csapadékban legszegényebb hónapja a január 37,2 milliméteres átlagával.",
            img: "/assets/kemenesalja/kemenesalja.png",
        },

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
        },
        {
            "Label": "Ság (hegy)",
            "description": "A Ság tanúhegy Vas vármegye keleti részén, a Kemenesháton. 279 méter magasan emelkedik Celldömölk fölött, és közigazgatásilag is hozzá tartozik. 1891-ben a hegy platóján végzett méréseket Eötvös Loránd a róla elnevezett torziós ingával. A hegyen a 20. században bazaltot bányásztak, ma azonban itt található a Sághegyi Tájvédelmi Körzet.[2]",
            "img": "/assets/celldomolk/saghegy.jpg"
        }
    ],
    "Sitke": [
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
    "Szergény": [
        {
            "Label": "Evangélikus templom ",
            "description": "A reformáció idején ez a vidék a sárvári Nádasdi család birtokához tartozott, ezért - a földesúr vallását követve - szinte az egész falu evangélikus hitre tért át. Hitük gyakorlására az akkori Szent Mihály templomot kapták meg, amely ma már csak egy omladozó épület. Az ellenreformáció évtizedeiben a katolikus Erdõdi család visszavásárolta kemenesaljai birtokait, így az evangélikusoktól is elvette a templomot és plébánost hívott oda. Az egykor virágzó anyagyülekezet Gergelyi fíliája lett. A türelmi rendelet kiadása után 1783-ban újra erőre kaptak és megépítették templomukat. Ezt építették át 1824-ben és 1876-ban, majd 1949-ben bővítették. 1926-ban tornyot építettek hozzá, és 1979-ben is történt rajta egy átépítés.",
            "img": "/assets/szergeny/templom.webp"
        },
        {
            "Label": "Geist - Magyar Őstermelő Rt. kúriája",
            "description": "(Kolozsvári u. 72.) Erdődy Sándor gróf, a falu földesura itteni birtokai nagyobb részét a 20. század elején a Geist családnak adta el, akik szombathelyi fakereskedők és gyárosok voltak. A Geist család 1913-ban 'szergényi' előnévvel nemesi címet kapott. A kúriát Geist Lajos építtette fel 1907-08-ban eklektikus stílusban. Halála után fia, Geist Jenő lett a birtok tulajdonosa, aki 1927-től kormányfőtanácsosi címet viselt, illetve hét évig a szombathelyi izraelita hitközség elnöki posztját töltötte be. Az I. világháború után a birtokot és a kúriát a Geist család eladta a Magyar Őstermelők Részvénytársaságának. Tőlük sajátították ki 1945-ben az épületet, melyben tanácsi kirendeltséget és orvosi rendelőt helyeztek el. Napjainkban polgármesteri hivatal, orvosi rendelő és óvoda működik az épületben.",
            "img": "assets/szergeny/ostermelo.jpg"
        }
    ],
    "Pápoc": [
        {
            "Label": "Havas Boldogasszony kápolna",
            "description": "A nagyrészt román stílust képviselő, valószínűleg a 12. században emelt épület, azonosnak tekinthető a település Árpád-kori plébánia templomával (Szent Lőrinc-templom). A mintegy 9 m átmérőjű centrális négykaréjos felépítésű, emeletes templom téglából készült, 1 m körüli falvastagsággal. A jelenlegi cserépfedésű emeleti rész és a fazsindely borítású kupola között nyolcszögletes szint a laterna található, melynek minden második oldalán keskeny félköríves záródású – a már 20. században kiegészített – ikerablak van elhelyezve. A földszinti és az emeleti tér alaprajza közel azonos. Az alsó szint nyugati karéjában – a délre nyíló kaputól balra – befalazott bejárat található, a keleti karéjban széles ablaknyílás van kialakítva.",
            "img": "/assets/papoc/kapolna.jpg"
        },
        {
            "Label": "Ágoston-rendi perjelség (1359-1779)",
            "description": "Az Ágoston-rendi remetekolostort Gelsei Margit, Magyar Pál felesége alapította. A szerzet magyarországi tartományfőnöke Kálmán győri püspöktől 1359-ben kért engedélyt a Gelsei Margit által felajánlott Szűz Mária tiszteletére épített templom és a mellette fekvő telken a rend megtelepedésére. Gelsei Margit 1360-ban Visegrádon az esztergomi káptalan küldöttei által felvett végrendeletében javadalommal látta el a kolostort, az adományt I. Lajos király 1361-ben erősítette meg.",
            "img": "/assets/papoc/perjelseg.jpg"
        },
        {
            "Label": "Pápoci zsilip (1893)",
            "description": "Ipari műemlék, 1892-1893 között a Rába-szabályozást végző Neuschloss és Freund társvállalkozók építették a Lánka patak torkolata felett, 47000 o.é. forint költséggel.",
            "img": "/assets/papoc/zsilip.png"
        },
    ],
    "Mesteri": [
        {
            "Label": "Mesteri Termálfürdő",
            "description": "1968-tól működik a 72 °C-os hévízre alapozott, mozgásszervi megbetegedések kezelésére ajánlott fürdő. Az 1800 m mélységből feltörő termálvíz a kalcium-magnézium-hidrogénkarbonátos termálvizek csoportjába tartozik.",
            "img": "/assets/mesteri/mesteri.webp"
        },
        {
            "Label": "Árpád-kori templom",
            "description": "Az Árpád-kori templom a falutól nyugatra, egy szokatlan dombon áll. Körülötte árok. A kutatás során kiderült, hogy a domb mesterséges és vaskori halomsír volt, amire ráépítették a templomot. A templom román stílusban épült a XIII. század második negyedében. A déli hajófalon – a nyugati oromfalon előkerülő befalazott, illetve átfalazott ablak- és ajtónyílások csakúgy ezt bizonyítják, mint a templom alaprajza. A Szent Mihály arkangyal tiszteletére épített templom falusi templom, kelet-nyugati irányba tájolt, egyhajós, nyugati karzattal. Közel négyzetes, egyenes záródású szentélyéhez annál kétszer hosszabb, síkmennyezetes hajó csatlakozott, melynek nyugati oldalán, de nem a tengelyében, hanem északi oldalán volt felépítve a tornya. Így a nyugati oromfalon előkerült ajtónyílás közül az egyik kijárat volt a templomból a szabadba, a másikon be lehetett jutni a toronyba.",
            "img": "/assets/mesteri/arpadtemp.jpg"
        },
        {
            "Label": "Batthyány-Strattmann-kastély",
            "description": "A Batthyány-Strattmann–Zathureczky–Gyömörey-kastély egykori főnemesi kastély az egykor Felsőmesterihez, ma Mesterihez tartozó Intaházán. Szokták még felsőmesteri kastély vagy intaházi kastély néven is emlegetni. Egykor a németújvári herceg Batthyány-Strattmann család tulajdona volt. A kastélyban ma a celldömölki Kemenesaljai Egyesített Kórház Addiktológiai és Pszichiátriai Rehabilitációs Központja működik. (újabb nevén szombathelyi Markusovszky Egyetemi Oktatókórház Pszichiátriai Rehabilitációs Intézet) Itt játszódik dr. Benedek István Aranyketrec című műve",
            "img": "/assets/mesteri/kastely.jpg"
        },
    ],
    "Egyházashetye": [
        {
            "Label": "Berzsenyi Dániel Emlékház",
            "description": "A Berzsenyi Dániel Emlékház Egyházashetyén, Berzsenyi Dániel szülőházában kialakított irodalmi emlékhely, kisebb múzeum. A település kastélyparkja mögött található, fenntartója a község önkormányzata. A költőnek Niklán másik emlékmúzeuma is van, melyet hol szintén emlékháznak, hol Berzsenyi Múzeumnak neveznek.",
            "img": "/assets/egyhazasetye/berzsenyi.jpg"
        },
        {
            "Label": "Gotthárd-Felsőbüki Nagy-kastély",
            "description": "A kastélyt Felsőbüki Nagy Sándor építtette barokk stílusban. Jelenleg üresen áll, legutóbb általános iskola működött. Bárdosi János muzeológus 1965-ben írt a kastélyról: „A faluban található a Felsőbüki Nagyok (előtte: a herényi Gotthárdok) kétszintes, teljes egészében alápincézett úrilaka, amelyet a falu kastélynak nevez. Ma körzeti általános iskola működik az épületben, Berzsenyiről elnevezve. Maga a klasszicizáló épület meglehetősen jellegtelen. Régebbi, alacsonyabb szárnya épült a Gotthárdok idején, az újabb, magasabb traktust a Felsőbüki Nagyok illesztették hozzá. A kastély az uradalmi birtokközpont szerepét töltötte be. A Felsőbüki Nagyok uradalma volt a község területének több mint kétharmada (kétezer-háromszáz katasztrális holdból közel ezerhatszáz tartozott az uradalomhoz.)",
            "img": "/assets/egyhazasetye/berzsenyi.jpg"
        }
    ],
    "Kemenessömjén": [
        {
            "Label": "A katolikus templom",
            "description": "Mint a legtöbb magyar faluban, Kemenessömjénben is a legrégebbi épület a templom. Keletkezésének pontos dátumát nem ismerjük. A Kisboldogasszonynak szentelt templom első írásos említése 1339-ből való. Száz év múlva, 1439. augusztus 8.-án így szól róla a forrás: IV. Jenő pápa Firenzében Osth László kérvényére a semjéni Szűz Mária tiszteletére épült templom hívei számára búcsút engedélyezett. Feltehető, hogy plébániatemplom volt a reformációig, és Mihályfa is hozzátartozott. 1550-ben még katolikus plébánia, de a reformáció során az evangélikusok kapták meg. Ebben az időben szinte az egész Kemenesalja, így Sömjén is az új hitre tért át. Az ezt követő időkben a templom pusztulásnak indult, és csaknem 150 éven keresztül romlott az állaga, mígnem egy 1698-ban keltezett leírás már csak falak omladékát, romos sekrestyét és a templom körüli elhanyagolt temetőt említi.",
            "img": "assets/kemenessomjen/templom2.jpg",
        },
                {
            "Label": "Az evangélikus templom",
            "description": "A Kemenessömjénben élő - egyébként máig túlsúlyban lévő - evangélikus lakosságnak sokáig nem volt saját temploma. Egykoron a katolikus templomot használták, majd ennek erőszakos visszafoglalása után Dömölkre jártak a hívek hitüket gyakorolni. A templom története szorosan összefonódik az iskola sorsával. Így történetünk az 1852-es évben kezdődik, amikor a sömjéni gyülekezet iskola és tanítói lakás céljára egy zsúpfedeles jobbágyházat vásárolt Ajkay Jánostól. Az épületen 2 szoba lévén, egyiket átadták a tanítónak lakásul, a másikat iskolának használták.",
            "img": "assets/kemenessomjen/evtemplom.jpg",
        },
                {
            "Label": "A Berzsenyi-kastély",
            "description": "Községünk talán legszebb ékessége a képen látható kastély. A Berzsenyi-család ősei a XV. századig vezethetők vissza. Az ősök a veszprém megyei Nagy-Börzsöny-pusztára kaptak királyi adományt. Innen származik a nemesi előnevük: egyházasberzsenyi. Berzsenyi Jenő orvosdoktor 1845-ben Nemesmagasiban született, Vas vármegye tiszti főorvosa volt. Élénken részt vett a társadalmi, megyei és országos ügyekben. 1905-10-ig a celldömölki kerület országgyűlési képviselője volt. A kastélyt Moravetz Zsigmond tervei alapján ő építtette 1904-05-ben, szecessiós stílusban. Az épület gazdag homlokzati ornamentikával, kovácsoltvas ablakrácsokkal, korlátokkal díszített.",
            "img": "assets/kemenessomjen/bkastely10.jpg",
        }
    ],
    "Csönge" : [
        {
            "Label": "Evangélikus templom",
            "description": "A barokk stílusú templom 1784-ben épült. A fagerendás mennyezetű épület belsejében három oldalon faoszlopok által tartott karzat látható. A karzat orgona felőli részén található az a pad, amelynek egyik latin nyelvű belevésett szövegét Petőfi Sándornak tulajdonítanak: 'Spes confisa Deo nunguam confusa recedit', vagyis: 'Az Istenbe vetett reménység sohasem szégyenít meg.' A költő 1839. májusától három hónapot töltött a szomszédos Ostffyasszonyfán Salkovics Péter földmérnök házában. A 16 éves ifjú szerelemre gyúlt a csöngei nyugalmazott huszárőrnagy, Csáfordy Tóth Ferenc Róza nevű leánya iránt. A hagyomány szerint a szerelmes költő innen nézte az istentiszteletek alatt Rózát, akihez verseket is írt. A helyiség dísze a szószékoltár, amelyen szépen kivitelezett az utolsó vacsorát ábrázoló olajkép. Előtte vörös kőből faragott keresztelőmedence áll.",
            "img": "assets/csonge/csongetemp.jpg"
        },
        {
            "Label": "Jézus Szíve iskolakápolna (Katolikus templom)",
            "description": "A római katolikus iskolakápolna 1929-ben épült. Két harangja van. A kisebbik 54 cm átmérőjű, 92 kg-os, Seltenhofer Frigyes Fiai Harangöntő Gyárában öntötték Sopronban. Közadakozásból készült el 1924-ben. A nagyobbik harang 65 cm átmérőjű, 160 kg-os, szintén soproni öntésű, és szintén közadakozásból készült el 1930-ban.",
            "img": "assets/csonge/ktemplom.jpg"
        },
        {
            "Label": "Weöres Sándor - Károlyi Amy Emlékház",
            "description": "A település legnagyobb fiának, a gyermekkorát itt töltő Weöres Sándornak állít emléket a szépen felújított szülői házban berendezett állandó kiállítás. A költő halálának évében (1989) átadott első emlékszoba nemrégiben újjászületett, s 2006-ban nyerte el jelenlegi formáját. A ma már a költő házaspár életművét bemutató, európai színvonalú Weöres Sándor - Károlyi Amy Emlékház a hagyatékból származó bútorok, könyvek, fényképfelvételek, kéziratok, relikviák segítségével idézi meg a két költő emlékét.",
            "img": "assets/csonge/emlekhaz.jpg"
        },
                {
            "Label": "Tessedik-akác",
            "description": "A falu történelmének élő hírnöke a legendás, több, mint 200 éves Tessedik-akác, mely az evangélikus templom udvarán áll. Magyarország egyik első akácfája ez, melyet Tessedik Sámuel ültetett a XVIII. században. Ez a fa adta a Cser egykori őshonos erdőit felváltó akácosok szaporítóanyagát. Koronája alatt Petőfi Sándor, Kisfaludy Károly, Tatay Sándor és Pável Ágoston is megfordult.",
            "img": "assets/csonge/akac.jpg"
        }
    ]
};


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
                         <FadeIn>
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
                         </FadeIn>
 
                ))}
            </div>




        </div>

    )
}