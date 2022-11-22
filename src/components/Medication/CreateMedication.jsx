import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";

const CreateMedication = () => {
  const [newMedication, setNewMedication] = useState("");
  const medicationsCollectionRef = collection(db, "Medications");

  const createMedication = async () => {
    await addDoc(medicationsCollectionRef, { brand_name: newMedication });
  };

  return (
    <div className="createMedication">
      <input
        type="text"
        placeholder="Medication Name"
        onChange={(event) => {
          setNewMedication(event.target.value);
        }}
      />
      <button onClick={createMedication}>Create Medication</button>
    </div>
  );
};

export default CreateMedication;
