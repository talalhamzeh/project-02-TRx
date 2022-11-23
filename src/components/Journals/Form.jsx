import React from 'react';
import { useState } from 'react';

const JournalForm = ({returnValues, data={} })=>{
    const [content, setContent]= useState('');
    const [sideEffects, setSideEffects] = useState('');
    const [painLevels, setPainLevels]= useState('')
    

    return(
        <div className="form">
            <label>Comments: 
            <textarea placeholder="Write your entry here" onChange={(event)=>{setContent(event.target.value)}} />
            </label>
            <label>Symptoms: 
            <textarea placeholder="List your side effects here" onChange={(event)=>{setSideEffects(event.target.value)}} />
            </label>
            <label>Pain Levels</label>
                <label>1 <input type="radio" name="pain" value="1" onChange={(event)=>{setPainLevels(event.target.value)}}/></label>
                <label>2 <input type="radio" name="pain" value="2" onChange={(event)=>{setPainLevels(event.target.value)}}/></label>
                <label>3 <input type="radio" name="pain" value="3" onChange={(event)=>{setPainLevels(event.target.value)}}/></label>
                <label>4 <input type="radio" name="pain" value="4" onChange={(event)=>{setPainLevels(event.target.value)}}/></label>
                <label>5 <input type="radio" name="pain" value="5" onChange={(event)=>{setPainLevels(event.target.value)}}/></label>
                <label>6 <input type="radio" name="pain" value="6"onChange={(event)=>{setPainLevels(event.target.value)}} /></label>
                <label>7 <input type="radio" name="pain" value="7"onChange={(event)=>{setPainLevels(event.target.value)}} /></label>
                <label>8 <input type="radio" name="pain" value="8"onChange={(event)=>{setPainLevels(event.target.value)}} /></label>
                <label>9 <input type="radio" name="pain" value="9"onChange={(event)=>{setPainLevels(event.target.value)}} /></label>
                <label>10 <input type="radio" name="pain" value="10"onChange={(event)=>{setPainLevels(event.target.value)}} /></label>
            <button onClick={event => returnValues({content: content, sideEffects: sideEffects, painLevel: painLevels})}>Create Journal Entry</button>
        </div>
    )
}

export default JournalForm;