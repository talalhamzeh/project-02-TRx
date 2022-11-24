import React from 'react';
import { db } from '../Login/firebase';
import { doc , setDoc } from 'firebase/firestore';
import Form from "./Form"
import { useAuth} from "../Login/firebase"; 
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


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
                       
        
            <div>
             <Button 
              size="small"
              onClick={event=> toIndex() }
              variant="contained"
              color="success"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>

            </div>

            
        
        </div>
    )

}
export default UpdatePrescription