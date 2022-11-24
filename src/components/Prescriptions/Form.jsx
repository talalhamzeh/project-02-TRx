import React from "react";
import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import CreateMedication from "../Medication/CreateMedication"

const Form = ({ returnValues, data = {} }) => {
  const [drugName, setDrugName] = useState("");
  const [dosage, setDosage] = useState("");
  const [numberOfReffils, setNumberOfReffils] = useState("");
  const [dosesPerDay, setDosesPerDay] = useState("");
  const [dosesPerRefill, setDosesPerRefill] = useState("");
  const [refillDate, setRefillDate] = useState("");
  const [medications, setMedications] = useState([]);
  const [medicationID, setMedicationID]= useState("")
  const [toggle, setToggle] = useState([])
  const medicationsCollectionRef = collection(db, "Medications");

  useEffect(() => {
    const getMedications = async () => {
      const data = await getDocs(medicationsCollectionRef);
      setMedications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    getMedications();
  }, []);

  const handleNewMeds=()=>{
    setToggle([<CreateMedication />])
  }

  return (
    <div className="form">
      <select>
        {medications.map((medication) => (
          <option value={medication.id}
          onChange={(event) => {
            setDrugName(event.target.html);
            setMedicationID(event.target.value);
          }}
          >{medication.brandName}</option>
        ))}
      </select>
      <button onClick={handleNewMeds}>Medication not listed</button>
          <div>{toggle}</div>
      <input
        defaultValue={data.dosage_history}
        type="text"
        placeholder="Dosage"
        onChange={(event) => {
          setDosage(event.target.value);
        }}
      />
      <input
        defaultValue={data.refills}
        type="text"
        placeholder="Number of refills"
        onChange={(event) => {
          setNumberOfReffils(event.target.value);
        }}
      />
      <input
        defaultValue={data.daily_dosage}
        type="text"
        placeholder="Daily Doses"
        onChange={(event) => {
          setDosesPerDay(event.target.value);
        }}
      />
      <input
        defaultValue={data.dose_strength}
        type="text"
        placeholder="Doses per refill"
        onChange={(event) => {
          setDosesPerRefill(event.target.value);
        }}
      />
      <input
        defaultValue={data.refill_date}
        type="date"
        placeholder="Refill date"
        onChange={(event) => {
          setRefillDate(event.target.value);
        }}
      />

      <button
        onClick={(event) =>
          returnValues({
            drug_name: drugName,
            medication_id: medicationID,
            dosage_history: dosage,
            refills: numberOfReffils,
            daily_dosage: dosesPerDay,
            dose_strength: dosesPerRefill,
            refill_date: refillDate,
          })
        }
      >
        {data.drug_name ? "Update" : "Create"} Prescription
      </button>
    </div>
  );
};
export default Form;
