import { useState, useEffect } from 'react';
import { db } from '../Login/firebase';
import { collection, getDocs } from 'firebase/firestore';

const JournalIndex = () => {
    const [journals, setJournals] = useState([]);
    const journalsCollectionRef = collection(db, "Journal");

    useEffect(() => {
        const getJournals = async () => {
            const data = await getDocs(journalsCollectionRef);
            setJournals(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        }
        
        getJournals();

    }, []);

        return (
            <div class="main">
                {journals.map((journal) => { return <div><h1>Content: { journal.content }</h1></div>;})}
            </div>
        )

};

export default JournalIndex;