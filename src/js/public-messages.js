const publicButton = document.getElementById("public-button");
const headerWrapper = document.querySelector("header");
const url = "https://letter2future.ru/api/public-emails/";
let nextUrl = "";
let dataNext;
let prevUrl = "";

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
    "max-h-[80vh]",
    "overflow-auto",
    "hide-scrollbar",
    "p-[10px]",
  );

  messageArea.appendChild(messageAreaOverlay);
  messageArea.appendChild(messageAreaWrapper);

  headerWrapper.appendChild(messageArea);

  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("flex", "w-[320px]", "justify-around");

  const prevButton = document.createElement("button");
  prevButton.innerHTML = "<";
  prevButton.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "font-mono",
    "cursor-pointer",
    "color-black",
    "bg-transparent",
    "border-[2px]",
    "w-[30px]",
    "h-[30px]",
    "rounded-[25px]",
  );
  prevButton.disabled = "true";

  const nextButton = document.createElement("button");
  nextButton.innerHTML = ">";
  nextButton.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "font-mono",
    "cursor-pointer",
    "color-black",
    "bg-transparent",
    "border-[2px]",
    "w-[30px]",
    "h-[30px]",
    "rounded-[25px]",
  );

  messageAreaWrapper.appendChild(buttonWrapper);

  buttonWrapper.appendChild(prevButton);
  buttonWrapper.appendChild(nextButton);

  function createMessages(data) {
    data.results.forEach((el) => {
      const messageText = document.createElement("p");
      messageText.textContent = el.text;
      messageText.classList.add("font-mono", "text-center");
      messageAreaWrapper.appendChild(messageText);
    });
  }

  function cleanMessages() {
    messageAreaWrapper.querySelectorAll("p").forEach((el) => {
      el.remove();
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
      createMessages(data);
      nextUrl = data.next;
      prevUrl = data.previous;
      dataNext = data;
    })
    .catch((error) => console.error("Ошибка запроса:", error));

  function nextMessagePage() {
    if (dataNext.next !== null) {
      fetch(nextUrl, {
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
          cleanMessages();
          createMessages(data);
          nextUrl = data.next;
          prevUrl = data.previous;
          dataNext = data;

          nextButton.disabled = !data.next;
          prevButton.disabled = !data.previous;
        })
        .catch((error) => console.error("Ошибка запроса:", error));
    }
  }

  function prevMessagePage() {
    if (dataNext.previous !== null) {
      fetch(prevUrl, {
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
          cleanMessages();
          createMessages(data);
          nextUrl = data.next;
          prevUrl = data.previous;
          dataNext = data;

          nextButton.disabled = !data.next;
          prevButton.disabled = !data.previous;
        })
        .catch((error) => console.error("Ошибка запроса:", error));
    }
  }

  function closeMessagePopup() {
    if (headerWrapper.contains(messageArea)) {
      publicButton.blur();
      document.body.style.overflow = "";
      headerWrapper.removeChild(messageArea);
    }
  }

  nextButton.addEventListener("click", nextMessagePage);
  prevButton.addEventListener("click", prevMessagePage);

  messageAreaOverlay.addEventListener("click", closeMessagePopup);

  function pressEscape(evt) {
    if (evt.key === "Escape") {
      closeMessagePopup();
    }
  }

  document.addEventListener("keydown", pressEscape);
}

publicButton.addEventListener("click", publicMessages);
