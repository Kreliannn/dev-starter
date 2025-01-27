import { create } from "zustand"

type obj = {
    name : string,
    color : string,
    code : string
}

type tempType = {
    template : obj[],
    initialValue : (data: obj[]) => void
}

const useCodeTemplateStore = create<tempType>((set) => ({
    template : [],
    initialValue : (data) => set({ template : data})
}))



export default useCodeTemplateStore;