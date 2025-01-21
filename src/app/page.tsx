"use client"
import useCommandStore from "./store/commandStore";

export default function Home() {

  let command = useCommandStore((state) => state.command)
  let setCommand = useCommandStore((state) => state.setCommand)
  let getCommand = useCommandStore((state) => state.getCommand)

  console.log(getCommand())


  return (
    <div>
        <button
        onClick={()=>setCommand("zustand")}
        >
            click me
        </button>
    </div>
  );
}
