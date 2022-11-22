
import React from 'react';
import { useState } from 'react';

const Form = ({returnValues, data={} })=>{
    const [drugName,setDrugName]= useState('');
    const [medicationName, setMedicationName] = useState('');
    const [dosage, setDosage] = useState('');
    const [numberOfReffils, setNumberOfReffils] = useState('');
    const [dosesPerDay, setDosesPerDay] = useState('');
    const [dosesPerRefill, setDosesPerRefill] = useState('');
    const [refillDay, setRefillDay] = useState('');



    return(
        <div className="form">
            <input type="text" placeholder="Drug Name" onChange={(event)=>{setDrugName(event.target.value)}} />
            <button onClick={event => returnValues({drug_name: drugName})}>Create Prescription</button>
        </div>
    )
}
export default Form;