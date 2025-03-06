const publicButton = document.getElementById("public-button");
const headerWrapper = document.querySelector("header");
const url = "https://letter2future.ru/api/public-emails/";

function publicMessages() {
  publicButton.blur();

  document.body.style.overflow = "hidden";

  const messageArea = document.createElement("div");

  messageArea.classList.add(
    "fixed",
    "flex",
    "inset-[0]",
    "z-[10]",
    "column",
    "justify-center",
    "items-center",
  );

  const messageAreaOverlay = document.createElement("div");

  messageAreaOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const messageAreaWrapper = document.createElement("div");

  messageAreaWrapper.classList.add(
    "absolute",
    "flex",
    "flex-col",
    "bg-white",
    "rounded-[25px]",
    "w-[320px]",
    "h-[500px]",
  );

  messageArea.appendChild(messageAreaOverlay);
  messageArea.appendChild(messageAreaWrapper);

  headerWrapper.appendChild(messageArea);

  function createMessages(data) {
    data.results.forEach((el) => {
      const messageText = document.createElement("p");
      messageText.textContent = el.text;
      messageAreaWrapper.appendChild(messageText);
    });
  }

  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Error", response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Server:", data);
      createMessages(data);
    })
    .catch((error) => console.error("Ошибка запроса:", error));

  function closeMessagePopup() {
    if (headerWrapper.contains(messageArea)) {
      publicButton.blur();
      document.body.style.overflow = "";
      headerWrapper.removeChild(messageArea);
    }
  }

  messageAreaOverlay.addEventListener("click", closeMessagePopup);

  function pressEscape(evt) {
    if (evt.key === "Escape") {
      closeMessagePopup();
    }
  }

  document.addEventListener("keydown", pressEscape);
}

publicButton.addEventListener("click", publicMessages);
