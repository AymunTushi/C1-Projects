import React from 'react'

const LogIn = () => {
  return (
    <div classname="container mt-5">
  <h1 classname="text-center mb-4">Login Form</h1>
  <form>
    <div className="row g-3">
      {/* Row 1: Name and Phone */}
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="text" className="form-control" id="phone" placeholder="Enter your phone no" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" required />
      </div>
    </div>
  </form></div>

  )
}

export default LogIn
