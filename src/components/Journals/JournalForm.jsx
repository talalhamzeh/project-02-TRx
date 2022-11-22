import React from 'react';
import { useState } from 'react';

const JournalForm = ({returnValues, data={} })=>{
    const [content, setContent]= useState('');
    const [sideEffects, setSideEffects] = useState('');

    return(
        <div className="form">
            <input type="text" placeholder="Write your entry here" onChange={(event)=>{setContent(event.target.value)}} />
            <input type="text" placeholder="List your side effects here" onChange={(event)=>{setSideEffects(event.target.value)}} />
            <button onClick={event => returnValues({content: content, sideEffects: sideEffects})}>Create Journal Entry</button>
        </div>
    )
}
export default JournalForm;