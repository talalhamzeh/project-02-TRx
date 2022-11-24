import React from "react";
import Form from "./Form";
import { db } from "../Login/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../Login/firebase";
import { useState } from "react";



const NewJournal = ({ toIndex }) => {
  const [prescriptions, setPrescriptions] = useState([]);
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
    setPrescriptions(qArray.map((doc) => ({...doc})));
  };


useEffect(() => {
    getUIDList()
},[currentUser]);

  const currentUser = useAuth();
  const journalsCollectionRef = collection(db, "Journal");
 
  const createJournal = async (data) => {
    await addDoc(journalsCollectionRef, { ...data, UID: currentUser.uid, timestamp: "enter date here" });
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
