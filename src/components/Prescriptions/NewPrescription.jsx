import React from "react";
import Form from "./Form";
import { db } from "../Login/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../Login/firebase";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

const NewPrescription = ({ toIndex }) => {
  const currentUser = useAuth();
  const prescriptionsCollectionRef = collection(db, "Prescriptions");
  const createPrescription = async (data) => {
    await addDoc(prescriptionsCollectionRef, data);
  };
  const returnValues = (data) => {
    console.log(data);
    createPrescription({ ...data, UID: currentUser.uid });
    toIndex();
  };
  return (
    <div className="createPrescription">
      <h1>New Prescription</h1>
      <Form returnValues={returnValues} />

      <Button
        size="small"
        onClick={(event) => toIndex()}
        variant="contained"
        color="success"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
  );
};
export default NewPrescription;
