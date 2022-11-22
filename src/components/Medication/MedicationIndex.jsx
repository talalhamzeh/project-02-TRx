import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs } from "firebase/firestore";
import axios from "axios";

const MedicationIndex = () => {
  const [medications, setMedications] = useState([]);
  const medicationsCollectionRef = collection(db, "Medications");

  useEffect(() => {
    const getMedications = async () => {
      const data = await getDocs(medicationsCollectionRef);
      console.log(data.docs);
      setMedications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMedications();
  }, []);

  return (
    <div class="main">
      {medications.map((medication) => {
        return (
          <div>
            <h1>Name: {medication.brand_name}</h1>
          </div>
        );
      })}
    </div>
  );
};

const fetchMedicationData = () => {
  const [medicationData, setMedicationData] = useState([]);
  // const drugName = this.props.match.params.generic_name
  // axios(`https://api.fda.gov/drug/drugsfda.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=${ drugName }`)
  axios
    .get(
      "https://api.fda.gov/drug/drugsfda.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=levothyroxine"
    )
    .then((response) => {
      console.log(response.data);
      const medicationData = Object.assign({}, this.state);
      // medicationData.drugId = response.data.openfda.;
      medicationData.brandName = response.data.results.openfda.brand_name;
      medicationData.genericName = response.data.results.openfda.generic_name;
      // this.setState(medicationData);
    });

  axios
    .get(
      "https://api.fda.gov/drug/label.json?api_key=m6seTV1TNrDCgSzAhuXtaSPo5PUYWRXKkO24SPWa&search=levothyroxine"
    )
    .then((response) => {
      console.log(response.data);
      const medicationDataTwo = Object.assign({}, this.state);
      // medicationData.activeIngredients = response.data.origin;
      medicationData.adverseEffects = response.data.results.adverse_reactions;
      // this.setState(medicationDataTwo);
    });
};

fetchMedicationData();

export default MedicationIndex;
