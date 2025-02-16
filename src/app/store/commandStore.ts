import { create } from "zustand";

type commandType = {
    command : string[],
    setCommand : (data: string) => void,
    getCommand : () => string,
    clearCommand : () => void
}

const useCommandStore = create<commandType>((set, get) => ({
    command : [],
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
    getCommand : () =>  get().command.join(" "),
    clearCommand : () => set(() => ({ command : []}))
    
})) 



export default useCommandStore