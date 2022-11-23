import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
const IndexDisplay = ({prescriptions = [{drug_name: "Hello"}] ,toShow, toNew, toUpdate}) =>{
=======
const IndexDisplay = ({prescriptions ,toShow, toNew, toUpdate}) =>{
>>>>>>> f4df6c056d8beb1bdbd2a2d360be53078d1f2ffe
    // const prescriptions = props.data
    console.log(prescriptions)
    return(
        <div className="index">
            {prescriptions.map((prescription) => { 
                return (
                <div key={prescription.div}>
                    <h1 onClick= {event => toShow(prescription) } >{ prescription.drug_name } </h1>
                    <h1>Drug Name: { prescription.drug_name }</h1>

                    
                    <button onClick={ event => toUpdate(prescription)}>Edit Prescription</button>
                </div>
                )
            })}
            <button onClick={toNew} >New</button>
        </div>
    )
}
export default IndexDisplay

