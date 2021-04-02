import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

//... create db
const db = new Dexie("quoteDatabase");
db.version(1).stores({
  quotes: "++id, paintCost, materialsCost, laborCost, quote",
});

function Quote() {
  // State variables
  const [paint, setNumber1] = useState(0);
  const [materials, setNumber2] = useState(0);
  const [labor, setNumber3] = useState(0);
  const [markup, setNumber4] = useState(0);

  const [total, setQuote] = useState(
    (Math.round((paint + materials + labor) * (1 + markup) + Number.EPSILON) *
      100) /
      100
  );

  // Function to add numbers and update total in state
  function calculateQuote() {
    setQuote(
      (Math.round((paint + materials + labor) * (1 + markup) + Number.EPSILON) *
        100) /
        100
    );
  }

  //... variable to store quote info
  const quoteData = useLiveQuery(() => db.quotes.toArray(), []);
  if (!quoteData) return null;

  //... add quote info
  const addQuoteToDb = async (event) => {
    event.preventDefault();
    var paintCost = document.querySelector(".item-paint").value;
    var materialsCost = document.querySelector(".item-materials").value;
    var laborCost = document.querySelector(".item-labor").value;
    var markup = document.querySelector(".item-markup").value;
    var quote = total;
    await db.quotes.add({
      paintCost,
      materialsCost,
      laborCost,
      markup,
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
          <label for="FinalPaintCost">
            Final Paint Cost <span>$</span>
          </label>
          <input
            type="text"
            value={paint}
            onChange={(e) => setNumber1(+e.target.value)}
            placeholder="$"
            className="item-paint"
          />
          <br />
          <label for="FinalMaterialsCost">
            Final Materials Cost <span>$</span>
          </label>
          <input
            type="text"
            value={materials}
            onChange={(e) => setNumber2(+e.target.value)}
            placeholder="$"
            className="item-materials"
          />
          <br />
          <label for="FinalLaborCost">
            Final Labor Cost <span>$</span>
          </label>
          <input
            type="text"
            value={labor}
            onChange={(e) => setNumber3(+e.target.value)}
            placeholder="$"
            className="item-labor"
          />
          <br />
          <label for="Markup">
            Mark-up (Profit) <span>%</span>
          </label>
          <input
            type="number"
            step=".01"
            value={markup}
            onChange={(e) => setNumber4(+e.target.value)}
            placeholder="%"
            className="item-markup"
          />
          <br />
          <button
            className="waves-effect waves-light btn center"
            onClick={calculateQuote}
          >
            Get Quote and Save:
          </button>
          <h3> ${total}</h3>
          <br />
          <br />
        </form>
        <div>
          <button>
            <Link to="/labor"> Back</Link>
          </button>
          <button>
            <Link to="/main"> Finish</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
