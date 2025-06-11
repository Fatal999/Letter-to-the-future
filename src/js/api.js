import { errorPopup, successPopup } from "./notification-popups.js";

const apiForm = document.querySelector("form");
const url = "https://letter2future.ru/api/send/";

function dataSubmit(evt) {
  evt.preventDefault();

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

  fetch("https://letter2future.ru/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        successPopup();
      } else {
        return response.json().then((errorData) => {
          Object.values(errorData)
            .flat()
            .forEach((error) => errorPopup(error));
          console.error("Server returned error:", errorData);
        });
      }
    })
    .catch((error) => {
      errorPopup("A network error has occurred. Please try again later.");
      console.error("Fetch error:", error);
    });
}

apiForm.addEventListener("submit", dataSubmit);
