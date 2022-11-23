import IndexDisplay from './IndexDisplay'
import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs } from 'firebase/firestore';
import NewJournal from './NewJournal';
import { useAuth} from "../Login/firebase"; 
import UpdateJournal from './UpdateJournal'

const Journals = (props)=>{
    const currentUser = useAuth(); 
    const [journal,setJournal]= useState({})
    const [indexState, setIndexState] = useState(true)
    const [newState, setNewState] = useState(false)
    const [updateState, setUpdateState] = useState(false)
    const [showState, setShowState] = useState(false)
    const [journals, setJournals] = useState([]);
    const journalsCollectionRef = collection(db, "Journal");

    const getJournals = async () => {
        const data = await getDocs(journalsCollectionRef);
        setJournals(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    useEffect(() => {
        getJournals()
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
    const toUpdate = (journal) => {
        setJournal(journal)
        console.log(journal)
        setIndexState(false);
        setNewState(false);
        setUpdateState(true);
        setShowState(false);
    }

    // if (!currentUser){
    //     // add redirect to login page.
    //     props.history.push("/login")
    // }
    if (indexState && journals.length>0){
        console.log(journals ,journals.length)
        return(

            <IndexDisplay journals={journals} toNew={toNew} toUpdate={toUpdate}/>

        )
    }
    if(indexState){
        return(
            <p>Loading..</p>
        )
    }

    if (newState){
        return(
            <NewJournal toIndex={toIndex}/>
        )
    }
    if(updateState){
        return (
            <UpdateJournal journal={journal} toIndex={toIndex}/>
        )
    }
}

export default Journals