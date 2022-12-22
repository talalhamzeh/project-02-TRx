import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import "./prescription.css";

const IndexDisplay = ({ prescriptions, toShow, toNew, toUpdate }) => {
  // const prescriptions = props.data
  // console.log(prescriptions);
  return (
    <div className="index">
      {prescriptions.map((prescription) => {
        return (
          <div key={prescription.div}>
            <h1 onClick={(event) => toShow(prescription)} class="prescription">
              {prescription.script_name}{" "}
            </h1>

            <Button
              onClick={(event) => toUpdate(prescription)}
              variant="contained"
              color="success"
              size="small"
              startIcon={<EditIcon />}
            >
              {prescription.medication_id ? "edit Prescription" : " "}
            </Button>
          </div>
        );
      })}

      <div class="divider" />
      <div class="text-center ">
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
    </div>
  );
};
export default IndexDisplay;
