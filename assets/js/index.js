const messageInput = document.querySelector("#message-input");
const resultMessageInput = document.querySelector("#result-message-input");

const encryptButton = document.querySelector("#encrypt-button");
const decryptButton = document.querySelector("#decrypt-button");
const copyButton = document.querySelector("#copy-button");

const noMessageContainer = document.querySelector("#no-message-container");
const resultMessageContainer = document.querySelector(
  "#result-message-container"
);

const showResultMessageContainer = () => {
  resultMessageContainer.style.display = "block";
  noMessageContainer.style.display = "none";
};

const showNoMessageContainer = () => {
  messageInput.focus();
  messageInput.value = "";
  resultMessageContainer.style.display = "none";
  noMessageContainer.style.display = "flex";
};

const criptografarMensagem = (message) => {
  if (verifyEmptyMessage(message)) {
    message = message
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat")
      .replaceAll("o", "ou");
    resultMessageInput.textContent = message;
    showResultMessageContainer();
  }
};

const descriptografarMensagem = (message) => {
  if (verifyEmptyMessage(message)) {
    message = message
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ufat", "u")
      .replaceAll("ou", "o");
    resultMessageInput.textContent = message;
    showResultMessageContainer();
  }
};

const verifyEmptyMessage = (message) => {
  if (!message.trim()) {
    alert("Preencher o campo de mensagem");
    return false;
  }
  return true;
};

encryptButton.addEventListener("click", () => {
  criptografarMensagem(messageInput.value);
});

decryptButton.addEventListener("click", () => {
  descriptografarMensagem(messageInput.value);
});

copyButton.addEventListener("click", () => {
  if (verifyEmptyMessage(resultMessageInput.value)) {
    navigator.clipboard.writeText(resultMessageInput.value);
    showNoMessageContainer();
  }
});
