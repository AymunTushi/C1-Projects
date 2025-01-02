import React, { useState } from 'react'

const Login = () => {

const [formData, setFormData]=useState({})
const [showPassword, setShowPassword] = useState(false)
const initialFormData= {
    phone:'',
    password:'',
}

const [errors, setErrors] =useState({})

const handleChange=(e)=> {
    const {name, value}=e.target;
    setFormData((prev)=> ({
        ...prev,
        [name]: value,
    }))
}

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword); 
};

const validateForm=()=> {
    const newErrors={}


if(!formData.phone){
    newErrors.phone='Phone no is required'
} else if (!/^\d{11}$/.test(formData.phone)){
    newErrors.phone= 'Phone number must be 11 digits'
}

if(!formData.password){
    newErrors.password='Password is required';
} else if (formData.password.length < 8){
    newErrors.password='Password must be at least 8 characters';

}
setErrors(newErrors)
return Object.keys(newErrors).length===0

}

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(validateForm()){
        console.log('Form submitted', formData)
        setFormData(initialFormData)

        } else {
        console.log('Form has errors')

        }
    }
  return (
   <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-8 col-lg-6 col-xl-5">
      <div className="card overflow-hidden">
        <div className="bg-primary bg-soft">
          <div className="row">
            <div className="col-7">
              <div className="text-primary p-4">
                <h5 className="text-primary">Welcome!</h5>
                <p>To Level 3 CRM</p>
              </div>
            </div>
            <div className="col-5 align-self-end">
              <img src="images/profile-img.png" alt className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="card-body pt-0"> 
          <div className="auth-logo">
            <a href="index.html" className="auth-logo-light">
              <div className="avatar-md profile-user-wid mb-4">
                <span className="avatar-title rounded-circle bg-light">
                  <img src="images/logo-light.svg" alt className="rounded-circle" height={34} />
                </span>
              </div>
            </a>
            <a href="index.html" className="auth-logo-dark">
              <div className="avatar-md profile-user-wid mb-4">
                <span className="avatar-title rounded-circle bg-light">
                  <img src="images/logo.svg" alt className="rounded-circle" height={34} />
                </span>
              </div>
            </a>
          </div>
          <div className="p-2">
            <form onSubmit={handleSubmit} className="form-horizontal">
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone"
                 name="phone"
                 value={formData.phone}
                 onChange={handleChange}
                placeholder="Enter your phone" />
                {errors.phone && <div className='text-danger'>{errors.phone}</div>}
              </div>
              <div className="mb-3">
  <label className="form-label">Password</label>
  <div className="input-group auth-pass-inputgroup">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control"
      placeholder="Enter password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      aria-label="Password"
      aria-describedby="password-addon"
    />
    <button
      className="btn btn-light"
      type="button"
      id="password"
      onClick={togglePasswordVisibility}
    >
      <i className="mdi mdi-eye-outline" />
    </button>
  </div>
  {/* Error Message */}
  {errors.password && (
    <div className="text-danger mt-1">{errors.password}</div>
  )}
</div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember-check" />
                <label className="form-check-label" htmlFor="remember-check">
                  Remember me
                </label>
              </div>
              <div className="mt-3 d-grid">
                <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
              </div>
    
              <div className="mt-4 text-center">
                <a href="" className="text-muted"><i className="mdi mdi-lock me-1" /> Forgot your password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div>
          <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Signup now </a> </p>
          {/* <p>©  Skote. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p> */}
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Login
