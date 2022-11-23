import IndexDisplay from './IndexDisplay'
import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs } from 'firebase/firestore';
import NewPrescription from './NewPrescription';
import { useAuth} from "../Login/firebase"; 
import UpdatePrescription from './UpdatePrescription'
import axios  from 'axios';

const CombinedPrescription = (props)=>{
    const currentUser = useAuth(); 
    const [prescription,setPrescription]= useState({})
    const [indexState, setIndexState] = useState(true)
    const [newState, setNewState] = useState(false)
    const [updateState, setUpdateState] = useState(false)
    const [showState, setShowState] = useState(false)
    const [prescriptions, setPrescriptions] = useState([]);


    const prescriptionsCollectionRef = collection(db, "Prescriptions");
    const getPrescriptions = async () => {
        const data = await getDocs(prescriptionsCollectionRef);
        setPrescriptions(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getPrescriptions()
    },[]);

    const toIndex = ()=>{
        setIndexState(true);
        setNewState(false);
        setUpdateState(false);
        setShowState(false)
    }
    const toNew = () => {
        setIndexState(false);
        setNewState(true);
        setUpdateState(false);
        setShowState(false)
    }
    const toUpdate = (prescription) => {
        setPrescription(prescription)
        console.log(prescription)
        setIndexState(false);
        setNewState(false);
        setUpdateState(true);
        setShowState(false);
    }
    // if (!currentUser){
    //     // add redirect to login page.
    //     props.history.push("/login")
    // }
    if (indexState && prescriptions.length>0){
        console.log(prescriptions ,prescriptions.length)
        return(
            <div>
                <h1>hello</h1>
                <IndexDisplay prescriptions={prescriptions} toNew={toNew} toUpdate={toUpdate}/>
            </div>

        )
    }
    if(indexState){
        return(
            <p>Loading..</p>
        )
    }

    if (newState){
        return(
            <NewPrescription toIndex={toIndex}/>
        )
    }
    if(updateState){
        return (
            <UpdatePrescription prescription={prescription} toIndex={toIndex}/>
        )
    }


}

export default CombinedPrescription