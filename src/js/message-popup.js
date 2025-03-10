const mailInput = document.getElementById("mail-input");
const formWrapper = document.querySelector("main > form");
const formContainer = document.querySelector("form > div");

formContainer.classList.add("relative");

function messagePopup() {
  document.body.style.overflow = "hidden";

  const mailArea = document.createElement("div");

  mailInput.disabled = true;

  mailArea.classList.add(
    "fixed",
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

  mailAreaWrapper.classList.add(
    "absolute",
    "flex",
    "w-[300px]",
    "h-[300px]",
    "md:w-[700px]",
    "md:h-[400px]",
    "xl:w-[850px]",
    "xl:h-[500px]",
  );

  const mailTextArea = document.createElement("textarea");

  mailTextArea.classList.add(
    "w-[300px]",
    "h-[300px]",
    "cursor-pointer",
    "rounded-[25px]",
    "border-[2px]",
    "pl-[15px]",
    "font-mono",
    "resize-none",
    "text-base",
    "md:w-[700px]",
    "md:h-[400px]",
    "md:text-lg",
    "xl:w-[850px]",
    "xl:h-[500px]",
  );

  mailArea.appendChild(mailAreaOverlay);
  mailArea.appendChild(mailAreaWrapper);
  mailAreaWrapper.appendChild(mailTextArea);

  mailTextArea.value = mailInput.value;

  formWrapper.appendChild(mailArea);

  function closeMessagePopup() {
    if (formWrapper.contains(mailArea)) {
      document.body.style.overflow = "";

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
