
import { db } from '../Login/firebase';
import { doc , setDoc } from 'firebase/firestore';
import Form from "./Form"

const UpdatePrescription = ({prescription, toIndex})=>{
    const returnValues=(updatedValues)=>{
        const docRef = doc(db, "Prescriptions", prescription.id)
        setDoc(docRef,updatedValues)
    }
    return (
        <div>
            <h1>Edit Prescription</h1>
            <Form returnValues={returnValues} prescription={prescription}/>            
        </div>
    )
}
export default UpdatePrescription