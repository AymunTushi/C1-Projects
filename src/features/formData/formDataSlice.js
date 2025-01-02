import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    address: '',
    ownerName: '',
    billingName: '',
    technicalName: '',
    ownerPhone: '',
    billingPhone: '',
    technicalPhone: '',
    ownerEmail: '',
    billingEmail:'',
    technicalEmail:'',
    ownerDesignation: '',
    billingDesignation: '',
    technicalDesignation: '',
    phone: '',
    password: '',
    otp: '',
  },
  fileFields: [{ file: null }],
  phoneFields: {
    owner: [''],
    billing: [''],
    technical: [''],
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    
    setFormData: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value; 
    },

    addFileField: (state) => {
      state.fileFields.push({ file: null });
    },
    removeFileField: (state, action) => {
      state.fileFields = state.fileFields.filter((_, idx) => idx !== action.payload);
    },
    setFile: (state, action) => {
      const { index, file } = action.payload;
      state.fileFields[index].file = file;
    },

    addPhoneField: (state, action) => {
      const { section } = action.payload;
      state.phoneFields[section].push('');
    },
    removePhoneField: (state, action) => {
      const { section, index } = action.payload;
      state.phoneFields[section] = state.phoneFields[section].filter((_, i) => i !== index);
    },
    setPhone: (state, action) => {
      const { section, index, value } = action.payload;
      state.phoneFields[section][index] = value;
    },

    resetForm: () => initialState,
  },
});

export const {
  setFormData,
  addFileField,
  removeFileField,
  setFile,
  addPhoneField,
  removePhoneField,
  setPhone,
  resetForm
} = formSlice.actions;

export default formSlice.reducer;
