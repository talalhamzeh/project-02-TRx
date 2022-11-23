import React from 'react'
import Form from "./Form"
import { db } from '../Login/firebase';
import { collection, addDoc } from 'firebase/firestore';
const NewPrescription = ({toIndex})=>{
    const prescriptionsCollectionRef = collection(db, "Prescriptions");
    const createPrescription = async(data) =>{
        await addDoc(prescriptionsCollectionRef,data)
    }
    const returnValues = (data) => {
        console.log(data)
        createPrescription(data)
        toIndex()
    }
    return(
        <div className="createPrescription">
            <h1>New Prescription</h1>
            <Form returnValues={returnValues}/>
            <button onClick={event=> toIndex() } >Back</button>


        </div>
    )
}
export default NewPrescription