import "./journal.css";
import { db } from "../Login/firebase";
import { doc, setDoc } from "firebase/firestore";
import Form from "./Form";
import { useAuth } from "../Login/firebase";

const UpdateJournal = ({ journal, toIndex }) => {
  const currentUser = useAuth();
  const today = new Date();
  const numberOfDaysToAdd = 0;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
  const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
  
  const returnValues = (updatedValues) => {
    const docRef = doc(db, "Journal", journal.id);
    setDoc(docRef, { ...updatedValues, UID: currentUser.uid, timestamp: defaultValue });
    toIndex();
  };
  return (
    <div>
      <h1 class="journalTitle">Edit Journal</h1>
      <Form returnValues={returnValues} toIndex={toIndex} data={journal} />
    </div>
  );
};

export default UpdateJournal;
