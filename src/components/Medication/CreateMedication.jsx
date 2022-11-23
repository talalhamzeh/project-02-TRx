import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";

const CreateMedication = () => {
  const [newMedication, setNewMedication] = useState("");
  const [name, setName] = useState("");
  const medicationsCollectionRef = collection(db, "Medications");

  let medicationData = {};
  let medicationDataTwo = {};

  const createMedication = () => {
    addDoc(medicationsCollectionRef, {
      ...medicationDataTwo,
      ...medicationData,
    });
  };

  const promiseOne = axios
    .get(
      `https://api.fda.gov/drug/drugsfda.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=${name}`
    )
    .then((response) => {
      medicationData = {
        brandName: response.data.results[0].openfda.brand_name[0],
        genericName: response.data.results[0].openfda.generic_name[0],
      };
    });

  const promiseTwo = axios
    .get(
      `https://api.fda.gov/drug/label.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=${name}`
    )
    .then((response) => {
      medicationDataTwo = {
        adverseEffects: response.data.results[0].adverse_reactions[0],
        description: response.data.results[0].description[0],
      };
    });

  const _handleNew = () => {
    Promise.all([promiseOne, promiseTwo]).then(() => {
      createMedication();
    });
  };

  return (
    <div className="createMedication">
      <input
        type="text"
        placeholder="Medication Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={_handleNew}>Create Medication</button>
    </div>
  );
};

export default CreateMedication;
