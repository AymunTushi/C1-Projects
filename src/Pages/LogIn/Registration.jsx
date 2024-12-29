import React, { useState } from 'react';

const Registration = () => {
  const initialFormData = {

    ownerInfo: {
      name: '',
      designation: '',
      phones: [''], 
      email: '',
    },
    billingContact: {
      name: '',
      designation: '',
      phones: [''], 
      email: '',
    },
    technicalContact: {
      name: '',
      designation: '',
      phones: [''], 
      email: '',
    },
  };

const [formData, setFormData]=useState(initialFormData)
const [errors, setErrors] = useState({})

const handleChange=(e,section,field,index=null)=> {
  const {value}=e.target;

  setFormData((prev) => {
    const updateSection={...prev[section]};
    if(field==="phones"){
      updateSection.phones[index]=value
    } else {
      updateSection[field]=value
    }
    return {...prev, [section]:updateSection}
  });

  setErrors((prev)=> ({
    ...prev,
    [section]: {
      ...prev[section],
      [field]:index!==null? null : '',
    },
  }))
}

const addPhoneField = (section) => {
  const lastPhone = formData[section].phones.slice(-1)[0];
  if (!lastPhone.trim()) {
    alert("Please fill the last phone field before adding another.");
    return;
  }
  setFormData((prev) => ({
    ...prev,
    [section]: {
      ...prev[section],
      phones: [...prev[section].phones, ""],
    },
  }));
};


const removePhoneField=(section)=> {
  setFormData((prev) =>({
    ...prev,
    [section]: {
      ...prev[section],
      phones:prev[section].phones.slice(0,-1),
    },
  }))
};

const validateForm=()=>{
  const newErrors= {}

  const validateSection=(section)=> {
    const sectionErrors = {}

     const phoneRegex = /^(?:\+8801|01)[3-9][0-9]{8}$/;

    if(!formData[section].name) {
      sectionErrors.name='Name is required'
    }
    if(!formData[section].designation) {
      sectionErrors.designation='Designation is required'
    }
    if (formData[section].phones.some((phone) => !phone || !phoneRegex.test(phone))) {
      sectionErrors.phones = 'Please enter a valid phone number';
    }
    
    if(!formData[section].email) {
      sectionErrors.email='Email is required'
    }
    return sectionErrors
    
  }

  newErrors.ownerInfo=validateSection('ownerInfo')
  newErrors.billingContact=validateSection('billingContact')
  newErrors.technicalContact=validateSection('technicalContact')

  setErrors(newErrors)
  return(
    !newErrors.ownerInfo.name &&
    !newErrors.ownerInfo.designation &&
    !newErrors.ownerInfo.phones &&
    !newErrors.ownerInfo.email &&

    !newErrors.billingContact.name &&
    !newErrors.billingContact.designation &&
    !newErrors.billingContact.phones &&
    !newErrors.billingContact.email &&

    !newErrors.technicalContact.name &&
    !newErrors.technicalContact.designation &&
    !newErrors.technicalContact.phones &&
    !newErrors.technicalContact.email 
  )

}
 
const handleSubmit =(e)=> {
  e.preventDefault()

  if(validateForm()){
  console.log("Form submitted:", formData);
  setFormData(initialFormData)
  alert('Form submitted successfully')
  } else {
  alert('Please fix the error before submitting')

  }
  // setFormData(initialFormData)
};

const renderPhoneFields=(phones, section)=> (
  phones.map((phone, index)=>(
    <div key={index} className="mb-3">
      {/* <label htmlFor={`${section}-phone`} className="form-label">
        Phone {index+1}
      </label> */}
      <input type='text' id={`${section}-phone-${index+1}`} className='form-control' placeholder='Enter phone number'  value={phone}
      onChange={(e)=> handleChange(e,section,'phones',index)}
      />
      {errors[section]?.phones && index === phones.length - 1 && (
          <small className="text-danger">{errors[section].phones}</small>
        )}
    </div>
  ))
)

const renderError = (section, field) => {
  return errors[section]?.[field] ? (
    <small className="text-danger">{errors[section][field]}</small>
  ) : null;
};

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Owner's Information */}
        <div className="row g-3">
          <h3>Owner's Information</h3>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control" id='owner-name'
              placeholder="Enter your name"
              value={formData.ownerInfo.name}
              name="name"
              onChange={(e) => handleChange(e, 'ownerInfo','name')}
              
            />
             {renderError('ownerInfo', 'name')}
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <select
              className="form-select" id='owner-designation'
              value={formData.ownerInfo.designation}
              name="designation"
              onChange={(e) => handleChange(e, 'ownerInfo', 'designation')}
            >
              <option value="" disabled>
                Select your designation
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="tester">Tester</option>
            </select>
            {renderError('ownerInfo', 'designation')}
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            {renderPhoneFields(formData.ownerInfo.phones, 'ownerInfo')}
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={() => addPhoneField('ownerInfo')}
              >
                Add Phone
              </button>
              {formData.ownerInfo.phones.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removePhoneField('ownerInfo')}
                >
                  Remove Phone
                </button>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email" id='owner-email'
              value={formData.ownerInfo.email}
              name="email"
              onChange={(e) => handleChange(e, 'ownerInfo','email')}
              
            />
             {renderError('ownerInfo', 'email')}
          </div>
        </div>

         {/* Billing Contact */}
         <div className="row g-3" style={{marginTop:'1rem'}}>
          <h3>Billing Contact</h3>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id='billing-name'
              value={formData.billingContact.name}
              name="id='owner-name'name"
              onChange={(e) => handleChange(e, 'billingContact','name')}
              
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <select
              className="form-select"
              value={formData.billingContact.designation}
              id='billing-designation'
              name="designation"
              onChange={(e) => handleChange(e, 'billingContact', 'designation')}
            >
              <option value="" disabled>
                Select your designation
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            {renderPhoneFields(formData.billingContact.phones, 'billingContact')}
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={() => addPhoneField('billingContact')}
              >
                Add Phone
              </button>
              {formData.billingContact.phones.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removePhoneField('billingContact')}
                >
                  Remove Phone
                </button>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              id='billing-email'
              value={formData.billingContact.email}
              name="email"
              onChange={(e) => handleChange(e, 'billingContact','email')}
              
            />
          </div>
        </div>


 {/* Technical Contact */}
 <div className="row g-3" style={{marginTop:'1rem'}}>
          <h3>Technical Contact</h3>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id='technical-name'
              value={formData.technicalContact.name}
              name="id='owner-name'name"
              onChange={(e) => handleChange(e, 'technicalContact','name')}
              
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <select
              className="form-select"
              value={formData.technicalContact.designation}
              id='technical-designation'
              name="designation"
              onChange={(e) => handleChange(e, 'technicalContact', 'designation')}
            >
              <option value="" disabled>
                Select your designation
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="tester">Tester</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone</label>
            {renderPhoneFields(formData.technicalContact.phones, 'technicalContact')}
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={() => addPhoneField('technicalContact')}
              >
                Add Phone
              </button>
              {formData.technicalContact.phones.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removePhoneField('technicalContact')}
                >
                  Remove Phone
                </button>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              id='technical-email'
              value={formData.technicalContact.email}
              name="email"
              onChange={(e) => handleChange(e, 'technicalContact','email')}
              
            />
          </div>
        </div>
        {/* Repeat similar structure for Billing Contact and Technical Contact */}

        {/* Submit Button */}
        <div className="mt-4 text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
