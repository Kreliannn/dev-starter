"use client"
import { Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import useCommandStore from "@/app/store/commandStore";
import { useEffect, useState } from "react";

const backend = [
  { check : false, name : "express", command : "express", typescript : "@types/express", img : "https://img.icons8.com/color/512/express-js.png", documentation : "https://devdocs.io/express-getting-started/" },
  { check : false, name : "mongoose", command : "mongoose", typescript : "@types/mongoose", img : "https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png", documentation : "https://mongoosejs.com/docs/" },
  { check : false, name : "passport", command : "passport passport-local", typescript : "@types/passport @types/passport-local", img : "https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png", documentation : "https://www.passportjs.org/docs/" },
  { check : false, name : "cors", command : "cors", typescript : "", img : "https://images.velog.io/images/leejh96/post/c613f6bd-7ed5-45a7-9c12-f3bcfaa0ec50/227652.png", documentation : "https://www.npmjs.com/package/cors" },
  { check : false, name : "socket io", command : "socket.io", typescript : "@types/socket.io", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/2048px-Socket-io.svg.png", documentation : "https://socket.io/docs/v4/" },
  { check : false, name : "gemeni", command : "@google/generative-ai", typescript : "", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThr7qrIazsvZwJuw-uZCtLzIjaAyVW_ZrlEQ&s", documentation : "https://ai.google.dev/gemini-api/docs" },
  { check : false, name : "open ai", command : "openai", typescript : "@types/openai", img : "https://cdn.worldvectorlogo.com/logos/openai-2.svg", documentation : "https://platform.openai.com/docs/quickstart" },
  { check : false, name : "cookie parser", command : "cookie-parser", typescript : "@types/cookie-parser", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjCGnxYtwOu0H5owyaoSvbof60Y4OQt0vuQ&s", documentation : "https://expressjs.com/id/resources/middleware/cookie-parser.html" },
  { check : false, name : "express session", command : "express-session", typescript : "@types/express-session", img : "https://logovectordl.com/wp-content/uploads/2020/10/session-technologies-usesession-com-logo-vector.png", documentation : "https://www.npmjs.com/package/express-session" },
  { check : false, name : "express validator", command : "express-validator", typescript : "", img : "https://images.opencollective.com/express-validator/36a8af1/logo/256.png", documentation : "https://express-validator.github.io/docs/" },
  { check : false, name : "doteEnv", command : "dotenv", typescript : "", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaNT3Fi8RMNUpPDk-Zddeo2FTvDN3Sye5AA&s", documentation : "https://www.npmjs.com/package/dotenv" },
  { check : false, name : "JWT", command : "jsonwebtoken", typescript : "@types/jsonwebtoken", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Pte0L4XLvNqEWXbkCXk_LDN6eSpcaDDLhQ&s", documentation : "https://www.geeksforgeeks.org/jwt-authentication-with-node-js/" },
  { check : false, name : "multer", command : "multer", typescript : "@types/multer", img : "https://miro.medium.com/v2/resize:fit:1400/1*QTZvtnHWanNxBQBynhtlIA.png", documentation : "https://www.npmjs.com/package/multer" },
]


  
export default function BackendSection({ toggle } : { toggle: boolean })
{
   const [libraries, setLibraries] = useState(backend)

    const command = useCommandStore((state) => state.command)
    const setCommand = useCommandStore((state) => state.setCommand)

    console.log(libraries)

    useEffect(() => {
      setLibraries(backend)
    }, [toggle])
    
   
    const visitDoc = (doc: string) => {
      window.open(doc, '_blank', 'noopener noreferrer');
    }

    const checkBox = (command: string, typescript : string): void => {
        setCommand(command)
        if(toggle) setCommand(typescript)
    }


    return(
        <div className="  h-96   rounded overflow-hidden drop-shadow-lg" style={{backgroundColor : "#e1e4e6"}}>
          <div className=" h-1/6 flex justify-center place-items-center " style={{backgroundImage: "linear-gradient(to bottom, black, #1E2022)"}}>
            <Typography variant="h4" className="text-center text-black font-bold text-white"> Frontend </Typography>
          </div>

          <div className=" w-11/12 m-auto h-5/6 grid grid-cols-3   gap-3 overflow-auto hide-scrollbar " >
            {
              libraries.map((library, index) => {
                return(
                <div key={library.name} className="h-32 mt-2  overflow-hidden  rounded-[1vw] bg-white drop-shadow-lg">
                  <div className="h-4/6   flex justify-center place-items-center hover:scale-125 transition" onClick={() => visitDoc(library.documentation)}>
                      <img src={library.img}  style={{width : "60%", height : "60%"}} className=""/>
                  </div>

                  <div className="h-2/6   flex " style={{backgroundColor : "#F0F5F9"}}>
                      <div className="w-9/12  flex justify-center place-items-center">
                          <Typography variant="subtitle2" className=" font-bold  m-3 text-center  " style={{lineHeight  : "15px", color : "#191919", fontWeight: "bold"}}> {library.name} </Typography>
                      </div>

                      <div className="w-3/12  flex justify-center place-items-center">
                      <Checkbox 
                        onChange={(e) => {
                          checkBox(library.command, library.typescript);

                          setLibraries((prevLibraries) => 
                            prevLibraries.map((item, i) => 
                              i === index ? { ...item, check: e.target.checked } : item
                            )
                          );
                        }} 
                        checked={library.check} 
                        color="default"
                      />

                      </div>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
    )
}