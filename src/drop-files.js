export const getAttachmentsInput = () => document.querySelector("#attachments");
const getDropArea = () => document.querySelector(".drop-area");

export function initializeAttachmentsFeature() {
  getDropArea().addEventListener("dragover", (e) => e.preventDefault());

  getDropArea().addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      getAttachmentsInput().files = e.dataTransfer.files;
    }
  });
}
