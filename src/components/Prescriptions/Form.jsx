import React from "react";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import CombinedPrescription from "./CombinedPrescription";
const Form = ({ returnValues, data = {} }) => {
  const [drugName, setDrugName] = useState("");
  const [dosage, setDosage] = useState("");
  const [numberOfReffils, setNumberOfReffils] = useState("");
  const [dosesPerDay, setDosesPerDay] = useState("");
  const [dosesPerRefill, setDosesPerRefill] = useState("");
  const [refillDate, setRefillDate] = useState("");
 
  return (
    <div className="form">
      <input
        defaultValue={data.drug_name}
        type="text"
        placeholder="Drug Name"
        onChange={(event) => {
          setDrugName(event.target.value);
        }}
      />
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

          returnValues(
            { drug_name: drugName,
             dosage_history: dosage,
             refills: numberOfReffils,
             daily_dosage: dosesPerDay,
             dose_strength: dosesPerRefill,
             refill_date: refillDate }
             
          ) 
          


        }
      >
        { data.drug_name?  "Update" :"Create" } Prescription
      </button>
      
          </div>
  );
};
export default Form;
