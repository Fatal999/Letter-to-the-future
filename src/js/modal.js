const mailInput = document.getElementById("mailInput");

function openModal() {
  const formWrapper = document.querySelector("main > form");
  const mailArea = document.createElement("div");

  mailArea.classList.add("fixed", "inset-[0]", "z-[10]");

  const mailAreaOverlay = document.createElement("div");

  mailAreaOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const mailAreaWrapper = document.createElement("div");

  mailAreaWrapper.classList.add("absolute", "top-[30%]", "left-[30%]", "flex");

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

  formWrapper.appendChild(mailArea);

  function closeModal() {
    formWrapper.removeChild(mailArea);
  }

  mailAreaOverlay.addEventListener("click", closeModal);
}

mailInput.addEventListener("click", openModal);
