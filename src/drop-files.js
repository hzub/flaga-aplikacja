export const getAttachmentsInput = () => document.querySelector("#attachments");
const getDropArea = () => document.querySelector(".drop-area");

export function initializeAttachmentsFeature() {
  document.querySelector("#attachments-field").innerHTML = `
  <label for="attachments" class="field-label">
    Attachments
    <div class="drop-area">Drop items here</div>
  </label>
  <input type="file" id="attachments" multiple class="w-full" />
  `;

  getDropArea().addEventListener("dragover", (e) => e.preventDefault());

  getDropArea().addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      getAttachmentsInput().files = e.dataTransfer.files;
    }
  });
}

export function isAttachmentsFeatureEnabled() {
  return true;
}
