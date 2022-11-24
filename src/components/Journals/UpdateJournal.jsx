import "./journal.css";
import { db } from "../Login/firebase";
import { doc, setDoc } from "firebase/firestore";
import Form from "./Form";

const UpdateJournal = ({ journal, toIndex }) => {
  const returnValues = (updatedValues) => {
    const docRef = doc(db, "Journal", journal.id);
    setDoc(docRef, updatedValues);
    toIndex();
  };
  return (
    <div>
      <h1 class="journalTitle">Edit Journal</h1>
      <Form returnValues={returnValues} toIndex={toIndex} journal={journal} />
    </div>
  );
};

export default UpdateJournal;
