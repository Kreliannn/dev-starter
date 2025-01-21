"use client"
import useCommandStore from "./store/commandStore";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";

let backend = [
  { name : "express", command : "express", img : "https://img.icons8.com/color/512/express-js.png"},
  { name : "mongoose", command : "mongoose", img : "https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png "},
  { name : "passport js", command : "passport-js", img : "https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png"},
  { name : "cors", command : "cors", img : "https://images.velog.io/images/leejh96/post/c613f6bd-7ed5-45a7-9c12-f3bcfaa0ec50/227652.png"},
  { name : "socket io", command : "socket-io", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png"},
  { name : "gemeni", command : "@google/generative-ai", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s"},
  { name : "open ai", command : "openai", img : "https://cdn.worldvectorlogo.com/logos/openai-2.svg"},
  { name : "axios", command : "axios", img : "https://www.pngitem.com/pimgs/m/91-913031_axios-axios-logo-hd-png-download.png"},
  { name : "cookie parser", command : "cookie-parser", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjCGnxYtwOu0H5owyaoSvbof60Y4OQt0vuQ&s"},
  { name : "express validaotr", command : "express-validator", img : "https://images.opencollective.com/express-validator/36a8af1/logo/256.png"},
  { name : "JWT", command : "jwt", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjCGnxYtwOu0H5owyaoSvbof60Y4OQt0vuQ&s"},
]


export default function Home() {

  let command = useCommandStore((state) => state.command)
  let setCommand = useCommandStore((state) => state.setCommand)
  let getCommand = useCommandStore((state) => state.getCommand)

  console.log(getCommand())

  let checkBox = (command: string): void => {
    setCommand(command)
  }

  return (
    <div>
      <br /> <br /> <br /> <br /><br /> <br />

      <div className='container  m-auto grid grid-cols- gap-5 sm:grid-cols-3'>

        <div className="border bg-stone-900 h-96">
          <div className="bg-stone-800 h-1/6 flex justify-center place-items-center">
            <Typography variant="h5" className="text-center text-purple-600"> Backend </Typography>
          </div>

          <div className=" w-11/12 m-auto h-5/6 grid grid-cols-3   gap-3 overflow-auto hide-scrollbar">
            {
              backend.map((library) => {
                return(
                <div key={library.name} className="h-32 mt-2 border  bg-white">
                  <div className="h-4/6  border">
                      <img src={library.img}  style={{width : "100%", height : "100%"}}/>
                  </div>

                  <div className="h-2/6  border flex">
                      <div className="w-9/12  flex justify-center place-items-center">
                          <Typography className="text-purple-700"> {library.name} </Typography>
                      </div>

                      <div className="w-3/12  flex justify-center place-items-center bg-white ">
                        <Checkbox color="secondary" onChange={() => checkBox(library.command)}/>
                      </div>
                  </div>
                </div>
                )
              })
            }
            
          </div>

          
        </div>

        <div className="border bg-stone-900 h-96  ">
          <div className="bg-stone-800 h-1/6 flex justify-center place-items-center">
            <Typography variant="h5" className="text-center text-purple-600"> Frontend </Typography>
          </div>
        </div>


        <div className="border bg-stone-900 h-96 ">
          <div className="bg-stone-800 h-1/6 flex justify-center place-items-center">
            <Typography variant="h5" className="text-center text-purple-600"> Dev Dependencies </Typography>
          </div>
        </div>

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


