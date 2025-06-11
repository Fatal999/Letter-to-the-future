import header from "../js/translate.js";
import main from "../js/translate.js";
import footer from "../js/translate.js";

const togglerButton = document.getElementById("language-toggler");
const html = document.querySelector("html");

const headerObject = header.header;
const mainObject = main.main;
const footerObject = footer.footer;

const headerTitle = document.querySelector("div > h1 > a");
const publicButton = document.getElementById("public-button");
const userButton = document.getElementById("user-button");

const mainTitle = document.querySelector("main > h1");
const mainDescription = document.querySelector("main > p");
const mailInput = document.getElementById("mail-input");
const submitButton = document.getElementById("submit-button");
const deliverInTitle = document.getElementById("deliver-in");
const audienceTitle = document.getElementById("your-audience");
const privateCheck = document.querySelector("div > label > p");
const mailField = document.getElementById("mail-field");

const footerTitle = document.querySelector("footer > div > h1 > a");

function toggleLanguage() {
  html.lang = html.lang === "ru" ? "en" : "ru";

  if (html.lang === "en") {
    document.title = headerObject["title-en"];
    headerTitle.textContent = headerObject["title-en"];
    togglerButton.textContent = headerObject["language-toggler-en"];
    publicButton.textContent = headerObject["public-button-en"];
    userButton.textContent = headerObject["user-button-en"];

    mainTitle.textContent = mainObject["main-title-en"];
    mainDescription.textContent = mainObject["main-description-en"];
    mailInput.placeholder = mainObject["mail-input-en"];
    submitButton.textContent = mainObject["submit-button-en"];
    deliverInTitle.textContent = mainObject["deliver-in-en"];
    audienceTitle.textContent = mainObject["your-audience-en"];
    privateCheck.textContent = mainObject["private-check-en"];
    mailField.placeholder = mainObject["mail-field-en"];

    footerTitle.textContent = footerObject["footer-title-en"];
  } else {
    document.title = headerObject["title-ru"];
    headerTitle.textContent = headerObject["title-ru"];
    togglerButton.textContent = headerObject["language-toggler-ru"];
    publicButton.textContent = headerObject["public-button-ru"];
    userButton.textContent = headerObject["user-button-ru"];

    mainTitle.textContent = mainObject["main-title-ru"];
    mainDescription.textContent = mainObject["main-description-ru"];
    mailInput.placeholder = mainObject["mail-input-ru"];
    submitButton.textContent = mainObject["submit-button-ru"];
    deliverInTitle.textContent = mainObject["deliver-in-ru"];
    audienceTitle.textContent = mainObject["your-audience-ru"];
    privateCheck.textContent = mainObject["private-check-ru"];
    mailField.placeholder = mainObject["mail-field-ru"];

    footerTitle.innerHTML = footerObject["footer-title-ru"];
  }
}

togglerButton.addEventListener("click", toggleLanguage);
