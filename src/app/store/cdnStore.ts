import { create } from "zustand"

type cdn = {
    cdn : string[],
    setCdn : (data: string) => void,
    getCdn : () => string
}

const useCdnStore = create<cdn>((set, get) => ({
    cdn : [],
    setCdn : (data) => {
        set((state) => {
            const arr = state.cdn
            let newArr;
            if(arr.includes(data))
                newArr = arr.filter((syntax) => syntax != data)
            else
                newArr = [...arr, data]
            return { cdn : newArr }
        })
    },
    getCdn : () => get().cdn.join(` `)
}))


export default useCdnStore