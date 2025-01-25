"use client"
import Checkbox from '@mui/material/Checkbox';
import { cdn } from './cdn/cdn';

export default function CdnGenerator()
{


    let visitDoc = (doc: string) => {
        window.open(doc, '_blank', 'noopener noreferrer');
      }

    return(
        <div>
            <br />
            <div className="m-auto border w-5/6 h-96 bg-gray-200 drop-shadow-lg">
                <div className="m-auto border h-16 bg-black drop-shadow-lg">

                </div>
                <div className="h-80 overflow-auto bg-blue-100 grid grid-cols-1">
                    {
                        cdn.map((cdn) => {
                            return(
                                <div key={cdn.name} className="h-28 flex justify-center  container bg-gray-200" >

                                    <div className="border border-stone-400 container bg-white flex justify-center items-center overflow-hidden " style={{ width: "20%" }}>
                                        <img src={cdn.img} alt="" className="h-full w-full object-contain scale-75 transition hover:scale-100" onClick={() => visitDoc(cdn.documentation)} />
                                    </div>

                                    <div className="border border-stone-400 container flex items-center justify-center text-center font-bold text-3xl" style={{ width: "50%" }}>
                                        <h1>{cdn.name}</h1>
                                    </div>

                                    <div className="border border-stone-400 container p-2 overflow-auto hide-scrollbar" style={{ width: "80%" }}>
                                        <p>
                                        <span className="font-bold">Description:</span> <span className="text-xs text-gray-800"> {cdn.description} </span>
                                        </p>
                                    </div>

                                    <div className="border border-stone-400 container flex justify-center place-items-center" style={{ width: "20%" }}>
                                        <Checkbox size="large" />
                                    </div>

                                </div>
                        
                            )
                        })
                    }


                 

                   

                </div>
            </div>
            
        </div>
    )
}