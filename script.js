let chatBox = document.getElementById('chat-box');
let inputField = document.getElementById('input');
let send = document.getElementById('Send');
let errorText = document.getElementById('errorText');
let trash = document.getElementById('trash');


window.addEventListener('load', function () {
  document.getElementById('input').focus();
});

document.addEventListener('click', function (e) {
  const input = document.getElementById('input');

  if (e.target !== input && e.target.id !== 'send') {
    input.focus();
  }
});


function sendMessage() {
  let userText = inputField.value.trim();

  if (userText != '') {
    chatBox.innerHTML += "<p id='respons' class='usertext'>" + userText + "</p>";
    inputField.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
      let botReply = getAIResponse(userText);
      chatBox.innerHTML += "<p id='respons'>" + botReply + "</p>";
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
    errorText.textContent = '';
    updateSendButtonState();
  } else {
    messageForUser('Please enter text', 'red');
    updateSendButtonState();
  }
}

send.addEventListener('click', function () {
  sendMessage();
});


inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});


function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}


function getAIResponse(message) {
  let msg = message.toLowerCase();
  for (let pair of responses) {
    for (let pattern of pair.patterns) {
      if (msg.includes(pattern)) {
        return getRandomResponse(pair.answers);
      }
    }
  }
  return getRandomResponse([
    'I am just a simple version.',
    "Still learning, but I'll do my best to help.",
    "Sorry, try asking this question using the link above.",
    "Sorry, I'm just a bot, I don't understand."
  ]);
}



trash.onclick = function () {
  chatBox.innerHTML = '';
  messageForUser('Chat Cleaned', 'black');
}



function updateSendButtonState() {
  if (inputField.value.trim() === '') {
    send.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon"><path d="M4.5 5.75C4.5 5.05964 5.05964 4.5 5.75 4.5H14.25C14.9404 4.5 15.5 5.05964 15.5 5.75V14.25C15.5 14.9404 14.9404 15.5 14.25 15.5H5.75C5.05964 15.5 4.5 14.9404 4.5 14.25V5.75Z"></path></svg>';
    send.style.pointerEvents = 'auto';
    send.style.opacity = '0.5';
    // send.style.cursor = 'not-allowed';


  } else {
    send.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
    xmlns = "http://www.w3.org/2000/svg" class="icon" >
      <path
        d="M8.99992 16V6.41407L5.70696 9.70704C5.31643 10.0976 4.68342 10.0976 4.29289 9.70704C3.90237 9.31652 3.90237 8.6835 4.29289 8.29298L9.29289 3.29298L9.36907 3.22462C9.76184 2.90427 10.3408 2.92686 10.707 3.29298L15.707 8.29298L15.7753 8.36915C16.0957 8.76192 16.0731 9.34092 15.707 9.70704C15.3408 10.0732 14.7618 10.0958 14.3691 9.7754L14.2929 9.70704L10.9999 6.41407V16C10.9999 16.5523 10.5522 17 9.99992 17C9.44764 17 8.99992 16.5523 8.99992 16Z">
      </path>
                </svg > `;
    send.style.pointerEvents = 'auto';
    send.style.opacity = '1';
    send.style.cursor = 'pointer';
  }
}

// Կցում ենք input event-ը՝
inputField.addEventListener('input', updateSendButtonState);

// Կանչում ենք մի անգամ սկզբում, եթե input-ը արդեն դատարկ է
updateSendButtonState();

function messageForUser(text, color) {
  errorText.style.animation = 'textFadeIn 3s ease-in-out forwards';
  errorText.textContent = text;
  errorText.style.color = color;
  setTimeout(() => {
    errorText.textContent = '';
    errorText.style.animation = '';
  }, 3000);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.className = savedTheme;
}

// Հետո՝ ռեժիմը փոխող կոճակի լոգիկան
document.getElementById("themeToggle").addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  localStorage.setItem("theme", newTheme); // Հիշել ընտրությունը
});