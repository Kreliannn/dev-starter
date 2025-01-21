"use client"
import useCommandStore from "./store/commandStore";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";

let choices = [
  "axios",
  "zustand",
  "react-query",
  "ts-node",
  "react"
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
            
            <div className="h-28 mt-2 border  ">
              <div className="h-4/6  border">

              </div>

              <div className="h-2/6  border">
                  
              </div>
            </div>

            <div className="h-16 mt-2 border">

            </div>

            <div className="h-16 mt-2 border">

            </div>  

            <div className="h-16 mt-2 border">

            </div>  

          </div>

          <div>
            
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


