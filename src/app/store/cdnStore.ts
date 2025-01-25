import { create } from "zustand"

type cdn = {
    cdn : string[],
    setCdn : (data: string) => void,
    getCdn : () => string[]
}

let useCdnStore = create<cdn>((set, get) => ({
    cdn : [],
    setCdn : (data) => {
        set((state) => {
            let arr = state.cdn
            let newArr;
            if(arr.includes(data))
                newArr = arr.filter((syntax) => syntax != data)
            else
                newArr = [...arr, data]
            return { cdn : newArr }
        })
    },
    getCdn : () => get().cdn
}))