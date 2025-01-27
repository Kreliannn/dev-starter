"use client"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { checkboxClasses } from "@mui/material"

export default function Test()
{
    let box = useRef(null)

    useEffect(() => {
        gsap.fromTo(
          box.current,         // Target element
          { x: -100, opacity : 0},         // Starting position
          { x: 100, opacity : 1, duration: .5 } // Ending position and animation duration
        );
      }, []);

    return(
        <div>
            
            <div ref={box} className="bg-red-500 h-80 w-80 5">

            </div>

        </div>
    )


}