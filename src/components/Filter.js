import { Button } from './Button'
import React from 'react'

export const Filter = ({setStatus,setGender}) => {
  const status = ["alive", "dead", "unknown"];
  const gender = ["male", "female", "unknown", "genderless"];
  return (
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Filter by Status
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex gap-3">
          {status.map((item,index) => (
             <Button  setState={setStatus} key={index} text={item} index={index} name="status" />
            ))}
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Filter by Gender
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex gap-3 flex-wrap">
        {gender.map((item,index) => (
             <Button className="mb-2" setState={setGender} key={index} text={item} index={index} name="gender" />
            ))}
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Filter by Species
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            
        </div>
        </div>
    </div>
    </div>

  )
}
