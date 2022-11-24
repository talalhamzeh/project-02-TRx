import React from "react";
import Form from "./Form";
import { db } from "../Login/firebase";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { useAuth } from "../Login/firebase";
import { useState, useEffect } from 'react';



const NewJournal = ({ toIndex }) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const prescriptionsCollectionRef = collection(db, "Prescriptions");
// list of current scripts for journal
  const getUIDList = async () => {
    const q = query(prescriptionsCollectionRef, where("UID", "==", currentUser.uid));
    console.log(q);
    const querySnapshot = await getDocs(q);
    const qArray=[]
    querySnapshot.forEach((doc) => {
        qArray.push(doc.data())
        console.log(doc.id, " => ", doc.data());
        // 
    });
    console.log(qArray)
    setPrescriptions(qArray.map((doc) => (`${doc.drug_name} ${doc.dosage_strength} ended : ${defaultValue}`)));
  };


useEffect(() => {
    getUIDList()
},[currentUser]);

  const currentUser = useAuth();
  const journalsCollectionRef = collection(db, "Journal");
  const today = new Date();
  const numberOfDaysToAdd = 0;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
  const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
  const createJournal = async (data) => {
    await addDoc(journalsCollectionRef, { ...data, UID: currentUser.uid, timestamp : defaultValue });
  };
  const returnValues = (data) => {
    console.log(data);
    createJournal(data);
    toIndex();
  };
  return (
    <div className="createJournal">
      <h1 class="journalTitle">New Journal</h1>
      <Form toIndex={toIndex} returnValues={returnValues} />
    </div>
  );
};
export default NewJournal;
