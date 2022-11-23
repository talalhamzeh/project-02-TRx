import React from 'react';
import { db } from '../Login/firebase';
import { doc , setDoc } from 'firebase/firestore';
import Form from "./Form"
import PrescriptionIndex from './PrescriptionIndex';

const UpdatePrescription = ({prescription, toIndex})=>{
    const returnValues=(updatedValues)=>{
        const docRef = doc(db, "Prescriptions", prescription.id)
        setDoc(docRef,updatedValues)
    }

    return (
        <div>
            <h1>Edit Prescription</h1>
            <Form returnValues={returnValues} prescription={prescription}/>            
            {/* <div className="form">
            <h1> {prescription.drug_name}</h1>
            <input type="text" placeholder="Drug Name" defaultValue={prescription.drug_name} />
            <input type="text" placeholder="Dosage" defaultValue={prescription.dosage_history} />
            <input type="text" placeholder="Number of refills" defaultValue={prescription.refills} />
            <input type="text" placeholder="Daily Doses" defaultValue={prescription.daily_dosage} />
            <input type="text" placeholder="Doses per refill" defaultValue={prescription.dose_strength} />
            <input type="date" placeholder="Refill date" defaultValue={prescription.refill_date} />

            <button 
                onClick={event => returnValues(
                )}>
                    
                Update Prescription
            </button>
        </div> */}
        
        </div>
    )

}
export default UpdatePrescription

