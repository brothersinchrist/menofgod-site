// public/js/social.js

function pageMessage(title, message){
  if (typeof openModal === "function") {
    openModal(
      `${title}`,
      `${message}`
    );
  }
}
