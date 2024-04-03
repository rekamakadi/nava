# Képfeldolgozó Rendszer

Ez a projekt egy képfeldolgozó rendszer listanézetének és kép adatlapjának létrehozását célozza meg.

## Funkciók

- Listanézet: Thumbnail képek megjelenítése, kép adatokkal (ID, cím/leírás, méret, készítés dátuma, módosítás dátuma, formátum).
- Kereső: Keresési paraméterek kezelése (prefix, típus, formátum, dátum, szabadszavas keresés).
- Kép adatlap: Részletes információk megjelenítése nagy felbontású képpel és metaadatokkal.

## Technológia

- **Express.js** server mokkolt API
- **React.js** frontend
- **Bootstrap** CSS framework

## Telepítés és Futtatás

1. Klónozd le a projekt repozitóriumát a saját gépedre:
- git clone [https://github.com/rekamakadi/nava](Link)

2. Server telepítése, futtatása:
- cd server
- npm install
- npm run devStart
- A server a http://localhost:5000 porton fut.

3. Client telepítése, futtatása:
- cd client
- npm install
- npm run dev
- A client a http://localhost:5173 porton fut.

## Design

A projekt Figma-ban készített design tervezetét megtalálod a következő linken: 
* [https://www.figma.com/file/nZ7MG5JJmcvFTHS91HLqye/NAVA---Design-(React%2FBootstrap-5)?type=design&node-id=0-1&mode=design&t=x6Tu300Sr20FvSHN-0](link)

## Képforrás

A projektben szereplő képek random generálása a Picsum Photos API segítségével történik.

## Szerző

Makádi Réka
