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

const people: { id: string, name: string, description: string, img: string, wiki: string }[] = [
  {
    "id": "portik",
    "name": "Portik Tamás",
    "description": "Portik Tamás (Celldömölk, 1967. december 14. –) milliárdos magyar bűnöző, az 1990-es évek olajmaffia-botrányainak egyik kulcsszereplője. A rendőrség 2012-ben őrizetbe vette. 2013 áprilisában kirobbant a politikai botrányt kavaró Portik–Laborc-ügy. A Prisztás-gyilkosság ügyében a Fővárosi Ítélőtábla felbujtóként elkövetett emberölés miatt 15 év fegyházra ítélte jogerősen 2016. május 26-án. 2017-ben a bíróság a Fenyő-gyilkosság ügyében hozott újabb jogerős ítéletében 13 éves szabadságvesztéssel sújtotta Portikot. 2024. február 8-án az ügyben újabb ítélet született, miután a feltételezett felbújtót, Gyárfás Tamást is bíróság elé állították: elsőfokon Gyárfás mint bűnsegéd hét év fegyházat, míg Portik életfogytiglant kapott.",
    "img": "/assets/emberek/portik.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Portik_Tam%C3%A1s"
  },
  {
    "id": "boross",
    "name": "Boross Mihály",
    "description": "Boros (1876-ig Weiner) Salamon kántor és Klein Nanett fia. Tanulmányait Budapesten végezte, a József Műegyetemen szerzett mérnöki oklevelet 1903-ban, Boros Miksa néven, ezután néhány évig vidéken dolgozott mérnökként. Érettségi után, 1896-ban már újságírói pályán volt, 1897-től a Budapesti Naplónál dolgozott. Minden írói munkássága a színpaddal volt kapcsolatos. Rendezői színjáték-tanulmányokat végzett, színpadi munkásként és statisztálás révén első forrásból merítette a színpad technikai ismereteit. Első drámáját, A betörőt 1903-ban írta. További művei között szerepelnek a Mult, Őnagysága arcképe, Mah-Jong, Keresztes-pók, A költő, János. Írt fantasztikus regényeket, verseket, novellákat, kritikákat. 1923 és 1944 között az Esti Kurír színikritikusa volt. 1945. január 8-án nyilas brigantik golyója végzett vele.",
    "img": "/assets/emberek/boross.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Boross_Mih%C3%A1ly_(%C3%ADr%C3%B3,_1877%E2%80%931944)"

  },
  {
    "id": "csaszar",
    "name": "Császár Gábor",
    "description": "Gyermekkorát Kenyeriben töltötte. A celldömölki Eötvös Loránd Általános Iskola sporttagozatán ismerkedett meg a kézilabda alapjaival. 14 évesen került Dunaújvárosba. Császár Gábor a Dunaferr SE első számú irányítója volt és a nézők egyik nagy kedvence. 2007-ben külföldre igazolt Dániába a Viborg HK-hoz. A Dunaferrben bajnoki bronzot és kupaezüstöt szerzett. Később a spanyol Teka Cantabriához, majd a francia Chambery Savoie HB csapatához került. 2010-től az MKB Veszprém játékosa lett, ahol bajnokságot és kupát is nyertek.",
    "img": "/assets/emberek/csaszar.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Cs%C3%A1sz%C3%A1r_G%C3%A1bor"

  },
  {
    "id": "berzsenyi",
    "name": "Berzsenyi Dániel",
    "description": "Középbirtokos nemesi családban született. Sopronban, az evangélikus líceumban tanult, ahol inkább testi erejével tűnt ki. Felesége Dukai Takách Zsuzsanna volt, akivel sömjéni birtokukra költöztek. Titokban írt verseit barátja, Kis János lelkész Kazinczy Ferencnek küldte el, aki elismerően nyilatkozott róluk. Kölcsey Ferenc kritikája visszafogta költői munkásságát, de tudományos tanulmányokat folytatott. Élete végén magányosan élt birtokán, Niklán. Versei hazafias érzéseket és általános gondolatokat fogalmaznak meg, kifejező, erőteljes stílusban.",
    "img": "/assets/emberek/berzsenyi.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Berzsenyi_D%C3%A1niel"

  },
  {
    "id": "dukai",
    "name": "Dukai Takách Judit",
    "description": "Takách István birtokos és muzsai Vittnyédy Terézia leánya, Dukán (Vas vármegye) született, 1795. szeptember 4-én keresztelték Kissomlyón. Szülei gondos nevelésben részesítették, s mikor kora ifjúságában tanújelét adta költői tehetségének, maguk is buzdították az írásra. Amikor anyja 1811-ben meghalt, apja Sopronba vitte tanulni, hol nyelvekben, zenében, valamint a gazdasszonykodás különféle elemeiben is szép haladásra tett szert; úgy tért vissza családi lakába, hol a háztartás gondjait egészen átvette. 1814-ben Döbrentei Gábor, Wesselényi Miklóssal és nevelőjével, akik ekkor Itáliából tértek vissza, meglátogatták. Már ekkor verselgetett Malvina néven, amit később is megtartott költeményeinél. Gróf Festetics György méltónak látta az 1817-ben Keszthelyen tartott Helikon ünnepélyre meghívni. Berzsenyi Dániel is méltatta tehetségét Kazinczy Ferenchez írt levelében. 1818-ban Göndöcz Ferenc vezette oltárhoz, akivel Felsőpatyra költözött. Tizenkét évig élt első férjével, s négy gyermekük született. 1832-től második férje Patthy István ügyvéd volt. Hirtelen jött tüdővészben halt meg 1836. április 15-én, Sopronban. Duka község temetőjében nyugszik, sírhelye a Nemzeti sírkert része, a község központjában pedig áll az egykori Dukai Takách-kúria.",
    "img": "/assets/emberek/dukai.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Dukai_Tak%C3%A1ch_Judit"

  },
  {
    "id": "kresznerics",
    "name": "Kresznerics Ferenc",
    "description": "Kresznerics Ferenc (1770–1832) nyelvész, lexikográfus és katolikus pap, aki a magyar nyelv gazdagításán és rendszerezésén dolgozott. Legismertebb műve a 'Magyar-latin szótár', amely a magyar szókincs bővítését és a nyelv tudományos feldolgozását célozta. Munkássága jelentős hatással volt a magyar nyelv fejlődésére, és hozzájárult a nyelvújítási mozgalomhoz. Kresznerics Ferenc életét a tudományos kutatás és a nyelv iránti elkötelezettség jellemezte. (Róla nem találtam semmilyen Portrét.)",
    "img": "/assets/emberek/kresznerics.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Kresznerics_Ferenc"

  },
  {
    "id": "gazdag",
    "name": "Gazdag Erzsi",
    "description": "Gazdag Erzsi (1912–1987) költőnő, aki gyermekverseivel vált ismertté és szeretetté a magyar irodalomban. Művei játékosak, ritmusosak, és gyakran tanító jellegűek, amelyek a gyermekek nyelvi fejlődését segítik. Versei számos gyermekantológiában és tankönyvben szerepelnek, hozzájárulva a magyar gyermekirodalom gazdagításához. Gazdag Erzsi munkássága a gyermekek világának mély megértéséről tanúskodik.",
    "img": "/assets/emberek/gazdag.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Gazdag_Erzsi"

  },
  // {
  //   "id": "majthenyi",
  //   "name": "Majthényi László",
  //   "description": "Majthényi László (1814–1886) költő, író és újságíró, aki a 19. századi magyar irodalom jelentős alakja volt. Műveiben gyakran foglalkozott társadalmi kérdésekkel, és elkötelezett volt a nemzeti értékek mellett. Írásai hozzájárultak a magyar irodalom fejlődéséhez, és hatással voltak kortársaira. Majthényi László munkássága a magyar irodalom sokszínűségét és gazdagságát tükrözi.",
  //   "img": "/assets/emberek/majthenyi.png",
  //   "wiki": ""

  // },
  {
    "id": "soltis",
    "name": "Soltis Lajos",
    "description": "Soltis Lajos (1942–2006) színész és rendező, aki a magyar színházi élet meghatározó alakja volt. Munkássága során számos emlékezetes előadást hozott létre, és hozzájárult a színházi kultúra gazdagításához. Nevéhez fűződik a Soltis Lajos Színház megalapítása, amely a magyar színházi élet fontos intézménye. Soltis Lajos művészete a közönség és a szakma elismerését egyaránt kivívta.",
    "img": "/assets/emberek/soltis.jpg",
    "wiki": "https://hu.wikipedia.org/wiki/Soltis_Lajos"

  },
  {
    "id": "zongor",
    "name": "Zongor Ferenc",
    "description": "Zongor Ferenc (1915–1999) helytörténész és pedagógus, aki jelentős munkát végzett Kemenesalja történetének feltárásában és dokumentálásában. Kutatásai hozzájárultak a régió múltjának megismeréséhez, és fontos forrásokat biztosítottak a helyi történelem iránt érdeklődők számára. Pedagógusként is kiemelkedő szerepet játszott, generációkat nevelt a történelem és a helyi értékek tiszteletére.",
    "img": "/assets/emberek/zongor.jpg",
    "wiki": "https://www.cellbibl.hu/index.php/10-lexikon/370-zongor-ferenc"

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
          <Select onValueChange={setSelected} >
            <SelectTrigger className="text-neutral-300 cursor-pointer"   >
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
                      <a href={person.wiki} target="_blank  ">
                        <h1 className="text-neutral-300 md:text-[2.5rem] text-2xl  font-bold no-underline hover:underline hover:text-neutral-500 transition-all duration-300 inline-block">{person.name}</h1>
                      </a>
                      <p className=" text-justify text-neutral-300 max-w-[600px] mt-1">{person.description}</p>
                    </div>
                    <div className="mt-5">
                      <Image className="rounded-lg max-w-lg" src={person.img} width={10} height={20} layout="responsive" alt={person.name} title={person.name}></Image>
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