let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let erasebtn = document.querySelector("#erase");
let clearbtn = document.querySelector("#clear");
let evaluate = document.querySelector("#equals");

let realTimeScreenValue = []; // Display

clearbtn.addEventListener("click", () => {
  // para limpar
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  currentInput.className = "currentInput";
  answerScreen.className = "answerScreen";
  answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // quando o botão clicado não é o erase
    if (!btn.id.match("erase")) {
      // para mostrar o valor pressionado
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join("");

      // para validar o resultado em tempo real
      if (btn.classList.contains("numbr_btn")) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
      }
    }
    // quando o erase é pressionado
    if (btn.id.match("erase")) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join("");
      answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
    }
    // quanto o botão clicado é a igualdade
    if (btn.id.match("equals")) {
      currentInput.className = "answerScreen";
      answerScreen.className = "currentInput";
      answerScreen.style.color = "white";
    }
    // para prevenir erros indefinidos na tela
    if (typeof eval(realTimeScreenValue.join("")) == "undefined") {
      answerScreen.innerHTML = 0;
    }
  });
});
