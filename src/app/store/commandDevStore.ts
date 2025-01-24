import {create} from "zustand" 

type commandType = {
    commandDev : string[],
    setCommandDev : (data: string) => void,
    getCommandDev : () => string
}

let useCommandDevStore = create<commandType>((set, get) => ({
    commandDev : [],
    setCommandDev : (data) => {
        set((state) => {
            let newCommands;
            let commands = state.commandDev
            if(commands.includes(data))
                newCommands = commands.filter((elem) => elem != data)
            else
                newCommands = [...commands, data]
            return {
                commandDev : newCommands
            }
        })  
    },
    getCommandDev : () => get().commandDev.join(" ")
}))

export default useCommandDevStore