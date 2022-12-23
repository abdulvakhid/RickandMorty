import React from 'react'
import {Link} from "react-router-dom"
import "./card.css"

export function Card({img, name, status, gender,time,id}) {

    return (
        <li className="col-5 mb-5 me-5 item list-unstyled"> 
           <Link className='text-dark text-decoration-none' to={`/single/${id}`}>
             <div className="row bg-white p-4 shadow">
                    <div className='col-6'>
                        <img src={img} className="img-thumnail card-img"  width="300" height="200" alt="usa flag" />
                    </div>
                    <div className="col-6">
                        <h2 className="fs-5 fw-bold text-center mb-3">{name}</h2>     
                        <span className="fw-bold mb-3 d-inline-block">Status:</span > 
                         {
                         (function() {
                          
                          if ( status === "Alive") {
                           return (<span className='ms-2 text-white px-2 py-2 bg-success rounded-3'> {status}</span>)
                          }else if ( status === "Dead"){
                           return (<span className='ms-2 text-white px-2 py-2 bg-danger rounded-3'> {status}</span>)
                          }else {
                            return (<span className='ms-2 text-white px-2 py-2 bg-secondary rounded-3'> {status}</span>)
                          }
                        })()
                        }
                        
                        
                        <p><span className="fw-bold">Gender:</span> {gender}</p>
                        <time  dateTime='2022-12-12'><span className='fw-bold'>Created in :</span> <span>{time}</span></time>
                    </div>
              </div>
           </Link>
       </li>
    )
}


