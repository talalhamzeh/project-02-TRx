import React from "react";
import Form from "./Form";
import { db } from "../Login/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../Login/firebase";
import { useState } from "react";



const NewJournal = ({ toIndex }) => {

  const currentUser = useAuth();
  const journalsCollectionRef = collection(db, "Journal");
 
  const createJournal = async (data) => {
    await addDoc(journalsCollectionRef, { ...data, UID: currentUser.uid });
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
