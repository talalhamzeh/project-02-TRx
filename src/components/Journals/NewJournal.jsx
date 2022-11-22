import React from 'react'
import Form from "./Form"
import { db } from '../Login/firebase';
import { collection, addDoc } from 'firebase/firestore';
const NewJournal = ({toIndex})=>{
    const journalsCollectionRef = collection(db, "Journal");
    const createJournal = async(data) =>{
        await addDoc(journalsCollectionRef,data)
    }
    const returnValues = (data) => {
        console.log(data)
        createJournal(data)
        toIndex()
    }
    return(
        <div className="createJournal">
            <h1>New Journal</h1>
            <Form returnValues={returnValues}/>
        </div>
    )
}
export default NewJournal