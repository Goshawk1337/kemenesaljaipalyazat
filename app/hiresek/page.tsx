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
  {
    id: "portik",
    name: "Portik Tamás",
    description: "Portik Tamás (Celldömölk, 1967. december 14. –) milliárdos magyar bűnöző, az 1990-es évek olajmaffia-botrányainak egyik kulcsszereplője. A rendőrség 2012-ben őrizetbe vette. 2013 áprilisában kirobbant a politikai botrányt kavaró Portik–Laborc-ügy. A Prisztás-gyilkosság ügyében a Fővárosi Ítélőtábla felbujtóként elkövetett emberölés miatt 15 év fegyházra ítélte jogerősen 2016. május 26-án. 2017-ben a bíróság a Fenyő-gyilkosság ügyében hozott újabb jogerős ítéletében 13 éves szabadságvesztéssel sújtotta Portikot. 2024. február 8-án az ügyben újabb ítélet született, miután a feltételezett felbújtót, Gyárfás Tamást is bíróság elé állították: elsőfokon Gyárfás mint bűnsegéd hét év fegyházat, míg Portik életfogytiglant kapott.",
    img: "/assets/portik.jpg"
  },
  {
    id: "boross",
    name: "Boross Mihály",
    description: "Boros (1876-ig Weiner) Salamon kántor és Klein Nanett fia. Tanulmányait Budapesten végezte, a József Műegyetemen szerzett mérnöki oklevelet 1903-ban, Boros Miksa néven, ezután néhány évig vidéken dolgozott mérnökként. Érettségi után, 1896-ban már újságírói pályán volt, 1897-től a Budapesti Naplónál dolgozott. Minden írói munkássága a színpaddal volt kapcsolatos. Rendezői színjáték-tanulmányokat végzett, színpadi munkásként és statisztálás révén első forrásból merítette a színpad technikai ismereteit. Első drámáját, A betörőt 1903-ban írta. További művei között szerepelnek a Mult, Őnagysága arcképe, Mah-Jong, Keresztes-pók, A költő, János. Írt fantasztikus regényeket, verseket, novellákat, kritikákat. 1923 és 1944 között az Esti Kurír színikritikusa volt. 1945. január 8-án nyilas brigantik golyója végzett vele.",
    img: "/assets/boross.jpg"
  },
  {
    id: "csaszar",
    name: "Császár Gábor",
    description: "Gyermekkorát Kenyeriben töltötte. A celldömölki Eötvös Loránd Általános Iskola sporttagozatán ismerkedett meg a kézilabda alapjaival. 14 évesen került Dunaújvárosba. Császár Gábor a Dunaferr SE első számú irányítója volt és a nézők egyik nagy kedvence. 2007-ben külföldre igazolt Dániába a Viborg HK-hoz. A Dunaferrben bajnoki bronzot és kupaezüstöt szerzett. Később a spanyol Teka Cantabriához, majd a francia Chambery Savoie HB csapatához került. 2010-től az MKB Veszprém játékosa lett, ahol bajnokságot és kupát is nyertek.",
    img: "/assets/csaszar.jpg"
  },
  {
    id: "berzsenyi",
    name: "Berzsenyi Dániel",
    description: "Középbirtokos nemesi családban született. Sopronban, az evangélikus líceumban tanult, ahol inkább testi erejével tűnt ki. Felesége Dukai Takách Zsuzsanna volt, akivel sömjéni birtokukra költöztek. Titokban írt verseit barátja, Kis János lelkész Kazinczy Ferencnek küldte el, aki elismerően nyilatkozott róluk. Kölcsey Ferenc kritikája visszafogta költői munkásságát, de tudományos tanulmányokat folytatott. Élete végén magányosan élt birtokán, Niklán. Versei hazafias érzéseket és általános gondolatokat fogalmaznak meg, kifejező, erőteljes stílusban.",
    img: "/assets/berzsenyi.jpg"
  },
  {
    id: "dukai",
    name: "Dukai Takách Judit",
    description: "Takách István birtokos és muzsai Vittnyédy Terézia leánya, Dukán (Vas vármegye) született, 1795. szeptember 4-én keresztelték Kissomlyón. Szülei gondos nevelésben részesítették, s mikor kora ifjúságában tanújelét adta költői tehetségének, maguk is buzdították az írásra. Amikor anyja 1811-ben meghalt, apja Sopronba vitte tanulni, hol nyelvekben, zenében, valamint a gazdasszonykodás különféle elemeiben is szép haladásra tett szert; úgy tért vissza családi lakába, hol a háztartás gondjait egészen átvette. 1814-ben Döbrentei Gábor, Wesselényi Miklóssal és nevelőjével, akik ekkor Itáliából tértek vissza, meglátogatták. Már ekkor verselgetett Malvina néven, amit később is megtartott költeményeinél. Gróf Festetics György méltónak látta az 1817-ben Keszthelyen tartott Helikon ünnepélyre meghívni. Berzsenyi Dániel is méltatta tehetségét Kazinczy Ferenchez írt levelében. 1818-ban Göndöcz Ferenc vezette oltárhoz, akivel Felsőpatyra költözött. Tizenkét évig élt első férjével, s négy gyermekük született. 1832-től második férje Patthy István ügyvéd volt. Hirtelen jött tüdővészben halt meg 1836. április 15-én, Sopronban. Duka község temetőjében nyugszik, sírhelye a Nemzeti sírkert része, a község központjában pedig áll az egykori Dukai Takách-kúria.",
    img: "/assets/dukai.jpg"
  }


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
                      <Image className="rounded-lg md:h-[20rem] md:w-[40rem]" src={person.img} width={10} height={20} layout="responsive" alt={person.name} title={person.name}></Image>
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