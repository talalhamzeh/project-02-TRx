import React from 'react'
import { Link } from 'react-router-dom'
const IndexDisplay = ({prescriptions = [{drug_name: "Hello"}] , handleEdit}) =>{
    // const prescriptions = props.data
    console.log(prescriptions)
    return(
        <div className="index">
            {prescriptions.map((prescription) => { 
                return (
                <div key={prescription.div}>
                    <h1>Drug Name: { prescription.drug_name }</h1>
                    <button onClick={ event => handleEdit(prescription)}>Edit Prescription</button>
                </div>
                )
            })}
            <button></button>
        </div>
    )
}
export default IndexDisplay