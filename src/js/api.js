const apiForm = document.querySelector("form");
const url = "http://141.8.193.209/api/send/";
const mailInput = document.getElementById("mail-input").value;
const mailField = document.getElementById("mail-field").value;
const deliverDate = document.getElementById("deliver-date").value;
const privateCheck = document.getElementById("private").checked;

const data = {
  text: mailInput,
  email_address: mailField,
  date: `${deliverDate}T12:00:00+03:00`,
  private: privateCheck,
};

function dataSubmit(evt) {
  evt.preventDefault();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("OK:", data))
    .catch((error) => console.error("Error:", error));
}

apiForm.addEventListener("submit", dataSubmit);
