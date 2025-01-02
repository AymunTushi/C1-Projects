import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal } from '../../features/modals/bandwidthReqSlice';

const BandwidthReqBtn = () => {
    const isOpen=useSelector((state)=> state.bandwidthReqModal.isOpen);
    const dispatch=useDispatch()
    const modalRef=useRef(null)

    const handleOutSideClick=(e)=> {
      if (modalRef.current && !modalRef.current.contains(e.target)){
        dispatch(closeModal())
      }
    }

    useEffect(()=> {
      if(isOpen) {
        document.addEventListener("mousedown", handleOutSideClick);
      } else {
        document.removeEventListener("mousedown", handleOutSideClick)
      }
  

    return ()=> {
      document.removeEventListener("mousedown", handleOutSideClick)
    }; 
  },[isOpen, dispatch]
  );
  
  return (
    <div>
    <div className="d-grid">
      <button
        type="button"
        className="btn btn-pill btn-info-gradien"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(61 133 169) 0%, rgb(41 119 149) 51%, rgb(67 113 141) 100%)",
          border: "none",
          color: "#fff",
          transition: "all 0.3s ease",
        }}
        onClick={() => dispatch(openModal())} 
      >
        Request for Bandwidth
      </button>
    </div>

    {/* Modal */}
    {isOpen && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div ref={modalRef}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
          }}
        >
            <div className='d-flex justify-content-between align-items-start'>
                <div>
          <h2>Request Bandwidth</h2>
          <p>Enter your details here...</p>
          </div>
          <button
            onClick={() => dispatch(closeModal())} style={{background:'none', border: 'none', padding:0}}
          >
           <img src="./images/icons/cross.png" alt="cross" style={{}}/>
          </button>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default BandwidthReqBtn
