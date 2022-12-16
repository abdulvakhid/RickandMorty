import React from 'react'

export function Card({img, name, status, gender,time}) {
    return (
        <li className="col-5 mb-5 me-5 item"> 
            <div className="row bg-white p-4">
                <div className='col-4'>
                    <img src={img} className="img-fluid card-img"  width="267" height="160" alt="usa flag" />
                </div>
                <div className="col-8">
                    <h2 className="fs-5 fw-bold text-center">{name}</h2>     
                    <p><span className="fw-bold">Status:</span> {status}</p>
                    <p><span className="fw-bold">Gender:</span> {gender}</p>
                    <time  dateTime='2022-12-12'><span className='fw-bold'>Created in :</span> <span>{time}</span></time>
                </div>
            </div>
      </li>
    )
}


