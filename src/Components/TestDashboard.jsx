import React from 'react'

const TestDashboard = () => {
  return (
    

 <div>
  {/* Begin page */}
  <div id="layout-wrapper">
    
    {/* ========== Left Sidebar Start ========== */}
    
    {/* Left Sidebar End */}
    {/* ============================================================== */}
    {/* Start right Content here */}
    {/* ============================================================== */}
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Saas</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                    <li className="breadcrumb-item active">Saas</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <img src="images/users/avatar-1.jpg" alt className="avatar-md rounded-circle img-thumbnail" />
                        </div>
                        <div className="flex-grow-1 align-self-center">
                          <div className="text-muted">
                            <p className="mb-2">Welcome to Skote Dashboard</p>
                            <h5 className="mb-1">Henry wells</h5>
                            <p className="mb-0">UI / UX Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 align-self-center">
                      <div className="text-lg-center mt-4 mt-lg-0">
                        <div className="row">
                          <div className="col-4">
                            <div>
                              <p className="text-muted text-truncate mb-2">Total Projects</p>
                              <h5 className="mb-0">48</h5>
                            </div>
                          </div>
                          <div className="col-4">
                            <div>
                              <p className="text-muted text-truncate mb-2">Projects</p>
                              <h5 className="mb-0">40</h5>
                            </div>
                          </div>
                          <div className="col-4">
                            <div>
                              <p className="text-muted text-truncate mb-2">Clients</p>
                              <h5 className="mb-0">18</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="clearfix mt-4 mt-lg-0">
                        <div className="dropdown float-end">
                          <button className="btn btn-primary" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bx bxs-cog align-middle me-1" /> Setting
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-4">
              <div className="card bg-primary bg-soft">
                <div>
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-3">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Skote Saas Dashboard</p>
                        <ul className="ps-3 mb-0">
                          <li className="py-1">7 + Layouts</li>
                          <li className="py-1">Multiple apps</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img src="images/profile-img.png" alt className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                            <i className="bx bx-copy-alt" />
                          </span>
                        </div>
                        <h5 className="font-size-14 mb-0">Orders</h5>
                      </div>
                      <div className="text-muted mt-4">
                        <h4>1,452 <i className="mdi mdi-chevron-up ms-1 text-success" /></h4>
                        <div className="d-flex">
                          <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ms-2 text-truncate">From previous period</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                            <i className="bx bx-archive-in" />
                          </span>
                        </div>
                        <h5 className="font-size-14 mb-0">Revenue</h5>
                      </div>
                      <div className="text-muted mt-4">
                        <h4>$ 28,452 <i className="mdi mdi-chevron-up ms-1 text-success" /></h4>
                        <div className="d-flex">
                          <span className="badge badge-soft-success font-size-12"> + 0.2% </span> <span className="ms-2 text-truncate">From previous period</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-3">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                            <i className="bx bx-purchase-tag-alt" />
                          </span>
                        </div>
                        <h5 className="font-size-14 mb-0">Average Price</h5>
                      </div>
                      <div className="text-muted mt-4">
                        <h4>$ 16.2 <i className="mdi mdi-chevron-up ms-1 text-success" /></h4>
                        <div className="d-flex">
                          <span className="badge badge-soft-warning font-size-12"> 0% </span> <span className="ms-2 text-truncate">From previous period</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-end">
                      <div className="input-group input-group-sm">
                        <select className="form-select form-select-sm">
                          <option value="JA" selected>Jan</option>
                          <option value="DE">Dec</option>
                          <option value="NO">Nov</option>
                          <option value="OC">Oct</option>
                        </select>
                        <label className="input-group-text">Month</label>
                      </div>
                    </div>
                    <h4 className="card-title mb-4">Earning</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="text-muted">
                        <div className="mb-4">
                          <p>This month</p>
                          <h4>$2453.35</h4>
                          <div><span className="badge badge-soft-success font-size-12 me-1"> + 0.2% </span> From previous period</div>
                        </div>
                        <div>
                          <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light btn-sm">View Details <i className="mdi mdi-chevron-right ms-1" /></a>
                        </div>
                        <div className="mt-4">
                          <p className="mb-2">Last month</p>
                          <h5>$2281.04</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div id="line-chart" className="apex-charts" dir="ltr" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Sales Analytics</h4>
                  <div>
                    <div id="donut-chart" className="apex-charts" />
                  </div>
                  <div className="text-center text-muted">
                    <div className="row">
                      <div className="col-4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary me-1" /> Product A</p>
                          <h5>$ 2,132</h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-success me-1" /> Product B</p>
                          <h5>$ 1,763</h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="mt-4">
                          <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-danger me-1" /> Product C</p>
                          <h5>$ 973</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <div className="float-end">
                      <div className="input-group input-group-sm">
                        <select className="form-select form-select-sm">
                          <option value="JA" selected>Jan</option>
                          <option value="DE">Dec</option>
                          <option value="NO">Nov</option>
                          <option value="OC">Oct</option>
                        </select>
                        <label className="input-group-text">Month</label>
                      </div>
                    </div>
                    <h4 className="card-title mb-4">Top Selling product</h4>
                  </div>
                  <div className="text-muted text-center">
                    <p className="mb-2">Product A</p>
                    <h4>$ 6385</h4>
                    <p className="mt-4 mb-0"><span className="badge badge-soft-success font-size-11 me-2"> 0.6% <i className="mdi mdi-arrow-up" /> </span> From previous period</p>
                  </div>
                  <div className="table-responsive mt-4">
                    <table className="table align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="font-size-14 mb-1">Product A</h5>
                            <p className="text-muted mb-0">Neque quis est</p>
                          </td>
                          <td>
                            <div id="radialchart-1" className="apex-charts" />
                          </td>
                          <td>
                            <p className="text-muted mb-1">Sales</p>
                            <h5 className="mb-0">37 %</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="font-size-14 mb-1">Product B</h5>
                            <p className="text-muted mb-0">Quis autem iure</p>
                          </td>
                          <td>
                            <div id="radialchart-2" className="apex-charts" />
                          </td>
                          <td>
                            <p className="text-muted mb-1">Sales</p>
                            <h5 className="mb-0">72 %</h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="font-size-14 mb-1">Product C</h5>
                            <p className="text-muted mb-0">Sed aliquam mauris.</p>
                          </td>
                          <td>
                            <div id="radialchart-3" className="apex-charts" />
                          </td>
                          <td>
                            <p className="text-muted mb-1">Sales</p>
                            <h5 className="mb-0">54 %</h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Tasks</h4>
                  <ul className="nav nav-pills bg-light rounded">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">In Process</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Upcoming</a>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <div data-simplebar style={{maxHeight: 250}}>
                      <div className="table-responsive">
                        <table className="table table-nowrap align-middle table-hover mb-0">
                          <tbody>
                            <tr>
                              <td style={{width: 50}}>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck01" />
                                  <label className="form-check-label" htmlFor="tasklistCheck01" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">Skote Saas Dashboard</a></h5>
                                <p className="text-muted mb-0">Assigned to Mark</p>
                              </td>
                              <td style={{width: 90}}>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck02" />
                                  <label className="form-check-label" htmlFor="tasklistCheck02" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">New Landing UI</a></h5>
                                <p className="text-muted mb-0">Assigned to Team A</p>
                              </td>
                              <td>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck02" />
                                  <label className="form-check-label" htmlFor="tasklistCheck02" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">Brand logo design</a></h5>
                                <p className="text-muted mb-0">Assigned to Janis</p>
                              </td>
                              <td>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck04" />
                                  <label className="form-check-label" htmlFor="tasklistCheck04" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">Blog Template UI</a></h5>
                                <p className="text-muted mb-0">Assigned to Dianna</p>
                              </td>
                              <td>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck05" />
                                  <label className="form-check-label" htmlFor="tasklistCheck05" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">Multipurpose Landing</a></h5>
                                <p className="text-muted mb-0">Assigned to Team B</p>
                              </td>
                              <td>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck06" />
                                  <label className="form-check-label" htmlFor="tasklistCheck06" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">Redesign - Landing page</a></h5>
                                <p className="text-muted mb-0">Assigned to Jerry</p>
                              </td>
                              <td>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" id="tasklistCheck07" />
                                  <label className="form-check-label" htmlFor="tasklistCheck07" />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 mb-1"><a href="javascript: void(0);" className="text-dark">Skote Crypto Dashboard</a></h5>
                                <p className="text-muted mb-0">Assigned to Eric</p>
                              </td>
                              <td>
                                <div>
                                  <ul className="list-inline mb-0 font-size-16">
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-success p-1"><i className="bx bxs-edit-alt" /></a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="javascript: void(0);" className="text-danger p-1"><i className="bx bxs-trash" /></a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top">
                  <div className="text-center">
                    <a href="javascript: void(0);" className="btn btn-primary waves-effect waves-light"> Add new Task</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="row">
                    <div className="col-md-4 col-9">
                      <h5 className="font-size-15 mb-1">Steven Franklin</h5>
                      <p className="text-muted mb-0"><i className="mdi mdi-circle text-success align-middle me-1" /> Active now</p>
                    </div>
                    <div className="col-md-8 col-3">
                      <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item d-none d-sm-inline-block">
                          <div className="dropdown">
                            <button className="btn nav-btn" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-search-alt-2" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end py-0 dropdown-menu-md">
                              <form className="p-3">
                                <div className="form-group m-0">
                                  <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item  d-none d-sm-inline-block">
                          <div className="dropdown">
                            <button className="btn nav-btn" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-cog" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">View Profile</a>
                              <a className="dropdown-item" href="#">Clear chat</a>
                              <a className="dropdown-item" href="#">Muted</a>
                              <a className="dropdown-item" href="#">Delete</a>
                            </div>
                          </div>
                        </li>
                        <li className="list-inline-item">
                          <div className="dropdown">
                            <button className="btn nav-btn" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body pb-0">
                  <div>
                    <div className="chat-conversation">
                      <ul className="list-unstyled" data-simplebar style={{maxHeight: 260}}>
                        <li> 
                          <div className="chat-day-title">
                            <span className="title">Today</span>
                          </div>
                        </li>
                        <li>
                          <div className="conversation-list">
                            <div className="dropdown">
                              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Copy</a>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Forward</a>
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">Steven Franklin</div>
                              <p>
                                Hello!
                              </p>
                              <p className="chat-time mb-0"><i className="bx bx-time-five align-middle me-1" /> 10:00</p>
                            </div>
                          </div>
                        </li>
                        <li className="right">
                          <div className="conversation-list">
                            <div className="dropdown">
                              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Copy</a>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Forward</a>
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">Henry Wells</div>
                              <p>
                                Hi, How are you? What about our next meeting?
                              </p>
                              <p className="chat-time mb-0"><i className="bx bx-time-five align-middle me-1" /> 10:02</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="conversation-list">
                            <div className="dropdown">
                              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Copy</a>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Forward</a>
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">Steven Franklin</div>
                              <p>
                                Yeah everything is fine
                              </p>
                              <p className="chat-time mb-0"><i className="bx bx-time-five align-middle me-1" /> 10:06</p>
                            </div>
                          </div>
                        </li>
                        <li className="last-chat">
                          <div className="conversation-list">
                            <div className="dropdown">
                              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Copy</a>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Forward</a>
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">Steven Franklin</div>
                              <p>&amp; Next meeting tomorrow 10.00AM</p>
                              <p className="chat-time mb-0"><i className="bx bx-time-five align-middle me-1" /> 10:06</p>
                            </div>
                          </div>
                        </li>
                        <li className="right">
                          <div className="conversation-list">
                            <div className="dropdown">
                              <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-dots-vertical-rounded" />
                              </a>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Copy</a>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Forward</a>
                                <a className="dropdown-item" href="#">Delete</a>
                              </div>
                            </div>
                            <div className="ctext-wrap">
                              <div className="conversation-name">Henry Wells</div>
                              <p>
                                Wow that's great
                              </p>
                              <p className="chat-time mb-0"><i className="bx bx-time-five align-middle me-1" /> 10:07</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-3 chat-input-section">
                  <div className="row">
                    <div className="col">
                      <div className="position-relative">
                        <input type="text" className="form-control rounded chat-input" placeholder="Enter Message..." />
                        <div className="chat-input-links">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a href="javascript: void(0);"><i className="mdi mdi-emoticon-happy-outline" /></a></li>
                            <li className="list-inline-item"><a href="javascript: void(0);"><i className="mdi mdi-file-image-outline" /></a></li>
                            <li className="list-inline-item"><a href="javascript: void(0);"><i className="mdi mdi-file-document-outline" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-auto">
                      <button type="submit" className="btn btn-primary chat-send w-md waves-effect waves-light"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
        </div> {/* container-fluid */}
      </div>
      {/* End Page-content */}
   
    </div>
    {/* end main content*/}
  </div>
  {/* END layout-wrapper */}
  {/* Right Sidebar */}
  <div className="right-bar">
    <div data-simplebar className="h-100">
      <div className="rightbar-title d-flex align-items-center px-3 py-4">
        <h5 className="m-0 me-2">Settings</h5>
        <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
          <i className="mdi mdi-close noti-icon" />
        </a>
      </div>
      {/* Settings */}
      <hr className="mt-0" />
      <h6 className="text-center mb-0">Choose Layouts</h6>
      <div className="p-4">
        <div className="mb-2">
          <img src="images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked />
          <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
        </div>
        <div className="mb-2">
          <img src="images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" />
          <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
        </div>
        <div className="mb-2">
          <img src="images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" />
          <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
        </div>
        <div className="mb-2">
          <img src="images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-5">
          <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
          <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
        </div>
      </div>
    </div> {/* end slimscroll-menu*/}
  </div>
  {/* /Right-bar */}
  {/* Right bar overlay*/}
  <div className="rightbar-overlay" />
</div>


  )
}

export default TestDashboard
