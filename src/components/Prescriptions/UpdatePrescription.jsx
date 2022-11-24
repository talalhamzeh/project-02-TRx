import React from 'react';
import { db } from '../Login/firebase';
import { doc , setDoc } from 'firebase/firestore';
import Form from "./Form"
import { useAuth} from "../Login/firebase"; 

const UpdatePrescription = ({prescription, toIndex})=>{
    const currentUser = useAuth(); 
    const returnValues=(updatedValues)=>{
        console.log(prescription)
        const docRef = doc(db, "Prescriptions", prescription.id)
        setDoc(docRef,{...updatedValues, UID: currentUser.uid})
        toIndex()
    }

    return (
        <div>
            <h1>Edit Prescription</h1>
            <Form returnValues={returnValues} data={prescription}/>            
            <button onClick={event=> toIndex() } >Back</button>
        
        </div>
    )

}
export default UpdatePrescription