import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";
<<<<<<< HEAD
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
=======
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
>>>>>>> 3dbdc6e519f04fdde6b6d0eee790bae92d1691f3

const CreateMedication = () => {
  const [newMedication, setNewMedication] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [medications, setMedications] = useState({});
  const medicationsCollectionRef = collection(db, "Medications");

  useEffect(() => {
    const getMedications = async () => {
      const data = await getDocs(medicationsCollectionRef);
      console.log(data.docs);
      setMedications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMedications();
  }, []);

  let medicationData = {};
  let medicationDataTwo = {};

  const createMedication = () => {
    addDoc(medicationsCollectionRef, {
      ...medicationDataTwo,
      ...medicationData,
    });
  };

  const _handleNew = () => {
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

    Promise.all([promiseOne, promiseTwo])
      .then(() => {
        let medicationsBrandName = [];
        setError("");
        for (let i = 0; i < medications.length; i++) {
          medicationsBrandName.push(medications[i].brandName);
          console.log(medicationsBrandName);
        }
        if (medicationsBrandName.includes(medicationData.brandName)) {
          setError("Already in database.");
        } else {
          createMedication();
        }
      })
      .catch((error) => {
        setError("No data found.");
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
<<<<<<< HEAD
      <div>
        <Button startIcon={<AddBoxIcon />}
          variant="contained"
          color="success"
          size="small"
          onClick={_handleNew}
        >
          Create Medication
       </Button>

       </div>
      
=======
      <Button
        startIcon={<AddBoxIcon />}
        onClick={_handleNew}
        variant="contained"
        color="success"
        size="small"
      >
        Create Medication
      </Button>

>>>>>>> 3dbdc6e519f04fdde6b6d0eee790bae92d1691f3
      <div className="errors">
        <p>{error}</p>
      </div>
    </div>
  );
};

export default CreateMedication;
