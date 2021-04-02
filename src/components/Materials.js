import React from 'react';
import { Link } from "react-router-dom";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

//... create db
const db = new Dexie("materialsDatabase");
db.version(1).stores({
  materials: "++id, maskingplastic, maskingpaper, tape, caulk, primer",
});

const Materials = () => {
    //... variable to store material info
    const materialReq = useLiveQuery(() => db.materials.toArray(), []);
    if (!materialReq) return null;
  
    //... add materials
    const addMaterialsToDb = async (event) => {
      event.preventDefault();
      const maskingplastic = document.querySelector(".item-maskingplastic").value;
      const maskingpaper = document.querySelector(".item-maskingpaper").value;
      const tape = document.querySelector(".item-tape").value;
      const caulk = document.querySelector(".item-caulk").value;
      const primer = document.querySelector(".item-primer").value;
      await db.materials.add({
          maskingplastic,
          maskingpaper,
          tape,
          caulk,
          primer,
      });
    };
    return (
        <div>
            <div className="container">

            <h1>Materials</h1>  
            <form
              className="add-item-form"
              onSubmit={(event) => addMaterialsToDb(event)}
            >  
            <label for="MaskingPastic"> Masking Plastic </label>
                 <input type="number" className="item-maskingplastic" placeholder="Rolls of Plastic"/><br/>
             <label for="MaskingPaper"> Masking Paper </label>
                 <input type="number" className="item-maskingpaper" placeholder="Rolls of Paper"/><br/>
             <label for="Tape"> Tape </label>
                 <input type="number" className="item-tape" placeholder="Rolls of Tape"/><br/>
             <label for="Caulking">Caulking </label>
                 <input type="number" className="item-caulk" placeholder="Tubes of Caulk"/><br/>
             <label for="Primer"> Primer </label>
                 <input type="number" className="item-primer" placeholder="Cans of Primer"/><br/><br/>

                 <button type="submit" className="waves-effect waves-light btn center">
            Add Materials
          </button>
          </form>
 
             <div>
                 <button> <Link to="/paint"> Back</Link></button>
                 <button> <Link to="/labor"> Labor</Link></button>
             </div>
 
            </div>
 
        </div>
    )
 }
 
 export default Materials;
