import { configureStore } from "@reduxjs/toolkit";
import formReducer from './features/formData/formDataSlice';
import bandwidthReqModalReducer from "./features/modals/bandwidthReqSlice";


const store=configureStore({
    reducer: {
        form: formReducer,
        bandwidthReqModal:bandwidthReqModalReducer,
    }
})

export default store;