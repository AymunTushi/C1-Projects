import React from 'react'

import { Link } from 'react-router-dom'

const Header = ({sidebar,setSidebar}) => {
  return (
    <div>
       <header id="page-topbar">
    <div className="navbar-header">
      <div className="d-flex">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src="images/logo.svg" alt height={22} />
            </span>
            <span className="logo-lg">
              <img src="images/logo-dark.png" alt height={17} />
            </span>
          </Link>
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img src="images/logo-light.svg" alt height={22} />
            </span>
            <span className="logo-lg">
              <img src="images/logo-light.png" alt height={19} />
            </span>
          </a>
        </div>
        <button type="button" onClick={()=>{setSidebar(!sidebar)}} className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
          <i className="fa fa-fw fa-bars" />
        </button>
        {/* App Search*/}
        <form className="app-search d-none d-lg-block">
          <div className="position-relative">
            <input type="text" className="form-control" placeholder="Search..." />
            <span className="bx bx-search-alt" />
          </div>
        </form>
       
      </div>
      <div className="d-flex">
        <div className="dropdown d-inline-block d-lg-none ms-2">
          <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="mdi mdi-magnify" />
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
            <form className="p-3">
              <div className="form-group m-0">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="dropdown d-inline-block">
         
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
              <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">English</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
              <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
              <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
              <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
            </a>
            {/* item*/}
            <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
              <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
            </a>
          </div>
        </div>
        
        <div className="dropdown d-inline-block">
          <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="bx bx-bell bx-tada" />
            <span className="badge bg-danger rounded-pill">3</span>
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
            <div className="p-3">
              <div className="row align-items-center">
                <div className="col">
                  <h6 className="m-0" key="t-notifications"> Notifications </h6>
                </div>
                <div className="col-auto">
                  <a href="#!" className="small" key="t-view-all"> View All</a>
                </div>
              </div>
            </div>
            <div data-simplebar style={{maxHeight: 230}}>
              <a href="javascript: void(0);" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="bx bx-cart" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript: void(0);" className="text-reset notification-item">
                <div className="d-flex">
                  <img src="images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">James Lemire</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript: void(0);" className="text-reset notification-item">
                <div className="d-flex">
                  <div className="avatar-xs me-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="bx bx-badge-check" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="javascript: void(0);" className="text-reset notification-item">
                <div className="d-flex">
                  <img src="images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">Salena Layfield</h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                      <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="p-2 border-top d-grid">
              <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i className="mdi mdi-arrow-right-circle me-1" /> <span key="t-view-more">View More..</span> 
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown d-inline-block">
          <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="rounded-circle header-profile-user" src="images/users/avatar-1.jpg" alt="Header Avatar" />
            <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
            <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
            <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1" /> <span key="t-my-wallet">My Wallet</span></a>
            <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></a>
            <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" /> <span key="t-lock-screen">Lock screen</span></a>
            <div className="dropdown-divider" />
            <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a>
          </div>
        </div>
       
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header
