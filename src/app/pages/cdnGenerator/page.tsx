"use client"
import Checkbox from '@mui/material/Checkbox';
import { cdnData } from './cdn/cdn';
import useCdnStore from '@/app/store/cdnStore';
import {Typography} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

export default function CdnGenerator()
{
    const cdn = useCdnStore((state) => state.cdn)
    const setCdn = useCdnStore((state) => state.setCdn)
    const getCdn = useCdnStore((state) => state.getCdn)

    const [isCopied, setIsCopied] = useState(false);

    const visitDoc = (doc: string) => {
        window.open(doc, '_blank', 'noopener noreferrer');
    }

    const copy = (commandText : string) => {
        navigator.clipboard.writeText(commandText)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 1500)
    }
    
    

    return(
        <div>
            <br />
            <div className="m-auto border w-5/6 h-96 bg-gray-200 drop-shadow-lg">
                <div className="m-auto border h-16 bg-black drop-shadow-lg flex place-items-center">
                    <Typography variant="h4" className={`font-bold text-white  ms-3     `}> <strong> CDN </strong> </Typography>
                </div>
                <div className="h-80 overflow-auto bg-blue-100 grid grid-cols-1">
                    {
                        cdnData.map((cdn) => {
                            return(
                                <div key={cdn.name} className="h-28 flex justify-center  container bg-gray-200" >

                                    <div className="border border-stone-400 container bg-white flex justify-center items-center overflow-hidden  " style={{ width: "20%" }}>
                                        <img src={cdn.img} alt="" className="h-full w-full object-contain scale-75 transition hover:scale-100" onClick={() => visitDoc(cdn.documentation)} />
                                    </div>

                                    <div className="border border-stone-400 container  hidden  md:flex  items-center justify-center text-center font-bold text-3xl" style={{ width: "50%" }}>
                                        <h1>{cdn.name}</h1>
                                    </div>

                                    <div className="border border-stone-400 container p-2 overflow-auto hide-scrollbar" style={{ width: "80%" }}>
                                        <p>
                                        <span className="font-bold hidden sm:inline">Description:</span> <span className="text-xs text-gray-800"> {cdn.description} </span>
                                        </p>
                                    </div>

                                    <div className="border border-stone-400 container flex justify-center place-items-center" style={{ width: "20%" }}>
                                        <Checkbox size="large" onChange={() => setCdn(cdn.cdn)}/>
                                    </div>

                                </div>
                        
                            )
                        })
                    }
                </div>
            </div>

            <div className="m-auto border h-16 w-5/6 bg-black drop-shadow-lg mt-5 flex justify-end" > 
                <div className='flex justify-center place-items-center text-white gap-1  scale-75 hover:bg-stone-900 p-5 rounded' style={{transition : ".5s"}} onClick={() => copy(getCdn())}>
                    {(isCopied) ? <CheckIcon /> : <ContentCopyIcon /> }
                    <Typography variant="h6" className='font-bold'> Copy </Typography>
                </div>
            </div>
            <div className="m-auto w-5/6 h-80 border   drop-shadow-lg bg-gray-200 overflow-auto " >
                <textarea value={getCdn()} className=' h-full bg-gray-300  text-xs' style={{ width : "400%"}} readOnly  ></textarea>
            </div>
            
            <br /><br />
        </div>
    )
}


