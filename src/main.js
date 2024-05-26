import "./style.css";
import {
  initializeAttachmentsFeature,
  getAttachmentsInput,
  isAttachmentsFeatureEnabled,
} from "./drop-files";

const postComment = async (email, subject, message, files) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("subject", subject);
  formData.append("message", message);
  files.forEach((file) => {
    formData.append("attachments", file);
  });

  console.log("Data sent to backend: ", Object.fromEntries(formData.entries()));

  /*
  const response = await fetch("https://api.example.com/comments", {
    method: "POST",
    body: formData,
  });

  return response;
  */
};

function initializeApplication() {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = document.querySelector("#email").value;
    const subjectValue = document.querySelector("#subject").value;
    const messageValue = document.querySelector("#message").value;
    const files = Array.from(getAttachmentsInput().files);

    postComment(emailValue, subjectValue, messageValue, files);
  });

  document.querySelector("#attachments-field").innerHTML = ``;

  if (isAttachmentsFeatureEnabled()) {
    initializeAttachmentsFeature();
  }
}

initializeApplication();
