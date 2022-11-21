import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs } from 'firebase/firestore';

const MedicationIndex = () => {
    const [medications, setMedications] = useState([]);
    const medicationsCollectionRef = collection(db, "Medications");

    useEffect(() => {
        const getMedications = async () => {
            const data = await getDocs(medicationsCollectionRef);
            console.log(data.docs);
            setMedications(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        
        getMedications();

    }, []);

        return (
            <div class="main">
                {medications.map((medication) => { return <div><h1>Name: { medication.brand_name }</h1></div>;})}
            </div>
        )

};

export default MedicationIndex;