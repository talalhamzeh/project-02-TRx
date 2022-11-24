import IndexDisplay from "./IndexDisplay";
import { useState, useEffect } from "react";
import { db } from "../Login/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import NewJournal from "./NewJournal";
import { useAuth } from "../Login/firebase";
import UpdateJournal from "./UpdateJournal";
import Login from "../Login/Login";
import ShowJournal from "./ShowJournal";

const Journals = (props) => {
  const [journal, setJournal] = useState({});
  const [indexState, setIndexState] = useState(true);
  const [newState, setNewState] = useState(false);
  const [updateState, setUpdateState] = useState(false);
  const [showState, setShowState] = useState(false);
  const [journals, setJournals] = useState([]);

  const currentUser = useAuth();
  const journalsCollectionRef = collection(db, "Journal");
  const getJournals = async () => {
    const data = await getDocs(journalsCollectionRef);
    setJournals(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getUIDList = async () => {
    const journalsCollectionRef = collection(db, "Journal");
    const q = query(journalsCollectionRef, where("UID", "==", currentUser.uid));
    console.log(q);
    const querySnapshot = await getDocs(q);
    const qArray = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      qArray.push(doc.data());
      console.log(doc.id, " => ", doc.data());
      //
    });
    console.log(qArray);
    setJournals(qArray.map((doc) => ({ ...doc })));
  };

  //   if (currentUser) {
  //     getUIDList();
  //   }

  useEffect(() => {
    if (currentUser) {
      getUIDList();
    }
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
  const toUpdate = (journal) => {
    setJournal(journal);
    console.log(journal);
    setIndexState(false);
    setNewState(false);
    setUpdateState(true);
    setShowState(false);
  };
  const toShow = (journal) => {
    setJournal(journal);
    console.log(journal);
    setIndexState(false);
    setNewState(false);
    setUpdateState(false);
    setShowState(true);
  };
  if (!currentUser) {
    return <Login />;
  }
  if (indexState && journals.length > 0) {
    return (
      <IndexDisplay
        journals={journals}
        toNew={toNew}
        toUpdate={toUpdate}
        toShow={toShow}
      />
    );
  }
  if (indexState) {
    return <p>Loading..</p>;
  }

  if (newState) {
    return <NewJournal toIndex={toIndex} />;
  }
  if (updateState) {
    return <UpdateJournal journal={journal} toIndex={toIndex} />;
  }
  if (showState) {
    return <ShowJournal journal={journal} toIndex={toIndex} />;
  }
};
export default Journals;
