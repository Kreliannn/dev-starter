import { express } from "./codes/express"



export default function CodeTemplate()
{


    return(
        <div>
            <div className="mt-5 container m-auto h-96 border bg-stone-200 drop-shadow-lg">
                <div className="container-fluid h-16 " style={{backgroundImage: "linear-gradient(to bottom, black, #1E2022)"}}>
                    
                </div>
                <textarea className="w-full h-full   p-2 text-lg p-5" placeholder="Enter your code here..." value={express}></textarea>
            </div>
        </div>
    )
}