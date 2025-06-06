"use client"
import useCommandStore from '@/app/store/commandStore';
import useCommandDevStore from '@/app/store/commandDevStore';
import {Typography,Switch, Button} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CommandLine({ toggle ,setToggle } : { toggle : boolean, setToggle :React.Dispatch<React.SetStateAction<boolean>> } )
{
    const router = useRouter()

    const [isCopied, setIsCopied] = useState(false);
    
    const command = useCommandStore((state) => state.command)
    const getCommand = useCommandStore((state) => state.getCommand)
    const clearCommand = useCommandStore((state) => state.clearCommand)

    const commandDev = useCommandDevStore((state) => state.commandDev)
    const getCommandDev = useCommandDevStore((state) => state.getCommandDev)
    
    const copy = (commandText : string) => {
        navigator.clipboard.writeText(printCommand(getCommand(), getCommandDev()))
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1500)
    }

   

    const printCommand = (command: string, commandDev: string): string => {
        const seperator = (command != "" && commandDev != "") ? "; npm install" : "";
        const devDependecies = (commandDev != "") ? " --save-dev " : "";
        return "npm install " + command + seperator + devDependecies  + commandDev
    }

    return(
        <div className='w-11/12  drop-shadow-lg fixed rounded overflow-hidden  ' style={{bottom : "3%", left: "3%"}}>
            <div className="container-fluid bg-black flex justify-between h-12 ">
            
                <div className='flex justify-center place-items-center text-white gap-1  scale-75  p-1 rounded' style={{transition : ".5s"}} >
                    
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
                    className='w-10 h-10 overflow-hidden rounded'
                    />
                    <Switch 
                        checked={toggle} 
                        onChange={(e) => {
                            setToggle(e.target.checked)
                            clearCommand()
                        }}
                        color="primary" 
                        className='bg-gradient-to-r from-yellow-500 to-blue-500 rounded'
                    />
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                    className='w-10 h-10 overflow-hidden rounded'
                    />
                    
                </div>
                    
                {/*second div*/}
                <div className='flex justify-end place-items-center text-white gap-1  scale-75 hover:bg-stone-900 p-5 rounded' style={{transition : ".5s"}} onClick={() => copy(getCommand())}>
                    {(isCopied) ? <CheckIcon /> : <ContentCopyIcon /> }
                    <Typography variant="h6" className='font-bold'> Copy </Typography>
                </div>
            
            </div>
            
            <div className="container-fluid overflow-auto h-12 " style={{backgroundColor : "#1E2022"}}>
            <h1 className="p-3  font-bold text-sm   tracking-wide" style={{color : "#C9D6DF"}}> 
            {
                printCommand(getCommand(), getCommandDev())
            }
            </ h1>
            </div>
        </div>
    )
}