import { createSlice } from "@reduxjs/toolkit";


const bandwidthReqModalSlice=createSlice({
    name:'bandwidthReqModal',
    initialState:{
        isOpen:false,     
    },
    reducers: {
        openModal: (state) => {
            state.isOpen=true;
        },
        closeModal: (state)=> {
            state.isOpen=false;
        }
    }
})

export const {openModal,closeModal}=bandwidthReqModalSlice.actions;
export default bandwidthReqModalSlice.reducer;