
"use client"
import useCommandStore from '@/app/store/commandStore';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";

import BackendSection from './components/backend';

let backend = [
  { name : "express", command : "express", img : "https://img.icons8.com/color/512/express-js.png"},
  { name : "mongoose", command : "mongoose", img : "https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png "},
  { name : "passport", command : "passport-js", img : "https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png"},
  { name : "cors", command : "cors", img : "https://images.velog.io/images/leejh96/post/c613f6bd-7ed5-45a7-9c12-f3bcfaa0ec50/227652.png"},
  { name : "socket io", command : "socket-io", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"},
  { name : "gemeni", command : "@google/generative-ai", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"},
  { name : "open ai", command : "openai", img : "https://cdn.worldvectorlogo.com/logos/openai-2.svg"},
  { name : "axios", command : "axios", img : "https://www.pngitem.com/pimgs/m/91-913031_axios-axios-logo-hd-png-download.png"},
  { name : "cookie parser", command : "cookie-parser", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjCGnxYtwOu0H5owyaoSvbof60Y4OQt0vuQ&s"},
  { name : "express validaotr", command : "express-validator", img : "https://images.opencollective.com/express-validator/36a8af1/logo/256.png"},
  { name : "JWT", command : "jwt", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Pte0L4XLvNqEWXbkCXk_LDN6eSpcaDDLhQ&s"},
  { name : "multer", command : "multer  ", img : "https://miro.medium.com/v2/resize:fit:1400/1*QTZvtnHWanNxBQBynhtlIA.png"},
]


export default function Home() {
  let command = useCommandStore((state) => state.command)
  let getCommand = useCommandStore((state) => state.getCommand)
  console.log(getCommand())
  return (
    <div>
      <br /> <br /> <br /> <br /><br /> <br />

      <div className='container  m-auto grid grid-cols- gap-5 sm:grid-cols-3'>
        <BackendSection />
       
      </div>

      <div className='w-11/12 shadow shadow-purple-500 fixed' style={{bottom : "3%", left: "3%"}}>
          <div className="container-fluid bg-stone-800 flex justify-end h-12">
            <Button variant="outlined"> COPY </Button>
          </div>
          <div className="container-fluid bg-stone-900  h-12">
            <h1 className="p-3 bg-stone-900 "> {getCommand()} </h1>
          </div>
      </div>
      
    </div>
  );
}

