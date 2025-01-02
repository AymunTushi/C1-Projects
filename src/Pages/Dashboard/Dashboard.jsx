import React from 'react'
import { useDispatch } from 'react-redux'
import BandwidthReq from '../../Components/Button/BandwidthReqBtn'


const Dashboard = () => {
  const dispatch=useDispatch()
  // const[activemenu, setActiveMenu]=useState("Dashboard");
  // const[sidebar, setSidebar]=useState(true);
  return (
    // <div className={`layout-wrapper ${sidebar ? "" : "sidebar-enable vertical-collpsed"}`}>
    <div>
    {/* <Header setSidebar={setSidebar} sidebar={sidebar}/>
    <Sidebar activemenu={activemenu} setActiveMenu={setActiveMenu}/> */}
    {/* <TestDashboard/> */}
    {/* <Footer/> */}
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
        <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="d-grid">
                      {/* <button
                        type="submit" 
                        onClick={()=>dispatch(openModal)}
                        className="btn btn-pill btn-info-gradien"
                        style={{
                         backgroundImage: 'linear-gradient(to right, rgb(61 133 169) 0%, rgb(41 119 149) 51%, rgb(67 113 141) 100%)',
                         border:' none', color: '#fff', transition: 'all 0.3s ease'}}         
                      >
                        Request for Bandwidth
                      </button> */}
                      <BandwidthReq/>
                    </div>
                  </div>
                    {/* <div className="col-lg-4 align-self-center">
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
                    </div> */}
                    {/* <div className="col-lg-4 d-none d-lg-block">
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
                    </div> */}
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
              
            </div>
          </div>

        </div>
        
</div>

  )
}

export default Dashboard
