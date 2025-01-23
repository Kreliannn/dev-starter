
"use client"
import useCommandStore from '@/app/store/commandStore';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
import FrontendSection from './components/frontend';
import BackendSection from './components/backend';



export default function Home() {
  let command = useCommandStore((state) => state.command)
  let getCommand = useCommandStore((state) => state.getCommand)
  console.log(getCommand())
  return (
    <div>
      <br /> <br /> <br /> <br /><br /> <br />

      <div className='container  m-auto grid grid-cols- gap-5 sm:grid-cols-3'>
        <BackendSection />
        <FrontendSection />
       
      </div>

      <div className='w-11/12  drop-shadow-lg fixed ' style={{bottom : "3%", left: "3%"}}>
          <div className="container-fluid bg-black flex justify-end h-12">
            <Button variant="outlined"> COPY </Button>
          </div>
          <div className="container-fluid bg-stone-900  h-12">
            <h1 className="p-3 bg-stone-900  text-bold" style={{color : "#EEEEEE"}}> {getCommand()} </h1>
          </div>
      </div>
      
    </div>
  );
}

