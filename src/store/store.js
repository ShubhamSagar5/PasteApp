import { configureStore } from "@reduxjs/toolkit"
import PasteReducer from '../store/PasteSlice'

const PasteStore = configureStore({
    reducer:{
        paste:PasteReducer
    }
})

export default PasteStore