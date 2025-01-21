import { create } from "zustand";

type commandType = {
    command : string[],
    setCommand : (data: string) => void
    getCommand : () => string
}

const useCommandStore = create<commandType>((set, get) => ({
    command : ["react-query", "typescript", "zustand"],
    setCommand : (data) => {
        set((state) => {
            let newCommands: string[]
            if(state.command.includes(data))
                newCommands = state.command.filter((element: string) => element != data)
            else
                newCommands = [...state.command, data]

            return { command : newCommands }
        })
    },
    getCommand : () => "npm install " + get().command.join(" ")
    
}))



export default useCommandStore