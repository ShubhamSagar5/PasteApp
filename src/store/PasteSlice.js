import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [] 
}

const PasteSlice = createSlice({
    name:'Paste',
    initialState,
    reducers:{
        addToPastes:(state,action) => {
            const paste = action.payload 
            if(paste.title =='' || paste.content == ''){
                toast.error("Both Filed Required")
                return
            }
           const check = state.pastes.some((item)=>{
           return item.title === paste.title
            })
            if(!check){
                
                  state.pastes.push(paste)
            localStorage.setItem('pastes',JSON.stringify(state.pastes))
            toast.success("Paste Create Successfully")
            }else{
                toast.error("Your title is already exsits!!")
            }
           
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
export default PasteSlice.reducer
