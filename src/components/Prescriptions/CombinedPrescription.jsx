import IndexDisplay from "./IndexDisplay";
import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import NewPrescription from "./NewPrescription";
import { useAuth } from "../Login/firebase";
import UpdatePrescription from "./UpdatePrescription";
import axios from "axios";
import Show from "./Show";
import Login from "../Login/Login";

const CombinedPrescription = (props) => {
  const currentUser = useAuth();
  const [prescription, setPrescription] = useState({});
  const [indexState, setIndexState] = useState(true);
  const [newState, setNewState] = useState(false);
  const [updateState, setUpdateState] = useState(false);
  const [showState, setShowState] = useState(false);
  const [prescriptions, setPrescriptions] = useState([]);
  const prescriptionsCollectionRef = collection(db, "Prescriptions");

  const getUIDList = async () => {
    const q = query(
      prescriptionsCollectionRef,
      where("UID", "==", currentUser.uid)
    );
    console.log(q);
    const querySnapshot = await getDocs(q);
    const qArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      qArray.push({ ...doc.data(), id: doc.id });
      console.log(doc.id, " => ", doc.data());
      //
    });
    console.log(qArray);
    setPrescriptions(qArray);
  };

  useEffect(() => {
    getUIDList();
  }, [currentUser]);

  const toIndex = () => {
    setIndexState(true);
    setNewState(false);
    setUpdateState(false);
    setShowState(false);
  };
  const toNew = () => {
    setIndexState(false);
    setNewState(true);
    setUpdateState(false);
    setShowState(false);
  };

  const toShow = (prescription) => {
    setPrescription(prescription);
    setIndexState(false);
    setNewState(false);
    setUpdateState(false);
    setShowState(true);
  };
  const toUpdate = (prescription) => {
    setPrescription(prescription);
    console.log(prescription);
    setIndexState(false);
    setNewState(false);
    setUpdateState(true);
    setShowState(false);
  };
  if (!currentUser) {
    return <Login />;
  }

  if (indexState && prescriptions.length > 0) {
    console.log(prescriptions, prescriptions.length);
    return (
      <div>
        <IndexDisplay
          prescriptions={prescriptions}
          toShow={toShow}
          toNew={toNew}
          toUpdate={toUpdate}
        />
      </div>
    );
  }
  if (indexState && !currentUser) {
    return <p>Loading..</p>;
  }
  if (indexState && currentUser) {
    return (
      <IndexDisplay
        prescriptions={prescriptions}
        toNew={toNew}
        toUpdate={toUpdate}
        toShow={toShow}
      />
    );
  }

  if (newState) {
    return <NewPrescription toIndex={toIndex} />;
  }
  if (updateState) {
    return <UpdatePrescription prescription={prescription} toIndex={toIndex} />;
  }
  if (showState) {
    return (
      <Show prescription={prescription} toShow={toShow} toIndex={toIndex} />
    );
  }
};

export default CombinedPrescription;
