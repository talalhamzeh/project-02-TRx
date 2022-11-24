import "./journal.css";
import { db } from "../Login/firebase";
import { doc, setDoc } from "firebase/firestore";
import Form from "./Form";
import { useAuth } from "../Login/firebase";

const UpdateJournal = ({ journal, toIndex }) => {
  const currentUser = useAuth();
  const returnValues = (updatedValues) => {
    const docRef = doc(db, "Journal", journal.id);
    setDoc(docRef, { ...updatedValues, UID: currentUser.uid });
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
