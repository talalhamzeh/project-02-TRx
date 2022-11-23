import React from "react";
const IndexDisplay = ({ journals, toNew, toUpdate }) => {
  // const prescriptions = props.data
  console.log(journals);
  return (
    <div className="index">
      {journals.map((journal) => {
        return (
          <div key={journal.div}>
            <h1 onClick={(event) => journal.id}>
              Drug Name: {journal.content}
            </h1>
            <button onClick={(event) => toUpdate(journal)}>Edit Journal</button>
          </div>
        );
      })}
      <button onClick={toNew}>New</button>
    </div>
  );
};
export default IndexDisplay;
