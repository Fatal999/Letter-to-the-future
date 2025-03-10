const html = document.querySelector("html");
const userButton = document.getElementById("user-button");
const headerWrapper = document.querySelector("header");

function userPopup() {
  userButton.blur();

  document.body.style.overflow = "hidden";

  const userArea = document.createElement("div");

  userArea.classList.add(
    "fixed",
    "flex",
    "inset-[0]",
    "z-[10]",
    "column",
    "justify-center",
    "items-center",
  );

  const userAreaOverlay = document.createElement("div");

  userAreaOverlay.classList.add("absolute", "inset-[0]", "bg-black/50");

  const userAreaWrapper = document.createElement("div");

  userAreaWrapper.classList.add(
    "absolute",
    "flex",
    "w-[320px]",
    "md:w-[700px]",
    "xl:w-[850px]",
    "max-h-[80vh]",
    "overflow-auto",
    "hide-scrollbar",
  );

  const userText = document.createElement("p");

  if (html.lang === "ru") {
    userText.innerHTML =
      "Пользовательское соглашение<br/> 1. Общие положения<br/> 1.1. Сайт Letter to the Future предоставляет пользователям возможность отправлять письма в будущее. Используя сайт, вы соглашаетесь с условиями данного соглашения.<br/> 1.2. Администрация сайта может изменять условия соглашения без предварительного уведомления пользователей.<br/> 2. Использование сайта<br/> 2.1. Вы обязуетесь использовать сайт только для законных целей и не нарушать права других пользователей.<br/> 2.2. Вы несете ответственность за информацию, которую размещаете на сайте, и обязуетесь соблюдать законы и нормы.<br/> 3. Конфиденциальность<br/> 3.1. Мы собираем и обрабатываем ваши персональные данные в соответствии с нашей Политикой конфиденциальности. Мы гарантируем их безопасность и используем их только для предоставления услуг.<br/> 4. Ответственность<br/> 4.1. Мы не несем ответственности за любые убытки, связанные с использованием сайта, в том числе за потерю данных или упущенную выгоду.<br/> 4.2. Вы несете ответственность за содержание материалов, размещенных вами на сайте.<br/> 5. Заключительные положения 5.1.<br/> Все споры решаются в соответствии с законодательством.<br/> 5.2. Используя сайт, вы подтверждаете, что согласны с условиями данного соглашения.<br/> Если у вас остались вопросы, пишите авторам на GitHub.";
  } else {
    userText.innerHTML =
      "User Agreement<br/> 1. General Provisions<br/> 1.1. The Letter to the Future website provides users with the ability to send letters to the future. By using the website, you agree to the terms of this agreement.<br/> 1.2. The website administration may change the terms of the agreement without prior notice to users.<br/> 2. Use of the Website<br/> 2.1. You agree to use the website only for lawful purposes and not to violate the rights of other users.<br/> 2.2. You are responsible for the information you post on the website and agree to comply with laws and regulations.<br/> 3. Confidentiality<br/> 3.1. We collect and process your personal data in accordance with our Privacy Policy. We guarantee their security and use them only to provide services.<br/> 4. Responsibility<br/> 4.1. We are not responsible for any damages related to the use of the site, including loss of data or lost profits.<br/> 4.2. You are responsible for the content of the materials you post on the site.<br/> 5. Final provisions 5.1.<br/> All disputes are resolved in accordance with the law.<br/> 5.2. By using the site, you confirm that you agree to the terms of this agreement.<br/> If you have any questions, write to the authors on GitHub.";
  }

  userText.classList.add(
    "font-mono",
    "text-base",
    "flex",
    "justify-center",
    "items-center",
    "text-center",
    "m-0",
    "bg-white",
    "p-10",
    "rounded-[25px]",
    "w-full",
    "h-full",
    "hide-scrollbar",
  );

  userArea.appendChild(userAreaOverlay);
  userArea.appendChild(userAreaWrapper);
  userAreaWrapper.appendChild(userText);

  headerWrapper.appendChild(userArea);

  function closeUserPopup() {
    if (headerWrapper.contains(userArea)) {
      document.body.style.overflow = "";
      headerWrapper.removeChild(userArea);
    }
  }

  userAreaOverlay.addEventListener("click", closeUserPopup);

  function pressEscape(evt) {
    if (evt.key === "Escape") {
      closeUserPopup();
    }
  }

  document.addEventListener("keydown", pressEscape);
}

userButton.addEventListener("click", userPopup);
