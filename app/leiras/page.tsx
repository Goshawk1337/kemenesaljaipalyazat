"use client"

import React, { useState, useEffect } from "react"
import { getHiresek } from "../hiresek/page"
import { getTelepulesek } from "../kornyek/page"
import { object } from "motion/react-client"
export default function Leiras() {
    const famous = getHiresek()
    const places = getTelepulesek()
    return (
        <div className=" w-full ">
            <div className="grid grid-cols-1 gap-y-10 max-w-[600px] text-neutral-100 ">
                <div className="grid grid-cols-1 gap-y-5">
                    <h1 className=" md:text-[2.5rem] text-2xl font-extrabold">A projekt bemutatása</h1>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-semibold">A projekt bemutatásának szempontjai:</p>
                    <ol type="1" className="ml-15 md:text-[1.2rem] text-sm gap-3 font-thin list-decimal  leading-8">
                        <li>Bemutatott személyek listája</li>
                        <li>Bemutatott települések listája</li>
                        <li>Motivációm az elkészítésre</li>
                        <li>Hogyan dolgoztam fel a témát</li>
                        <li>Mennyi időt fordítottam a pályázatra</li>
                        <li>Mire használható ez a pályázat</li>
                        <li>Milyen fejlődési lehetőségeket látok</li>

                    </ol>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">1. Bemutatott személyek listája</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-semibold">A felsorolt személyek mind szerepelnek a pályázatban:</p>
                    <ol type="1" className="ml-15 md:text-[1.2rem] text-sm gap-3 font-thin list-decimal  leading-8">
                        {famous.map((item, index) => (
                            <li>{item.name}</li>
                        ))}

                    </ol>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">2. Bemutatott települések listája</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-semibold">A felsorolt települések mind szerepelnek a pályázatban:</p>

                    <ol type="1" className="ml-15 md:text-[1.2rem] text-sm gap-3 font-thin list-decimal  leading-8">
                        {Object.keys(places).map((key) => (
                            <li>{key}</li>
                        ))
                        }
                    </ol>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">3. Motivációm az elkészítésre</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-thin">Először nem kifejezetten volt motivációm az elkészítésre, csak a konstans unatkozás informatikaórán és a megjegyzések arra, hogy nekem erre a pályázatra be kellene nyújtanom valamit, meghozta azt, hogy nekiállok. Aztán átgondoltam, és felfogtam úgy az egészet, hogy ez egy tökéletes lehetőség a tudásomat fejleszteni, és ezzel is növelni a tapasztalatom mennyiségét. Így valamivel komolyabb felfogással elkezdtem, eleinte csak infóórákon mókolgattam a projekttel, de aztán rájöttem, hogy nem lesz meg "deadline-ra", így elkezdtem verziókezelni a GitHub segítségével, így a fejlesztési folyamat is végig követhető. Nem a frontend az erősségem, de ez is hozzátett ahhoz, hogy beleadjak egy kis erőt, és fejlesszem ott is a tudásomat. Szóval az elejétől, a semmi motivációtól eljutottam oda, hogy szívesen dolgozom ezen a projekten.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">4. Hogyan dolgoztam fel a témát</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-thin">Eleinte Wikipédia alapján írogattam, aztán belustultam adatgyűjtés szempontjából. ChatGPT barátomnak megírtam, hogy írjon össze település- és személyneveket Kemenesaljáról, aztán a neveket felhasználva kerestem tovább az interneten. Leírást, illetve képet nem biztosított az AI. </p>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">5. Mennyi időt fordítottam a pályázatra</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-thin">Őszintén, szerintem összességében olyan 6-7 óra, de lehet, hogy sokat mondtam. Ez mondjuk annak is köszönhető, hogy én emellett más projekteken is dolgoztam, amelyek nagyobb prioritást élveztek.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">6. Mire használható ez a pályázat</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-thin">Jelenlegi állapotában igazából annyi mondható el róla, hogy jól néz ki, és sok információt tartalmaz. A következő pontban leírt fejlesztések implementálásával akár többre is használható lenne, mivel jelenleg bármiféle szerver nélkül, statikusan van kint a hálón a weboldal, így minden adatot kliensoldalon tölt be egy listából. :D</p>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">7. Milyen fejlődési lehetőségeket látok</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-thin">Igazából ez egy TODO lista lesz :D A projekt jelenleg hiányos, mind abból a szempontból, hogy nincs benne minden település, illetve személy sem, akit meg kellene említeni. Későbbiekben szeretnék készíteni egy olyan részt a weboldalhoz, ahova bejelentkezéssel lehet bejutni, és onnan lehet feltölteni új dolgokat a listákhoz (igazából megkapná a CRUD-ot egy ORM adatbáziskezeléssel Express.js-ben). Ezenfelül, ha sikerül találnom valami használható API-t, akkor a Kemenesalján történő eseményeket (pl. falunap) listáznám ki, mivel szerintem feldobná az oldalt. De simán el tudok képzelni egy olyat is, hogy a kiválasztott településnél mutassa a jelenlegi időjárást.</p>
                </div>
                <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">Katt <a className="hover:underline hover:text-neutral-300" target="_blank" href="https://github.com/Goshawk1337/kemenesaljaipalyazat">IDE</a> a Github oldalért</h2>
                 </div>
                {/* <div className="grid grid-cols-1 gap-y-5">
                    <h2 className=" md:text-[2.3rem] text-2xl font-extrabold">Köszönet</h2>
                    <p className="ml-10 md:text-[1.2rem] text-sm font-thin">Köszönöm a <a href="https://music.youtube.com/playlist?list=PLaf_dgyvGPPftJwAP5uDGgTEE-kXDZ-VX" className="hover:underline hover:text-neutral-300" target="_blank">playlistemnek</a> hogy nem kellett zene nélkül letolnom az egészet, illetve a tanároknak akik mondták hogy csináljam mert a végére elég fun lett. Illetve a legfontosabb hogy a suli által biztosított ipari hulladéknak minősíthető  számítógépek hozzájárultak hogy otthon folytassam a munkát.</p>
                </div> */}
            </div>
        </div>
    )
}