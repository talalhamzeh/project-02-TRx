import React from "react";

const Show = ({ prescription, toShow, toIndex }) => {
  return (
    <div key={prescription.div}>
      <ul> Daily Dosage : {prescription.daily_dosage} </ul>
      <ul> Daily Strength :{prescription.dose_strength} </ul>
      <ul> Number of refills :{prescription.refills} </ul>
      <ul> Dail Doses :{prescription.daily_dosage} </ul>
      <ul> Doses per refill :{prescription.dose_strength} </ul>
      <ul>Refill Date :{prescription.refill_date} </ul>
    </div>
  );
};
export default Show;
