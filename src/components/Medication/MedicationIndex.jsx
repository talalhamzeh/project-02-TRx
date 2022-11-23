import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs } from "firebase/firestore";
import ShowMedication from "./ShowMedication";
import { Link } from "react-router-dom";
import axios from "axios";
import "./medication.css";

const MedicationIndex = () => {
  const [medications, setMedications] = useState([]);
  const [indexState, setIndexState] = useState(true);
  const [showState, setShowState] = useState(false);
  const [medication, setMedication] = useState({});
  const medicationsCollectionRef = collection(db, "Medications");

  const toIndex = () => {
    setIndexState(true);
    setShowState(false);
  };

  const toShow = (medication) => {
    setIndexState(false);
    setShowState(true);
    setMedication(medication);
  };

  useEffect(() => {
    const getMedications = async () => {
      const data = await getDocs(medicationsCollectionRef);
      console.log(data.docs);
      setMedications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMedications();
  }, []);

  if (indexState) {
    return (
      <div class="main">
        {medications.map((medication) => {
          return (
            <div>
              <span onClick={(event) => toShow(medication)} class="medication">
                {medication.brandName}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  if (showState) {
    return <ShowMedication toIndex={toIndex} medication={medication} />;
  }
};
// const fetchMedicationData = () => {
//   const [medicationData, setMedicationData] = useState({});
//   const [medicationDataTwo, setMedicationDataTwo] = useState({});

//   const drugName = this.props.match.params.generic_name
//   axios(`https://api.fda.gov/drug/drugsfda.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=${ drugName }`)
//   axios
//     .get(
//       "https://api.fda.gov/drug/drugsfda.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=levothyroxine"
//     )
//     .then((response) => {
//       console.log(response.data);
//       setMedicationDataTwo({brandName: response.data.results.openfda.brand_name, genericName: response.data.results.openfda.generic_name})
//     });

//   axios
//     .get(
//       "https://api.fda.gov/drug/label.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=levothyroxine"
//     )
//     .then((response) => {
//       console.log(response.data);
//       setMedicationData({adverseEffects: response.data.results.adverse_reactions})
//       this.setState(medicationDataTwo);
//     });
// };

// fetchMedicationData();

export default MedicationIndex;
