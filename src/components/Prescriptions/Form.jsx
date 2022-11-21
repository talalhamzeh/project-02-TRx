import React from 'react';
import { useState } from 'react';

const Form = ({returnValues, data={} })=>{
    const [drugName,setDrugName]= useState('')
    return(
        <div className="form">
            <input type="text" placeholder="Drug Name" onChange={(event)=>{setDrugName(event.target.value)}} />
            <button onClick={event => returnValues({drug_name: drugName})}>Create Prescription</button>
        </div>
    )
}
export default Form;