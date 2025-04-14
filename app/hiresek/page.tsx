"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Footer from "@/components/footer";
import { div } from "motion/react-client";

const people: { id: string, name: string, description: string, img: string }[] = [
  { id: "portik", name: "Portik Tamás", description: "Portik Tamás (Celldömölk, 1967. december 14. –) milliárdos magyar bűnöző, az 1990-es évek olajmaffia-botrányainak egyik kulcsszereplője. A rendőrség 2012-ben őrizetbe vette. 2013 áprilisában kirobbant a politikai botrányt kavaró Portik–Laborc-ügy. A Prisztás-gyilkosság ügyében a Fővárosi Ítélőtábla felbujtóként elkövetett emberölés miatt 15 év fegyházra ítélte jogerősen 2016. május 26-án.  2017-ben a bíróság a Fenyő-gyilkosság ügyében hozott újabb jogerős ítéletében 13 éves szabadságvesztéssel sújtotta Portikot.  2024. február 8-án az ügyben újabb ítélet született, miután a feltételezett felbújtót, Gyárfás Tamást is bíróság elé állították: elsőfokon Gyárfás mint bűnsegéd  hét év fegyházat, míg Portik életfogytiglant kapott. ", img: "/assets/portik.jpg" },
  { id: "boross", name: "Boross Mihály", description: "Boros (1876-ig Weiner) Salamon kántor és Klein Nanett fia. Tanulmányait Budapesten végezte, a József Műegyetemen szerzett mérnöki oklevelet 1903-ban, Boros Miksa néven, ezután néhány évig vidéken dolgozott mérnökként. Érettségi után, 1896-ban már újságírói pályán volt, 1897-től a Budapesti Naplónál dolgozott. Minden írói munkássága a színpaddal volt kapcsolatos. Ebben az időben már drámákkal is kísérletezett, rendezői színjáték-tanulmányokat végzett, színpadi munkásként és statisztálás révén első forrásból merítette a színpad technikai berendezésének, a drámák színpadi életrekelésének tudását. Közel kétesztendős ilyen tanulmányok hatása jótékonyan befolyásolják későbbi munkáit, amelyeknek mindén egyéb tulajdonságain kívül a színszerűség a főértékük. Színpadművészeti cikkei, tanulmányai kötetekre rúgnak. Legelső drámáját, A betörőt 1903-ban írta. Mult, Őnagysága arcképe, Mah-Jong, Keresztes-pók, A költő, János című művei az eszmei dráma irodalom szolgálatában születtek. Írt fantasztikus regényeket: A kék hattyú, Noe barlangja, A harmadik testamentum, Az anyaföld, A kakuk, Az ész sztrájkja. Filmeket: Veszélyben a pokol, Lavina; verseket, novellákat és színházi vonatkozású cikkeket, kritikákat. Lelkes, önzetlen munkása volt minden színpadot és színésztársadalmat érdeklő mozgalomnak és fáradhatatlan harcosa a magyar művészi színház megteremtését célzó mozgalomnak, s buzdító barátja minden új és művészi jelenségnek, támogatója a fiatal törekvéseknek. Kritikáiban a legkisebb, a legjelentéktelenebb szerep éppen úgy kap elismerést, ha az művészi munka, mint ahogy a legnagyobb színpadi munka hibáit is észreveszi, s azt a hozzászólás finomságával jegyzi meg. Írásainak súlyát, megbecsülését jellemzi, hogy kritikáit még azok is szeretettel fogadják, akiket hibáikkal együtt említ meg. A költő című poétikus drámáját 1929. május 7-én mutatta be az Uj Színház. A Magyar színművészeti lexikon munkatársa volt. 1923 és 1944 között az Esti Kurír színikritkusa volt. Forgatókönyveiből Balogh Béla rendezett filmeket. 1945. január 8-án nyilas brigantik golyója végzett vele.", img: "/assets/boross.jpg" },
  { id: "csaszar", name: "Császár Gábor", description: "Gyermekkorát Kenyeriben töltötte.[2] A celldömölki Eötvös Loránd Általános Iskola sporttagozatán ismerkedett meg a kézilabda alapjaival.[3] 14 évesen került Dunaújvárosba.[4] Császár Gábor a Dunaferr SE első számú irányítója volt és a nézők egyik nagy kedvence. Nagy meglepetés volt, amikor kiderült, hogy a válogatott kézilabdázó 2007-ben külföldre megy és eligazolt Dániába a Viborg HK-hoz. A Dunaferrben Császár bajnoki bronzokig, míg a Kupában ezüstig vitte búcsúszezonjában. A Viborg HK-tól a spanyol Teka Cantabriához került. 2009–2010-ben a francia Chambery Savoie HB csapatát erősítette. 2010-től a szurkolók nagy örömére visszatért Magyarországra és az MKB Veszprém játékosa lett. Veszprémben bajnokságot és kupát is nyertek.[5]", img: "/assets/boross.jpg" },
  { id: "berzsenyi", name: "Berzsenyi Dániel", description: "Középbirtokos nemesi családban született. Sopronban, az evangélikus líceumban tanult, ahol inkább testi erejével tűnt ki, mint szorgalmával vagy jó magatartásával. Az apja hatalmától szabadulni akaró ifjú házasságot kötött Dukai Takách Zsuzsannával,[1] és felesége sömjéni birtokára költöztek. Titokban írt verseit barátja, Kis János lelkész elküldte a korszak irodalmi vezéralakjának, Kazinczy Ferencnek. Berzsenyi felbuzdult a széphalmi mester dicséretén, és egy kötettel lépett a nyilvánosság elé. Ezután egyre kevesebbet verselt, Kölcsey Ferenc kritikája is kedvét szegte. Tanulmányokba kezdett, hogy költészetét a bírálattal szemben megvédhesse. Poétai harmonisztika című értekezésében fektette le a költészettel kapcsolatos nézeteit. Élete végén egyre magányosabban élt birtokán, Niklán. Berzsenyi művészetét az erőteljes kifejezések, költői képek jellemzik. Versei egyéni érzései mellett általános gondolatokat is megfogalmaznak. Hazafias műveiben hangot kap a magyarság iránti aggódás.", img: "/assets/boross.jpg" },
  { id: "dukai", name: "Dukai Takách Judit", description: "Dukán született 1795-ben, és Sopronban hunyt el 1836-ban. Verseit Malvina néven írta, és a magyar irodalom első női költőjeként ismert. Berzsenyi Dániel is méltatta költői tehetségét.", img: "/assets/boross.jpg" },
   

]
export default function Hiresek() {
  const [selected, setSelected] = useState(people[0].id)


  return (
    <div>
      <div className="mt-24 w-full">
        <div className="flex flex-row space-x-4">
          <h1 className="md:text-[2.5rem] text-2xl font-bold text-neutral-300">
            Válassz ki egy híres személyt! <br />
            <p className="text-neutral-300 text-xs md:text-[1.2rem] font-thin">
              Tudd meg a történetét, és hogy hogyan nézett ki!
            </p>
          </h1>

        </div>
        <div className="mt-10">
          <Select onValueChange={setSelected}>
            <SelectTrigger className="text-neutral-300"   >
              <SelectValue placeholder="Válassz egy személyt" />
            </SelectTrigger>
            <SelectContent className=" " >
              <SelectGroup>
                <SelectLabel>Celldömölk</SelectLabel>
                {people.map((hires) => (
                  <SelectItem key={hires.id} value={hires.id}>
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
            {/* {people.filter(person => person.id === selected).map(person => (
              <div>

              </div>

            ))} */}
            <div>
              {people
                .filter(person => person.id === selected)
                .map(person => (
                  <div key={person.id} className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
                    <div>
                      <h1 className="text-neutral-300 md:text-[2.5rem] text-2xl  font-bold">{person.name}</h1>
                      <p className=" text-justify text-neutral-300 max-w-[600px] mt-1">{person.description}</p>
                    </div>
                    <div className="mt-5">
                        <Image className="rounded-lg md:w-[40rem]"  src={person.img} width={10} height={10} layout="responsive" alt={person.name} title={person.name}></Image>
                    </div>
                  </div>
                ))}
            </div>
 
          </div>
        </div>
      </div>


    </div>
  );
}