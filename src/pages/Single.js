import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Card } from '../components/Card'

export const Single = () => {
    const {id} = useParams()
 
    const back = useNavigate()
    const [info, setinfo] = useState({
      isError: false,
      isLoading: true,
      data:[]
    })
  
  
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
          setinfo({
            isError: false,
            isLoading: false,
            data: json
          })
          if (json.status === 404) {
            setinfo({
              isError: true,
              isLoading: false,
              data: []
           })
          }
        })
        .catch(error => { })
    },[id])
    return (
 <div className="container">
     <div className='mt-5'>
      <div className="mb-5">
              <button className="btn border back" onClick={()=>back(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left me-2 "
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>Back
              </button>
         </div>
      <div className='d-flex justify-content-center'>
        
         <div className="col-5 mb-5 me-5 item"> 
             <div className="row bg-white p-4 shadow">
                    <div className='col-6'>
                        <img src={info.data.image} className="img-thumnail card-img"  width="300" height="200" alt="usa flag" />
                    </div>
                    <div className="col-6">
                        <h2 className="fs-5 fw-bold text-center mb-3">{info.data.name}</h2>     
                        <span className="fw-bold mb-3 d-inline-block">Status:</span > 
                         {
                         (function() {
                          
                          if ( info.data.status === "Alive") {
                           return (<span className='ms-2 text-white px-2 py-2 bg-success rounded-3'> {info.data.status}</span>)
                          }else if ( info.data.status === "Dead"){
                           return (<span className='ms-2 text-white px-2 py-2 bg-danger rounded-3'> {info.data.status}</span>)
                          }else {
                            return (<span className='ms-2 text-white px-2 py-2 bg-secondary rounded-3'> {info.data.status}</span>)
                          }
                        })()
                        }
                        
                        
                        <p><span className="fw-bold">Gender:</span> {info.data.gender}</p>
                        <time  dateTime='2022-12-12'><span className='fw-bold'>Created in :</span> <span>{info.data.created}</span></time>
                    </div>
              </div>
          </div>
         
      </div>
     </div>
 </div>
)}

