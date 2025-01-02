import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { setFormData, addFileField, removeFileField, setFile, addPhoneField, removePhoneField, setPhone,resetForm } from '../../features/formData/formDataSlice';
import PhoneField from '../../Components/FieldType/PhoneField';

const Registration = () => {
  const dispatch = useDispatch();

  const { formData, fileFields, phoneFields } = useSelector(state => state.form);
  // console.log("Form Data:", formData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ field:name,value }));
  };

  const handleFileChange = (index, file) => {
    dispatch(setFile({ index, file }));
  };

  const handleAddFileField = () => {
    dispatch(addFileField());
  };

  const handleRemoveFileField = (index) => {
    dispatch(removeFileField(index));
  };

 
  const handleAddField = (section) => {
    dispatch(addPhoneField({ section }));
  };

  const handleRemoveField = (section, index) => {
    dispatch(removePhoneField({ section, index }));
  };

  const handleChangePhone = (section, index, value) => {
    dispatch(setPhone({ section, index, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Final Form Data:", formData); 

    dispatch(resetForm());
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="col-md-8 col-lg-10 col-xl-10">
            <div className="card" style={{ borderRadius: '10px' }}>
              <div className="card-body mt-2">
                <form onSubmit={handleSubmit}>
                  {/* Company Information */}
                  <div className="row mb-2">
                    <h3 className="text-left mb-2" style={{ fontSize: '1.2rem' }}>
                      <img src="./images/icons/presentation.png" alt="" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                      Company Information
                    </h3>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="company-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter company address"
                      />
                    </div>
                  </div>

                  {/* Owner's Information */}
                  <div className="row mt-2">
                    <h3 className="text-left" style={{ fontSize: '1.2rem' }}>
                      <img src="./images/icons/presentation.png" alt="" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                      Owner's Information
                    </h3>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="owner-name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="owner-name"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        placeholder="Enter full name as per trade license"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="owner-phone" className="form-label">Phone</label>
                      <PhoneField
                        section="owner"
                        phoneFields={phoneFields.owner}
                        onAddField={handleAddField}
                        onRemoveField={handleRemoveField}
                        onChange={handleChangePhone}
                      />
                    </div>
                  </div>

                  <div className="row">
              {/* Designation Field */}
              <div className="col-md-6">
                <label htmlFor="owner-designation" className="form-label">
                  Designation
                </label>
                <select
        className="form-select"
        id="owner-designation"
        name="ownerDesignation"
        onChange={handleInputChange}

      >
        <option value="">Select designation</option>
        <option value="manager">Manager</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="tester">Tester</option>
      </select>
                
              </div>

              {/* Email Field */}
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="owner-email"
                  name="ownerEmail"
                  value={formData.email}
                  placeholder="Enter email"
                  onChange={handleInputChange}

                />
              </div>
            </div>

                  {/* Billing Information */}
                  <div className="row mt-2">
                    <h3 className="text-left" style={{ fontSize: '1.2rem' }}>
                      <img src="./images/icons/presentation.png" alt="" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                      Billing Contact
                    </h3>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="billing-name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="billing-name"
                        name="billingName"
                        value={formData.billingName}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="billing-phone" className="form-label">Phone</label>
                      <PhoneField
                        section="billing"
                        phoneFields={phoneFields.billing}
                        onAddField={handleAddField}
                        onRemoveField={handleRemoveField}
                        onChange={handleChangePhone}
                      />
                    </div>
                  </div>

                  <div className="row">
              {/* Designation Field */}
              <div className="col-md-6">
                <label htmlFor="billing-designation" className="form-label">
                  Designation
                </label>
                <select
        className="form-select"
        id="billing-designation"
        name="billingDesignation"
        onChange={handleInputChange}

      >
        <option value="">Select designation</option>
        <option value="manager">Manager</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="tester">Tester</option>
      </select>
                
              </div>

              {/* Email Field */}
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="billing-email"
                  name="billingEmail"
                  value={formData.billingEmail}
                  placeholder="Enter email"
                  onChange={handleInputChange}

                />
              </div>
            </div>

            {/* Technical Information */}
            <div className="row mt-2">
                    <h3 className="text-left" style={{ fontSize: '1.2rem' }}>
                      <img src="./images/icons/presentation.png" alt="" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                      Technical Contact
                    </h3>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="technical-name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="technical-name"
                        name="technicalName"
                        value={formData.technicalName}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="technical-phone" className="form-label">Phone</label>
                      <PhoneField
                        section="technical"
                        phoneFields={phoneFields.technical}
                        onAddField={handleAddField}
                        onRemoveField={handleRemoveField}
                        onChange={handleChangePhone}
                      />
                    </div>
                  </div>

                  <div className="row">
              {/* Designation Field */}
              <div className="col-md-6">
                <label htmlFor="technical-designation" className="form-label">
                  Designation
                </label>
                <select
        className="form-select"
        id="technical-designation"
        name="technicalDesignation"
        onChange={handleInputChange}

      >
        <option value="">Select designation</option>
        <option value="manager">Manager</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="tester">Tester</option>
      </select>
                
              </div>

              {/* Email Field */}
              <div className="col-md-6 mb-3">
                <label htmlFor="technical-email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="technical-email"
                  name="technicalEmail"
                  value={formData.technicalEmail}
                  placeholder="Enter email"
                  onChange={handleInputChange}

                />
              </div>
            </div>

                  {/* File Upload */}
                  <div className="row mt-4">
                    <h3 className="text-left" style={{ fontSize: '1.2rem' }}>
                      <img src="./images/icons/presentation.png" alt="" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                      Upload Files
                    </h3>
                    {fileFields.map((field, index) => (
                      <div className="input-group mt-2" key={index}>
                        <input
                          type="file"
                          className="form-control"
                          id={`fileUpload${index}`}
                          name={`fileUpload${index}`}
                          onChange={(e) => handleFileChange(index, e.target.files[0])}
                        />
                        {fileFields.length > 1 && (
                          <span
                            className="input-group-text"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleRemoveFileField(index)}
                          >
                            <i className="fas fa-minus" style={{ fontSize: '18px' }}></i>
                          </span>
                        )}
                        {index === fileFields.length - 1 && (
                          <span
                            className="input-group-text"
                            style={{ cursor: 'pointer' }}
                            onClick={handleAddFileField}
                          >
                            <i className="fas fa-plus" style={{ fontSize: '18px' }}></i>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Log-In Phone Number */}
                  <div className="row mt-4">
                    <h3 className="text-left" style={{ fontSize: '1.2rem' }}>
                      <img src="./images/icons/presentation.png" alt="" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                      Login Credential
                    </h3>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div class="col-md-6">
          <label for="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-control" placeholder="Enter password" />
        </div>
                  </div>

                  {/* Submit Button */}
                  <div className="d-flex justify-content-center mt-4 mb-2">
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-pill btn-info-gradien"
                        style={{
                         backgroundImage: 'linear-gradient(to right, rgb(61 133 169) 0%, rgb(41 119 149) 51%, rgb(67 113 141) 100%)',
                         border:' none', color: '#fff', transition: 'all 0.3s ease'}}         
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
