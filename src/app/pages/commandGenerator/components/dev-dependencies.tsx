import { Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import useCommandStore from "@/app/store/commandStore";
import useCommandDevStore from "@/app/store/commandDevStore";

const dev = [
  { name : "typescript", command : "typescript", img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png", documentation : "https://www.typescriptlang.org/docs/" },
  { name : "nodemon", command : "nodemon", img : "https://static-00.iconduck.com/assets.00/nodemon-icon-1800x2048-cec0ndk1.png", documentation : "https://github.com/remy/nodemon#nodemon"},
  { name : "eslint", command : "eslint", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNtywX99sgeYPkxEOMr1K2LAaTMeoEE_Ysg&s", documentation : "https://eslint.org/docs/latest/use/getting-started"},
  { name : "ts-node", command : "ts-node", img : "https://images.seeklogo.com/logo-png/43/3/ts-node-logo-png_seeklogo-434981.png?v=1957829453043056632",  documentation : "https://www.npmjs.com/package/ts-node"},
  { name : "@types/ express", command : "@types/express", img : "https://media.licdn.com/dms/image/D5612AQEIyYUSSkS0Rg/article-cover_image-shrink_720_1280/0/1680742409585?e=2147483647&v=beta&t=zo2zYXAkLe4guONarPO89_GUvRCgdcoc1oLIPxNMVqE",  documentation : "https://www.npmjs.com/package/@types/express"},
  { name : "@types/ react", command : "@types/react", img : "https://miro.medium.com/v2/resize:fit:800/0*CBjisl422hUyLxiG.png",  documentation : "https://www.npmjs.com/package/@types/react"},
]


  
export default function DevDependecies()
{

   
    const setCommandDev = useCommandDevStore((state) => state.setCommandDev)
   

    const visitDoc = (doc: string) => {
      window.open(doc, '_blank', 'noopener noreferrer');
    }

    const checkBox = (command: string): void => {
      setCommandDev(command)
    }


    return(
        <div className="  h-96   rounded overflow-hidden drop-shadow-lg" style={{backgroundColor : "#e1e4e6"}}>
          <div className=" h-1/6 flex justify-center place-items-center" style={{backgroundImage: "linear-gradient(to bottom, black, #1E2022)"}}>
            <Typography variant="h4" className="text-center text-white font-bold"> Dev-Dependecies </Typography>
          </div>

          <div className=" w-11/12 m-auto h-5/6 grid grid-cols-3   gap-3 overflow-auto hide-scrollbar inset-shadow-sm" >
            {
              dev.map((library) => {
                return(
                <div key={library.name} className="h-32 mt-2  overflow-hidden  rounded-[1vw] bg-white drop-shadow-lg">
                  <div className="h-4/6   flex justify-center place-items-center hover:scale-125 transition" >
                      <img src={library.img}  style={{width : "60%", height : "60%"}} className="" onClick={() => visitDoc(library.documentation)} />
                  </div>

                  <div className="h-2/6   flex " style={{backgroundColor : "#F0F5F9"}}>
                      <div className="w-9/12  flex justify-center place-items-center">
                          <Typography variant="subtitle2"  className=" font-bold text-sm/6 m-3 text-center " style={{lineHeight  : "15px", color : "#191919", fontWeight: "bold"}}> {library.name} </Typography>
                      </div>

                      <div className="w-3/12  flex justify-center place-items-center">
                        <Checkbox  onChange={() => checkBox(library.command)} color="default"/>
                      </div>
                  </div>
                </div>
                )
              })
            }
            <br />
          </div>
        </div>
    )
}