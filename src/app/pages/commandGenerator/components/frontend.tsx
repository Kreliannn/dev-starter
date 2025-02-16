"use client"
import { Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import useCommandStore from "@/app/store/commandStore";
import { useEffect, useState } from "react";

const frontend = [
  {  check : false, name : "tailwind", command : "tailwindcss", typescript :"", img : "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png", documentation : "https://tailwindcss.com/docs/installation/using-vite" },
  {  check : false, name : "bootstrap", command : "bootstrap", typescript :"", img : "https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png", documentation : "https://getbootstrap.com/docs/4.1/getting-started/introduction/" },
  {  check : false, name : "material ui", command : "@mui/material @emotion/react @emotion/styled ", typescript :"@types/react @types/react-dom", img : "https://pbs.twimg.com/profile_images/1798056830041788417/HIapkjDx_400x400.jpg", documentation : "https://mui.com/material-ui/getting-started/" },
  {  check : false, name : "zustand", command : "zustand", typescript :"@types/zustand", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s", documentation : "https://zustand.docs.pmnd.rs/getting-started/introduction" },
  {  check : false, name : "react query", command : "@tanstack/react-query", typescript :"@types/react-query", img : "https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png", documentation : "https://tanstack.com/query/latest/docs/framework/react/overview" },
  {  check : false, name : "axios", command : "axios", typescript :"@types/axios", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqynh9tnAbPVgXfQrvD8vLbktM7S9PPEfeuA&s", documentation : "https://axios-http.com/docs/intro" },
  {  check : false, name : "sweet alert 2", command : "sweetalert2", typescript :"@types/sweetalert2", img : "https://rohit-chouhan.gallerycdn.vsassets.io/extensions/rohit-chouhan/sweetalert2-snippet/1.1.2/1625627316335/Microsoft.VisualStudio.Services.Icons.Default", documentation : "https://sweetalert2.github.io/" },
  {  check : false, name : "MUI icons", command : "@mui/icons-material ", typescript :"@types/mui__icons-material", img : "https://blogs.purecode.ai/blogs/wp-content/uploads/2023/10/a6aca62b-5471-4921-ab9e-49f26a17b662.png", documentation : "https://mui.com/material-ui/material-icons/?srsltid=AfmBOopKB5oM361ukRLTjKvV1qYDn9hSraJ9yP9rpWUnkWopogmlczvc" },
  {  check : false, name : "redux", command : "redux", typescript :"@types/redux", img : "https://static-00.iconduck.com/assets.00/redux-icon-2048x1945-ahvhunxp.png", documentation : "https://redux.js.org/introduction/getting-started" },
  {  check : false, name : "SASS", command : "sass", typescript :"", img : "https://img1.daumcdn.net/thumb/C88x88@2x.fwebp.q85/?fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3exXT%2Fbtq520gWvWE%2FWOE39eK7JkpXKr5qbcJKK1%2Fimg.png", documentation : "https://sass-lang.com/documentation/" },
  {  check : false, name : "react router", command : "react-router-dom ", typescript :"@types/react-router-dom", img : "https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png", documentation : "https://reactrouter.com/home" },
  {  check : false, name : "framer motion", command : "framer-motion", typescript :" @types/framer-motion", img : "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", documentation : "https://motion.dev/docs/quick-start" },
  {  check : false, name : "Gsap", command : "gsap", typescript :"@types/gsap", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s", documentation : "https://gsap.com/cheatsheet" },
]


  
export default function FrontendSection({ toggle } : { toggle: boolean })
{
   const [libraries, setLibraries] = useState(frontend)

    const command = useCommandStore((state) => state.command)
    const setCommand = useCommandStore((state) => state.setCommand)

    console.log(libraries)

    
   
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