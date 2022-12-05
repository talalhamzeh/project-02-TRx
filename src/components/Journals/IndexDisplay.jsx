import React, { useState } from "react";
import "./journal.css";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";

const IndexDisplay = ({ journals, toNew, toUpdate, toShow }) => {
  // const prescriptions = props.data

  return (
    <div className="index">
      {journals.map((journal) => {
        // console.log(journal)
        return (
          <div key={journal.div}>
            <span onClick={(event) => toShow(journal)} class="journal">
              <i> {journal.timestamp} </i>
              <br></br>
            </span>
            <Button
              onClick={(event) => toUpdate(journal)}
              variant="contained"
              color="success"
              size="small"
              startIcon={<EditIcon />}
            >
              Edit Journal
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
          New Journal
        </Button>
      </div>
    </div>
  );
};
export default IndexDisplay;
