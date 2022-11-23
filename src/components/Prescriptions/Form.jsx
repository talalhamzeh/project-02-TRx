import React from "react";
import { useState } from "react";

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
        type="text"
        placeholder="Drug Name"
        onChange={(event) => {
          setDrugName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Dosage"
        onChange={(event) => {
          setDosage(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Number of refills"
        onChange={(event) => {
          setNumberOfReffils(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Daily Doses"
        onChange={(event) => {
          setDosesPerDay(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Doses per refill"
        onChange={(event) => {
          setDosesPerRefill(event.target.value);
        }}
      />
      <input
        type="date"
        placeholder="Refill date"
        onChange={(event) => {
          setRefillDate(event.target.value);
        }}
      />

            <button 
                onClick={event => returnValues(

                    {drug_name: drugName, 
                    dosage_history: dosage,
                    refills: numberOfReffils,
                    daily_dosage: dosesPerDay,
                    dose_strength: dosesPerRefill, 
                    refill_date: refillDate} 


                    
                )}>
                    
                Create Prescription
            </button>
        </div>
    )
}
export default Form;
