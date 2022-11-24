import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import BookIcon from "@mui/icons-material/Book";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const JournalForm = ({ toIndex, returnValues, data = {} }) => {
  const [content, setContent] = useState("");
  const [sideEffects, setSideEffects] = useState("");
  const [painLevels, setPainLevels] = useState("");

  return (
    <div className="form">
      <p>
        <label>
          Comments:
          <p>
            <textarea
              placeholder="Write your entry here"
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </p>
        </label>
      </p>
      <p>
        <label>
          Symptoms:
          <p>
            <textarea
              placeholder="List your side effects here"
              onChange={(event) => {
                setSideEffects(event.target.value);
              }}
            />
          </p>
        </label>
      </p>
      <p>
        <label>Pain Levels</label>
        <label>
          1{" "}
          <input
            type="radio"
            name="pain"
            value="1"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          2{" "}
          <input
            type="radio"
            name="pain"
            value="2"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          3{" "}
          <input
            type="radio"
            name="pain"
            value="3"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          4{" "}
          <input
            type="radio"
            name="pain"
            value="4"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          5{" "}
          <input
            type="radio"
            name="pain"
            value="5"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          6{" "}
          <input
            type="radio"
            name="pain"
            value="6"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          7{" "}
          <input
            type="radio"
            name="pain"
            value="7"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          8{" "}
          <input
            type="radio"
            name="pain"
            value="8"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          9{" "}
          <input
            type="radio"
            name="pain"
            value="9"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
        <label>
          10{" "}
          <input
            type="radio"
            name="pain"
            value="10"
            onChange={(event) => {
              setPainLevels(event.target.value);
            }}
          />
        </label>
      </p>
      <Button
        onClick={(event) =>
          returnValues({
            content: content,
            sideEffects: sideEffects,
            painLevel: painLevels,
          })
        }
        size="small"
        variant="contained"
        color="success"
        size="small"
        startIcon={<BookIcon />}
      >
        Create Journal Entry
      </Button>
      <Button
        size="small"
        onClick={toIndex}
        variant="contained"
        color="success"
        size="small"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
  );
};

export default JournalForm;
