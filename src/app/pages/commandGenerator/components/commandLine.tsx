"use client"
import useCommandStore from '@/app/store/commandStore';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function CommandLine()
{

    let [isCopied, setIsCopied] = useState(false);

    let command = useCommandStore((state) => state.command)
    let getCommand = useCommandStore((state) => state.getCommand)
    
    let copy = (commandText : string) => {
        navigator.clipboard.writeText(commandText)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1500)
    }

    return(
        <div className='w-11/12  drop-shadow-lg fixed rounded overflow-hidden  ' style={{bottom : "3%", left: "3%"}}>
            <div className="container-fluid bg-black flex justify-end h-12 ">
            <div className='flex justify-center place-items-center text-white gap-1  scale-75 hover:bg-stone-900 p-5 rounded' style={{transition : ".5s"}} onClick={() => copy(getCommand())}>
                {(isCopied) ? <CheckIcon /> : <ContentCopyIcon /> }
                <Typography variant="h6" className='font-bold'> Copy </Typography>
            </div>
            </div>
            <div className="container-fluid overflow-auto h-12 " style={{backgroundColor : "#1E2022"}}>
            <h1 className="p-3  text-bold" style={{color : "#C9D6DF"}}> {getCommand()} </h1>
            </div>
        </div>
    )
}