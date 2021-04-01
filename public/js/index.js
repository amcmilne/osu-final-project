let client = [];

fetch("api/clients")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    client = data; //save db data

    populateEmail();
    populateTable();
  });

function populateEmail() {
  //narrow down to single email
  let clientSelect = client.reduce((clientSelect, t) => {
    return clientSelect + parseInt(t.value);
  }, 0);

  let clientSelectEl = document.querySelector("#client");
  clientSelectEl.textContent = clientSelect;
}
function populateTable() {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";

  client.forEach((addClient) => {
    //create and populate table
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${addClient.email}<td>
    <td>${addClient.value}<td>
     `;
    tbody.appendChild(tr);
  });
}

function sendClient() {
  // send data to populate
  let nameEl = document.querySelector("t-name");
  let emailEl = document.querySelector("t-email");
  let addressEl = document.querySelector("t-address");
  let errorEl = document.querySelector(".form .error");

  if (emailEl.value === "" || nameEl.value === "" ||addressEl.value === "") {
    //validation
    errorEl.textContent = "missing info";
    return;
  } else {
    errorEl.textContent = "";
  }

  let addClient = {
    //create new client record
    name: nameEl.value,
    address: addressEl.value,
    email: emailEl.value,
    
  };

  client.unshift(addClient);

  populateEmail(); //populate UI
  populateTable();

  fetch("/api/clients", {
    //send to server
    method: "POST",
    body: JSON.stringify(client),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.errors) {
        errorEl.textContent = "Missing Information";
      } else {
        // clear form
        nameEl.value = "";
        addressEl.value = "";
        emailEl.value = "";
      }
    })
    .catch((err) => {
      saveRecord(addClient);

      nameEl.value = "";
      addressEl.value = "";
      emailEl.value = "";
    });
}

document.querySelector("#add-btn").onclick = function () {
  sendClient(true);
};

document.querySelector("#sub-btn").onclick = function () {
  sendClient(false);
};
