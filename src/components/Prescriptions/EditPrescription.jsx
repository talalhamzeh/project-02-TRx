import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { firestore } from '../Login/firebase';
import { useFirestoreQuery} from "@react-query-firebase/firestore";
import { query, collection, getDocs,doc } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';



const EditPrescription = ()=> {
    let id=useParams();
    console.log(id.id);
        const [prescriptions, setPrescription] = useState({});

            useEffect(() => {
                const getPresecription = async () =>{
                    const collectionRef= collection(firestore,"Prescriptions")
                    console.log(collectionRef)
                    const ref = doc(collectionRef,`${id.id}`)
                    console.log(ref)
                    // setPrescription({...ref.data(),id: ref.id})
                    // console.log(ref.data())
                }
                getPresecription()


            }, [])


    console.log(prescriptions)
    
}

export default EditPrescription;