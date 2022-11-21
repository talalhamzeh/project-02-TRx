import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const CreateJournal=()=>{
    const [newJournal,setNewJournal] = useState('')
    const journalsCollectionRef = collection(db, "Journal");


    const createJournal = async() =>{
        await addDoc(journalsCollectionRef,{content: newJournal})
    }

    return(
        <div className="createJournal">
            <input type="text" placeholder="Journal Content" onChange={(event)=>{setNewJournal(event.target.value)}} />
            <button onClick={createJournal}>Create Entry</button>
        </div>
    )
}

export default CreateJournal;