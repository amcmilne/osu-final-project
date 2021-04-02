import React from 'react';
import { Link } from "react-router-dom";
import Dexie from 'dexie';
import { useLiveQuery } from "dexie-react-hooks";

  //... create db
  const db = new Dexie("bidDatabase");
  db.version(1).stores({
    clients: "++id, name, address, email",
  })

const Newbids = () => {
//... variable to store clients
  const allClients = useLiveQuery(() => db.clients.toArray(), []);
  if (!allClients) return null
  
  //... add client
  const addClientToDb = async (event) => {
    event.preventDefault()
    const name = document.querySelector(".item-name").value;
    const address = document.querySelector(".item-address").value;
    const email = document.querySelector(".item-email").value;
    await db.clients.add({
      name,
      address,
      email,
      clientBeenSaved: false,
    })
  }

  // //... remove client
  // const removeClientFromDb = async (id) => {
  //   await db.items.delete(id);
  // };

  // //...update client
  // const markAsSaved = async (id, event) => {
  //   if (event.target.checked) {
  //     await db.clients.update(id, { clientBeenSaved: true });
  //   } else {
  //     await db.clients.update(id, { clientBeenSaved: false });
  //   }
  // };

  //...variable to hold client data
  const clientData = allClients.map(
    ({ id, name, address, email }) => (
      <div className="row" key={id}>
        <p className="col s3">
          <label>
            <span className="black-text">{name}</span>           
          </label>
        </p>
        <p className="col s3">
          <label>
          <span className="black-text">{address}</span>         
          </label>
        </p>
        <p className="col s3">
          <label>
          <span className="black-text">{email}</span>         
          </label>
        </p>
      
            
      </div>
    )
  )

  return (
    <div>
      <div className="container">
        <h3 className="text center-align">New Bids</h3>
        <form
          className="add-item-form"
          onSubmit={(event) => addClientToDb(event)}
        >
          <input
            type="text"
            className="item-name"
            placeholder="Name"
            required
          />
          <input
            type="text"
            className="item-address"
            placeholder="Address"
            required
          />
          <input
            type="text"
            className="item-email"
            placeholder="Email"
            required
          />
          <button type="submit" className="waves-effect waves-light btn right">
            Add Client
          </button>
        </form>
        {allClients.length > 0 && 
          <div className="card">
            <div className="card-content-round">
              <form action="#">
                {clientData}
                </form>
            </div>
          </div>
        }
         <button>
       <Link to="/main"> Back</Link>
     </button>
     <button>
       <Link to="/paint"> Paint</Link>
       </button>
      </div>
      
       </div>
    )
}

export default Newbids;