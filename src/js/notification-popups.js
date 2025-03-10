const formWrapper = document.querySelector("main > form");

const html = document.querySelector("html");

const errorWrapper = document.createElement("div");
const errorWrapperOverlay = document.createElement("div");

const successWrapper = document.createElement("div");
const successWrapperOverlay = document.createElement("div");

function errorPopup(error) {
  errorWrapper.classList.add(
    "fixed",
    "flex",
    "inset-[0]",
    "z-[10]",
    "column",
    "justify-center",
    "items-center",
  );

  errorWrapperOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const errorWrapperContainer = document.createElement("div");

  errorWrapperContainer.classList.add("absolute", "flex", "w-[250px]");

  const errorText = document.createElement("p");

  errorText.classList.add(
    "w-[250px]",
    "h-[100px]",
    "font-mono",
    "text-base",
    "flex",
    "justify-center",
    "items-center",
    "text-center",
    "text-red-500",
    "m-[0px]",
    "bg-white",
    "rounded-[25px]",
    "p-[10px]",
  );

  errorText.textContent = error;

  errorWrapper.appendChild(errorWrapperOverlay);
  errorWrapper.appendChild(errorWrapperContainer);
  errorWrapperContainer.appendChild(errorText);
  formWrapper.appendChild(errorWrapper);

  function closeErrorPopup() {
    if (formWrapper.contains(errorWrapper)) {
      formWrapper.removeChild(errorWrapper);
    }
  }

  errorWrapperOverlay.addEventListener("click", closeErrorPopup);

  function pressEscape(evt) {
    if (evt.key === "Escape") {
      closeErrorPopup();
    }
  }

  document.addEventListener("keydown", pressEscape);

  setTimeout(closeErrorPopup, 5000);
}

function successPopup() {
  successWrapper.classList.add(
    "fixed",
    "flex",
    "inset-[0]",
    "z-[10]",
    "column",
    "justify-center",
    "items-center",
  );

  successWrapperOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const successWrapperContainer = document.createElement("div");

  successWrapperContainer.classList.add("absolute", "flex", "w-[250px]");

  const successText = document.createElement("p");

  successText.classList.add(
    "w-[250px]",
    "h-[100px]",
    "font-mono",
    "flex",
    "justify-center",
    "items-center",
    "text-center",
    "text-green-500",
    "m-[0px]",
    "bg-white",
    "rounded-[25px]",
    "p-[10px]",
    "text-base",
  );

  if (html.lang === "en") {
    successText.textContent = "The letter sent, thank you!";
  } else {
    successText.textContent = "Письмо отправлено, спасибо!";
  }

  successWrapper.appendChild(successWrapperOverlay);
  successWrapper.appendChild(successWrapperContainer);
  successWrapperContainer.appendChild(successText);
  formWrapper.appendChild(successWrapper);

  function closeSuccessPopup() {
    if (formWrapper.contains(successWrapper)) {
      formWrapper.removeChild(successWrapper);
      window.location.reload();
    }
  }

  successWrapperOverlay.addEventListener("click", closeSuccessPopup);

  function pressEscape(evt) {
    if (evt.key === "Escape") {
      closeSuccessPopup();
    }
  }

  document.addEventListener("keydown", pressEscape);

  setTimeout(closeSuccessPopup, 5000);
}

export { errorPopup, successPopup };
