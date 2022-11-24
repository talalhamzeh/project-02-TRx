import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
const IndexDisplay = ({
  prescriptions,
  toShow,
  toNew,
  toUpdate,
}) => {
=======
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import "./prescription.css";

const IndexDisplay = ({ prescriptions, toShow, toNew, toUpdate }) => {
>>>>>>> 928ba6ea73de04fedf29b5e8d219d087125c7cdf
  // const prescriptions = props.data
  console.log(prescriptions);
  return (
    <div className="index">
      {prescriptions.map((prescription) => {
        return (
          <div key={prescription.div}>
            <h1 onClick={(event) => toShow(prescription)} class="prescription">
              {prescription.drug_name}{" "}
            </h1>

            <Button
              onClick={(event) => toUpdate(prescription)}
              variant="contained"
              color="success"
              size="small"
              startIcon={<EditIcon />}
            >
              Edit Prescription
            </Button>
          </div>
        );
      })}
      <Button
        startIcon={<AddBoxIcon />}
        onClick={toNew}
        variant="contained"
        color="success"
        size="small"
      >
        New Prescription
      </Button>
    </div>
  );
};
export default IndexDisplay;
