import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [] 
}

const PasteSlice = createSlice({
    name:'Paste',
    initialState,
    reducers:{
        addToPastes:(state,action) => {

        },
        updatetoPastes:(state,action) => {

        },
        resetAllPastes:(state,action) => {

        },
        removeFromPastes:(state,action) => {

        }
    }
})

export const {addToPastes,updatetoPastes,resetAllPastes,removeFromPastes} = PasteSlice.actions
export default PasteSlice
