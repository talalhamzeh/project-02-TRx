import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const CreatePrescription=()=>{
    const [newPrescription,setNewPrescription] = useState('')
    const prescriptionsCollectionRef = collection(db, "Prescriptions");


    const createPrescription = async() =>{
        await addDoc(prescriptionsCollectionRef,{drug_name: newPrescription})
    }

    return(
        <div className="createPrescription">
            <input type="text" placeholder="Drug Name" onChange={(event)=>{setNewPrescription(event.target.value)}} />
            <button onClick={createPrescription}>Create Prescription</button>
        </div>
    )
}

export default CreatePrescription;