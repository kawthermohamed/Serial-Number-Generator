let generateBtn = document.querySelector("button");
let serialBox = document.querySelector(".serial-box ");

let serialLength = 20;
let serialContent =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$^&*1234567890";
let generatedSerialNumber = "";
generateBtn.onclick = function () {
  generatedSerialNumber = "";
  serialBox.innerHTML = "";
  for (let i = 0; i < serialLength; i++) {
    let randomIndex = Math.ceil(Math.random() * serialContent.length);

    let content = serialContent[randomIndex];

    generatedSerialNumber = generatedSerialNumber + content;
    serialBox.innerHTML = generatedSerialNumber;
  }
};
