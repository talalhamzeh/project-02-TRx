
import { db } from '../Login/firebase';
import { doc , setDoc } from 'firebase/firestore';

const UpdateJournal = ({journal, toIndex})=>{
    const returnValues=(updatedValues)=>{
        const docRef = doc(db, "Journal", journal.id)
        setDoc(docRef,updatedValues)
    }
    return (
        <div>
            <h1>Edit Journal</h1>
            <Form returnValues={returnValues} journal={journal}/>            
        </div>
    )
}

export default UpdateJournal