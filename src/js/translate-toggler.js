import header from "../js/translate";
import main from "../js/translate";
import footer from "../js/translate";

const togglerButton = document.getElementById("language-toggler");
const html = document.querySelector("html");

const headerObject = header.header;
const mainObject = main.main;
const footerObject = footer.footer;

const headerTitle = document.querySelector("div > h1");
const publicButton = document.getElementById("public-button");
const userButton = document.getElementById("user-button");
const authorsButton = document.getElementById("authors-button");

const mainTitle = document.querySelector("main > h1");
const mainDescription = document.querySelector("main > p");
const mailInput = document.getElementById("mail-input");
const submitButton = document.getElementById("submit-button");
const deliverInTitle = document.getElementById("deliver-in");
const audienceTitle = document.getElementById("your-audience");
const privateCheck = document.querySelector("div > label");
const mailField = document.getElementById("mail-field");

const footerTitle = document.querySelector("footer > div > h1");
const footerCopyright = document.querySelector("footer > span");

function toggleLanguage() {
  html.lang = html.lang === "ru" ? "en" : "ru";

  if (html.lang === "en") {
    headerTitle.textContent = headerObject["title-en"];
    togglerButton.textContent = headerObject["language-toggler-en"];
    publicButton.textContent = headerObject["public-button-en"];
    userButton.textContent = headerObject["user-button-en"];
    authorsButton.textContent = headerObject["authors-button-en"];

    mainTitle.textContent = mainObject["main-title-en"];
    mainDescription.textContent = mainObject["main-description-en"];
    mailInput.placeholder = mainObject["mail-input-en"];
    submitButton.textContent = mainObject["submit-button-en"];
    deliverInTitle.textContent = mainObject["deliver-in-en"];
    audienceTitle.textContent = mainObject["your-audience-en"];
    privateCheck.textContent = mainObject["private-check-en"];
    mailField.placeholder = mainObject["mail-field-en"];

    footerTitle.textContent = footerObject["footer-title-en"];
    footerCopyright.textContent = footerObject["footer-copyright-en"];
  } else {
    headerTitle.textContent = headerObject["title-ru"];
    togglerButton.textContent = headerObject["language-toggler-ru"];
    publicButton.textContent = headerObject["public-button-ru"];
    userButton.textContent = headerObject["user-button-ru"];
    authorsButton.textContent = headerObject["authors-button-ru"];

    mainTitle.textContent = mainObject["main-title-ru"];
    mainDescription.textContent = mainObject["main-description-ru"];
    mailInput.placeholder = mainObject["mail-input-ru"];
    submitButton.textContent = mainObject["submit-button-ru"];
    deliverInTitle.textContent = mainObject["deliver-in-ru"];
    audienceTitle.textContent = mainObject["your-audience-ru"];
    privateCheck.textContent = mainObject["private-check-ru"];
    mailField.placeholder = mainObject["mail-field-ru"];

    footerTitle.textContent = footerObject["footer-title-ru"];
    footerCopyright.textContent = footerObject["footer-copyright-ru"];
  }
}

togglerButton.addEventListener("click", toggleLanguage);
