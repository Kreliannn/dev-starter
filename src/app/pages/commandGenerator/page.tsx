
"use client"
import useCommandStore from '@/app/store/commandStore';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
import FrontendSection from './components/frontend';
import BackendSection from './components/backend';
import DevDependecies from './components/dev-dependencies';
import Navbar from '@/app/navbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Home() {
  let command = useCommandStore((state) => state.command)
  let getCommand = useCommandStore((state) => state.getCommand)
  console.log(getCommand())
  return (
    <div>
   
      <Navbar />
      <br /> <br /> 
      <div className='container  m-auto grid grid-cols- gap-5 sm:grid-cols-3'>
        <BackendSection />
        <FrontendSection />
        <DevDependecies />
      </div>

      <br /><br /><br /><br /><br /> <br />

      <div className='w-11/12  drop-shadow-lg fixed rounded overflow-hidden  ' style={{bottom : "3%", left: "3%"}}>
          <div className="container-fluid bg-black flex justify-end h-12">
            <div className='flex justify-center place-items-center text-white gap-1 m-2 scale-75'>
                <ContentCopyIcon /> 
                <Typography variant="h6" className='font-bold'> Copy </Typography>
            </div>
          </div>
          <div className="container-fluid  h-12 " style={{backgroundColor : "#141414"}}>
            <h1 className="p-3  text-bold" style={{color : "#EEEEEE"}}> {getCommand()} </h1>
          </div>
      </div>
      
    </div>
  );
}

