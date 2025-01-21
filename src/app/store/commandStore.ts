import { create } from "zustand";

type commandType = {
    command : string[],
    setCommand : (data: string) => void,
    getCommand : () => string
}

const useCommandStore = create<commandType>((set, get) => ({
    command : ["axios", "zustand"],
    setCommand : (data) => {
        set((state) => {
            let newCommands;
            let commands = state.command
            if(commands.includes(data))
                newCommands = commands.filter((elem) => elem != data)
            else
                newCommands = [...commands, data]
            return {
                command : newCommands
            }
        })  
    },
    getCommand : () =>  "npm " + get().command.join(" ")
    
})) 



export default useCommandStore