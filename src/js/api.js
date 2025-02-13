const apiForm = document.querySelector("form");
const url = "https://letter2future.ru/api/send/";
const formWrapper = document.querySelector("main > form");

const errorWrapper = document.createElement("div");
const errorWrapperOverlay = document.createElement("div");

const successWrapper = document.createElement("div");
const successWrapperOverlay = document.createElement("div");

function errorModal(error) {
  errorWrapper.classList.add("fixed", "inset-[0]", "z-[10]");

  errorWrapperOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const errorWrapperContainer = document.createElement("div");

  errorWrapperContainer.classList.add(
    "absolute",
    "top-[30%]",
    "left-[30%]",
    "flex",
    "bg-white",
  );

  const errorText = document.createElement("p");

  errorText.classList.add("w-[100px]", "h-[100px]", "font-mono");

  errorText.textContent = error;

  errorWrapper.appendChild(errorWrapperOverlay);
  errorWrapper.appendChild(errorWrapperContainer);
  errorWrapperContainer.appendChild(errorText);
  formWrapper.appendChild(errorWrapper);
}

function closeErrorModal() {
  formWrapper.removeChild(errorWrapper);
}

errorWrapperOverlay.addEventListener("click", closeErrorModal);

function successModal() {
  successWrapper.classList.add("fixed", "inset-[0]", "z-[10]");

  successWrapperOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const successWrapperContainer = document.createElement("div");

  successWrapperContainer.classList.add(
    "absolute",
    "top-[30%]",
    "left-[30%]",
    "flex",
    "bg-white",
  );

  const successText = document.createElement("p");

  successText.classList.add("w-[100px]", "h-[100px]", "font-mono");

  successText.textContent = "Thank you!";

  successWrapper.appendChild(successWrapperOverlay);
  successWrapper.appendChild(successWrapperContainer);
  successWrapperContainer.appendChild(successText);
  formWrapper.appendChild(successWrapper);
}

function closeSuccessModal() {
  formWrapper.removeChild(successWrapper);
  window.location.reload();
}

successWrapperOverlay.addEventListener("click", closeSuccessModal);

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

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        successModal();
      } else {
        return response.json().then((errorData) => {
          errorModal(errorData.text[0]);
        });
      }
    })
    .catch((error) => console.error("Error:", error));
}

apiForm.addEventListener("submit", dataSubmit);
