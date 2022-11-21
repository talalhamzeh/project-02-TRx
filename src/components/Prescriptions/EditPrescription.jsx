import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { firestore } from '../Login/firebase';
import { useFirestoreQuery} from "@react-query-firebase/firestore";
import { query, collection, getDocs, doc , docs, onSnapshot, setDoc, getDoc } from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';



const EditPrescription = ()=> {
    const { id } = useParams();
    console.log(id);
        const [prescription, setPrescription] = useState({});

            useEffect(() => {
            //     const getPresecription = async () =>{
                    const docRef = doc(db, "Prescriptions", id)
            //         const d = getDoc(docRef)
            //         console.log(d)
            console.log(docRef)

            //         setDoc(docRef,prescription)


                    onSnapshot(docRef,(snapshot)=>{
                        console.log(snapshot.docs)
                    })

            //         // db.collection("Prescriptions").doc(id).get().then(doc => {
            //         //     const newData = doc.data();
            //         //     setPrescription(newData);
            //         //     console.log(prescription);
            //         // });

            //         // const collectionRef= collection(firestore,"Prescriptions")
            //         // console.log(collectionRef)
            //         // const ref = doc(collectionRef,`${id}`)
            //         // console.log(ref)
            //         // setPrescription({...ref.data(),id: ref.id})
            //         // console.log(ref.data)
            //     }
            }, [])
            const docRef = doc(db, "Prescriptions", id)
        
        
            const updatePrescription = async() =>{
                await setDoc(docRef,{drug_name: prescription})
            }
            return(
                <div className="editPrescription">
                <input type="text" placeholder="Drug Name" onChange={(event)=>{setPrescription(event.target.value)}} />
                <button onClick={updatePrescription}>update Prescription</button>
            </div>
            )
}

export default EditPrescription;