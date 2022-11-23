import React from "react";
import Form from "./Form"

const Show = ({prescription, toShow})=>{


    return(
        
                <div key={prescription.div}>
                    <ul> Daily Dosage :{prescription.daily_dosage}  </ul>
                    <ul> Daily Strength :{prescription.dose_strength}  </ul>

        </div>
    )
}
export default Show ;
