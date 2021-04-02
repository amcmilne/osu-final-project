import React from 'react';
import { Link } from "react-router-dom";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import "./CSS/theme.css"


//... create db
const db = new Dexie("quoteDatabase");
db.version(1).stores({
    quotes: "++id, paintCost, materialsCost, laborCost, quote",
});

function Quote() {
    //... variable to store quote info
  const quoteData = useLiveQuery(() => db.quotes.toArray(), []);
  if (!quoteData) return null;

  //... add quote info
  const addQuoteToDb = async (event) => {
    event.preventDefault();
    const paintCost = document.querySelector(".item-paintCost").value;
    const materialsCost = document.querySelector(".item-materialsCost").value;
    const laborCost = document.querySelector(".item-laborCost").value;
    const quote = document.querySelector(".item-quote").value;
    await db.quotes.add({
        paintCost,
        materialsCost,
        laborCost,
        quote,
    });
  };
    return (
        <div>
            <div className="container">

             <h1>Quote</h1>
             <form
          className="add-item-form"
          onSubmit={(event) => addQuoteToDb(event)}
        >
             <label for="FinalPaintCost"> Final Paint Cost <span>$</span></label>
                 <input placeholder="$1000.00" className="item-paintCost" /><br/>
             <label for="FinalMaterialsCost"> Final Materials Cost <span>$</span></label>
                 <input placeholder="$1000.00" className="item-materialsCost" /><br/>
             <label for="FinalLaborCost"> Final Labor Cost <span>$</span></label>
                 <input placeholder="$1000.00" className="item-laborCost"/><br/>
             <label for="Markup"> Mark-up (Profit) <span>$</span></label>
                 <input placeholder="$1000.00"/><br/>
 
             <h3>Final Quote :  <span>$4,000.00</span> </h3> <br/><br/>

             <button type="submit" className="waves-effect waves-light btn center">
            Save Quote
          </button>
        </form>
             <div>
                 <button> <Link to="/labor"> Back</Link></button>
                 <button> <Link to="/main"> Finish</Link></button>
             </div>
             
            </div>
            
        </div>
    )
    
 }
 
 export default Quote;
