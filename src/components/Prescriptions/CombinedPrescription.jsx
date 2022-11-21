import IndexDisplay from './IndexDisplay'
import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import NewPrescription from './NewPrescription';
import { useAuth} from "../Login/firebase"; 


const CombinedPrescription = (props)=>{
    const currentUser = useAuth(); 
    const [indexState, setIndexState] = useState(true)
    const [newState, setNewState] = useState(false)
    const [updatestate, setUpdateState] = useState(false)
    const [showState, setShowState] = useState(false)
    const [prescriptions, setPrescriptions] = useState([]);
    const prescriptionsCollectionRef = collection(db, "Prescriptions");
    const [display,setDisplay] = useState()

    const handleNew=()=>{
        setDisplay([<NewPrescription getPrescriptions={getPrescriptions}/>])
    }

    const getPrescriptions = async () => {
        const data = await getDocs(prescriptionsCollectionRef);
        setPrescriptions(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getPrescriptions()
    },[]);

    // if (!currentUser){
    //     // add redirect to login page.
    //     props.history.push("/login")
    // }
    if (indexState && prescriptions.length>0){
        console.log(prescriptions ,prescriptions.length)
        return(
            <IndexDisplay prescriptions={prescriptions}/>
        )
    }
    if(indexState){
        return(
            <p>Loading..</p>
        )
    }
    


}

export default CombinedPrescription