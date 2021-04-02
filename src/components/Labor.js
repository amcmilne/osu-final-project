import React from "react";
import { Link } from "react-router-dom";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import Mobilenav from './Mobilenav';

//... create db
const db = new Dexie("laborDatabase");
db.version(1).stores({
  labor: "++id, painters, hours, notes",
});

const Labor = () => {
  //... variable to store labor cost
  const laborCost = useLiveQuery(() => db.labor.toArray(), []);
  if (!laborCost) return null;

  //... add labor
  const addLaborToDb = async (event) => {
    event.preventDefault();
    const painters = document.querySelector(".item-painters").value;
    const hours = document.querySelector(".item-hours").value;
    const notes = document.querySelector(".item-notes").value;
    await db.labor.add({
      painters,
      hours,
      notes,
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Labor</h1>
        <br />
        <form
          className="add-item-form"
          onSubmit={(event) => addLaborToDb(event)}
        >
          <label for="NumberOfPainters"> Number of Painters </label>
          <input
            type="number"
            className="item-painters"
            placeholder="Number of Painters"
          />
          <br />
          <label for="EstimatedHours"> Estimated Labor Hours </label>
          <input
            type="number"
            className="item-hours"
            placeholder="Number of Hours"
          />
          <br />
          <br />
          <br />
          <h1>Labor Notes</h1>
          <textarea
            type="text"
            cols="25"
            rows="5"
            className="item-notes"
            placeholder="Add text here!!"
          ></textarea>
          <br />

          <button type="submit" className="waves-effect waves-light btn center">
            Add Labor
          </button>
        </form>
        <Mobilenav back="/materials" next="/quote" name="Quote"/>
      </div>
    </div>
  );
};

export default Labor;
