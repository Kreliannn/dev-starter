import { create } from "zustand"



type codes = {
    express : string,
    php : string
}

type template = {
    codes : codes,
    initialValue : (data: codes) => void,
    setExpress : (data: string) => void,
    setPhp : (data: string) => void,
}

let useCodeTemplateStore = create<template>((set) => ({
    codes : { express : "", php : ""},
    initialValue : (data: codes) => set((state) => ({ codes : data})),
    setExpress : (data) => set((state) => ({ codes : {express : data, php : state.codes.php}})),
    setPhp : (data) => set((state) => ({ codes : {express : state.codes.express , php : data}})),
}))

export default useCodeTemplateStore;