const mailInput = document.getElementById("mail-input");
const formWrapper = document.querySelector("main > form");
const formContainer = document.querySelector("form > div");

formContainer.classList.add("relative");

function messagePopup() {
  const mailArea = document.createElement("div");

  mailInput.disabled = true;

  mailArea.classList.add(
    "absolute",
    "flex",
    "inset-[0]",
    "z-[10]",
    "column",
    "justify-center",
    "items-center",
  );

  const mailAreaOverlay = document.createElement("div");

  mailAreaOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const mailAreaWrapper = document.createElement("div");

  mailAreaWrapper.classList.add("absolute", "flex", "w-[500px]", "h-[500px]");

  const mailTextArea = document.createElement("textarea");

  mailTextArea.classList.add(
    "w-[500px]",
    "h-[500px]",
    "cursor-pointer",
    "rounded-[25px]",
    "border-[8px]",
    "pl-[15px]",
    "font-mono",
    "resize-none",
  );

  mailArea.appendChild(mailAreaOverlay);
  mailArea.appendChild(mailAreaWrapper);
  mailAreaWrapper.appendChild(mailTextArea);

  mailTextArea.value = mailInput.value;

  formWrapper.appendChild(mailArea);

  function closeMessagePopup() {
    if (formWrapper.contains(mailArea)) {
      mailInput.value = mailTextArea.value;

      mailInput.disabled = false;

      formWrapper.removeChild(mailArea);
    }
  }

  mailAreaOverlay.addEventListener("click", closeMessagePopup);

  function pressEnter(evt) {
    if (evt.key === "Enter") {
      closeMessagePopup();
    }
  }

  document.addEventListener("keydown", pressEnter);
}

mailInput.addEventListener("click", messagePopup);
