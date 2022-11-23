import React from 'react'
const IndexDisplay = ({journal , toNew, toUpdate}) =>{
    // const prescriptions = props.data
    console.log(journal)
    return(
        <div className="index">
            {journal.map((journal) => { 
                return (
                <div key={journal.div}>
                    <h1>Drug Name: { journal.content }</h1>
                    <button onClick={ event => toUpdate(journal)}>Edit Journal</button>
                </div>
                )
            })}
            <button onClick={toNew} >New</button>
        </div>
    )
}
export default IndexDisplay