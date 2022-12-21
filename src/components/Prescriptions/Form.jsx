import React from "react";
import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import CreateMedication from "../Medication/CreateMedication";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Form = ({ returnValues, data = {} }) => {
  const [drugName, setDrugName] = useState("");
  const [dosage, setDosage] = useState("");
  const [numberOfReffils, setNumberOfReffils] = useState("");
  const [dosesPerDay, setDosesPerDay] = useState("");
  const [dosesPerRefill, setDosesPerRefill] = useState("");
  const [refillDate, setRefillDate] = useState("");
  const [medications, setMedications] = useState([]);
  const [medicationID, setMedicationID] = useState("");
  const [scriptName, setScriptName] = useState("");
  const [toggle, setToggle] = useState([]);
  const medicationsCollectionRef = collection(db, "Medications");

  useEffect(() => {
    const getMedications = async () => {
      const data = await getDocs(medicationsCollectionRef);
      setMedications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
    getMedications();
  }, []);

  const getData = () => {
    // console.log(data);
    // script_name: scriptName,
    setScriptName(data.script_name ? data.script_name : "");
    // medication_id: medicationID,
    setMedicationID(data.medicationID ? data.medicationID : "");
    // // dosage_history: dosage,
    setDosage(data.dosage ? data.dosage : "");
    // refills: numberOfReffils,
    setNumberOfReffils(data.refills ? data.refills : "");
    // daily_dosage: dosesPerDay,
    setDosesPerDay(data.daily_dosage ? data.daily_dosage : "");
    // dose_strength: dosesPerRefill,
    setDosesPerRefill(data.doses_per_day ? data.doses_per_day : "");
    // refill_date: refillDate,
    setRefillDate(data.refill_date ? data.refillDate : "");
  };
  const handleNewMeds = () => {
    setToggle([<CreateMedication />]);
  };

  return (
    <div className="#container">
      <div className="form">
        <form>
          <label for="dname">Script Name</label>
          <input
            defaultValue={data.script_name}
            type="text"
            placeholder="Script Name"
            onChange={(event) => {
              setScriptName(event.target.value);
            }}
          />
          <label for="medic">Medication</label>
          <select
            id="select"
            onChange={(event) => {
              // console.log(event.target.value);
              setMedicationID(event.target.value);
              // console.log(event.target.html);
            }}
            value={data.medication_id}
            required
          >
            <option value="">** Select a medication **</option>
            {medications.map((medication) => (
              <option value={medication.id}>{medication.brandName}</option>
            ))}
          </select>
          <p onClick={handleNewMeds}>Medication not listed</p>
          <div>{toggle}</div>

          <label for="dosage">Dosage</label>
          <input
            required
            defaultValue={data.dose_strength}
            type="text"
            placeholder="3mg"
            onChange={(event) => {
              console.log(event.target.value);
              setDosage(event.target.value);
              // console.log("dosage", dosage);
            }}
          />
          <h3>Refill Calculator</h3>
          <label for="nor">Number of refills</label>
          <input
            defaultValue={data.refills}
            type="number"
            placeholder="Number of refills"
            onChange={(event) => {
              setNumberOfReffils(event.target.value);
            }}
          />

          <label for="dd">Daily Doses</label>
          <input
            defaultValue={data.daily_dosage}
            type="number"
            placeholder="Daily Doses"
            onChange={(event) => {
              setDosesPerDay(event.target.value);
            }}
          />
          <label for="dpr">Doses per refill</label>
          <input
            defaultValue={data.doses_per_refill}
            type="number"
            placeholder="Doses per refill"
            onChange={(event) => {
              setDosesPerRefill(event.target.value);
            }}
          />
          <label for="rd">Refill date</label>
          <input
            defaultValue={data.refill_date}
            type="date"
            placeholder="Refill date"
            onChange={(event) => {
              setRefillDate(event.target.value);
            }}
          />
        </form>

        <div class="text-center ">
          <Button
            startIcon={<AddBoxIcon />}
            variant="contained"
            color="success"
            size="small"
            onClick={(event) =>
              returnValues({
                script_name: scriptName,
                medication_id: medicationID,
                doses_per_refill: dosesPerRefill,
                refills: numberOfReffils,
                daily_dosage: dosesPerDay,
                dose_strength: dosage,
                refill_date: refillDate,
              })
            }
          >
            {data.drug_name ? "Update" : "Create"} Prescription
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Form;
