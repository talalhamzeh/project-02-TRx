
import { db } from '../Login/firebase';
import { doc , setDoc } from 'firebase/firestore';
import Form from "./Form"
import { useAuth} from "../Login/firebase"; 

const UpdateJournal = ({journal, toIndex})=>{
    const currentUser = useAuth(); 
    const returnValues=(updatedValues)=>{
        const docRef = doc(db, "Journal", journal.id)
        setDoc(docRef,{...updatedValues, UID: currentUser.uid})
        toIndex()
    }
    return (
        <div>
            <h1>Edit Journal</h1>
            <Form returnValues={returnValues} journal={journal}/>            
        </div>
    )
}

export default UpdateJournal