"use client"
import { tempaltesData } from "./codes/codes"
import { useEffect } from "react"
import useCodeTemplateStore from "@/app/store/codeTemplatesStore"
import {Typography} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function CodeTemplate()
{
    const [isCopied, setIsCopied] = useState(false);

    const Template = useCodeTemplateStore((state) => state.template)
    const initialValue = useCodeTemplateStore((state) => state.initialValue)
   
    useEffect(() => {
        initialValue(tempaltesData)

    }, [])

    const copy = (commandText : string) => {
        navigator.clipboard.writeText(commandText)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1500)
    }
    
    
    return(
        <div>
            <br /><br />
            {
                Template?.map((template) => {
                    return(
                        <div key={template.name}>
                        <div className="container m-auto h-96 border bg-stone-200 drop-shadow-lg">
                            <div className="container-fluid h-16 grid grid-cols-2" style={{backgroundImage: "linear-gradient(to bottom, black, #1E2022)"}}>
                                <div className="  flex place-items-center ms-5   ">
                                    <Typography variant="h4" className={`font-bold ${template.color}`}> <strong>{template.name}</strong> </Typography>
                                </div>
                                <div className="  flex justify-end">
                                    <div className='flex justify-center place-items-center text-white gap-1  scale-75 hover:bg-stone-200 hover:text-black p-4 rounded' style={{transition : ".5s"}} onClick={() => copy(template.code)}>
                                        {(isCopied) ? <CheckIcon /> : <ContentCopyIcon /> }
                                        <Typography variant="h6" className='font-bold'> Copy </Typography>
                                    </div>
                                </div>
                            </div>
                            <textarea className="w-full h-full text-stone-700   p-2 text-lg p-5" placeholder="please wait......." value={template.code} readOnly></textarea>
                        </div>
                        <br /> <br /> <br /><br />
                        </div >
                    )
                })
            }
            
            
        </div>
    )
}