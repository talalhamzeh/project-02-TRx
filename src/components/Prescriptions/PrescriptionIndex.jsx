import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const PrescriptionIndex = () => {
    const [prescriptions, setPrescription] = useState([]);
    const prescriptionsCollectionRef = collection(db, "Prescriptions");

    useEffect(() => {
        const getPrescriptions = async () => {
            const data = await getDocs(prescriptionsCollectionRef);
            setPrescription(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        getPrescriptions();
    }, []);

        return (
            <div class="main">
                
                {prescriptions.map((prescription) => { 
                    return (
                    <div>
                        <h1>Drug Name: { prescription.drug_name }</h1>
                        {console.log(prescription)}
                        <Link to={`/prescriptions/update/${prescription.id}`}>Edit Prescription</Link>
                    </div>
                    )
                    })}

            </div>
        )

};

export default PrescriptionIndex;