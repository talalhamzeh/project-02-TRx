import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";

const CreateMedication = () => {
  const [newMedication, setNewMedication] = useState("");
  const [medicationData, setMedicationData] = useState({});
  const [medicationDataTwo, setMedicationDataTwo] = useState({});
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const medicationsCollectionRef = collection(db, "Medications");

  const createMedication = async () => {
    await addDoc(medicationsCollectionRef, {
      ...medicationData,
      ...medicationDataTwo,
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.fda.gov/drug/drugsfda.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=zoloft"
        );
        setMedicationDataTwo({
          brandName: response.data.results[0].openfda.brand_name[0],
          genericName: response.data.results[0].openfda.generic_name[0],
        });
        console.log(response.data.results[0].openfda);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoaded(true);
      }
    })();

    (async () => {
      try {
        const response = await axios.get(
          "https://api.fda.gov/drug/label.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=zoloft"
        );
        setMedicationData({
          adverseEffects: response.data.results[0].adverse_reactions[0],
          description: response.data.results[0].description[0],
        });
        console.log(response.data.results[0]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return (
    <div className="createMedication">
      <input
        type="text"
        placeholder="Medication Name"
        onChange={(event) => {
          setNewMedication(event.target.value);
        }}
      />
      <button onClick={createMedication}>Create Medication</button>
    </div>
  );
};

export default CreateMedication;
