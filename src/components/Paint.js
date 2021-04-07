import React from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import "./CSS/paint.scss";
import Mobilenav from "./Mobilenav";

//... create db
const db = new Dexie("paintDatabase");
db.version(1).stores({
  paint: "++id, quality, notes, squarefootage",
});

function Paint() {
  //... variable to store oaint info
  const paintInfo = useLiveQuery(() => db.paint.toArray(), []);
  if (!paintInfo) return null;

  //... add paint info
  const addPaintToDb = async (event) => {
    event.preventDefault();
    const quality = document.querySelector(".item-quality").value;
    const notes = document.querySelector(".item-notes").value;
    const squarefootage = document.querySelector(".item-squarefootage").value;
    await db.paint.add({
      quality,
      notes,
      squarefootage,
    });
  };
  return (
    <div>
      <div className="container">
        <h1>Paint Quality</h1>
        <form
          className="add-item-form"
          onSubmit={(event) => addPaintToDb(event)}
        >
          <select name="Paint Quality" className="item-quality">
            <option value="Affordable"> Affordable </option>
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
          <br />
          <h1>Paint Notes</h1>
          <textarea
            name="text"
            cols="25"
            rows="5"
            className="item-notes"
            placeholder="Add text here!!"
          ></textarea>
          <br />
          <br />
          <h1> Sq Ft of House</h1>
          <input className="item-squarefootage" placeholder="1500 sq ft"></input> <br />
          <br />
          <button type="submit" className="waves-effect waves-light btn center">
            Add Paint Info
          </button>
        </form>
        <Mobilenav back="/newbids" next="/materials" name="Materials"/>

      </div>
    </div>
  );
}

export default Paint;
