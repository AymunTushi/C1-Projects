import { configureStore } from "@reduxjs/toolkit";
import formReducer from './features/formData/formDataSlice'

const store=configureStore({
    reducer: {
        form: formReducer
    }
})

export default store;