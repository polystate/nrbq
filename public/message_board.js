let userName = '';

export default function generateMessageBoard() {
  const { submitButton, userInput, messageContainer } = createHTML();

  setUserName(userName);
  getUserInput(submitButton, userInput, messageContainer);
}

function setUserName() {
  const nameInput = document.getElementById('create-name');
  nameInput.addEventListener('input', () => {
    userName = nameInput.value;
  });
}

function getUserInput(submitButton, userInput, messageContainer) {
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newMessage = userInput.value;
    if (newMessage.length) {
      const userMessage = document.createElement('div');
      userMessage.textContent = `${formatDate(new Date(), ' -')} ${
        userName || 'Anonymous'
      }: ${userInput.value}`;
      userMessage.setAttribute('class', 'user-message');
      messageContainer.appendChild(userMessage);
      userInput.value = '';
      return newMessage;
    } else {
      return false;
    }
  });
}

function createHTML() {
  const messageBoardContainer = document.getElementById('message-board');

  const labelName = document.createElement('label');
  labelName.setAttribute('for', 'create-name');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('id', 'create-name');
  nameInput.setAttribute('name', 'create-name');
  nameInput.setAttribute('placeholder', 'Enter user name...');

  messageBoardContainer.appendChild(labelName);
  messageBoardContainer.appendChild(nameInput);

  const messageContainer = document.createElement('div');
  messageContainer.setAttribute('class', 'message-container');

  const sendMessageContainer = document.createElement('div');
  sendMessageContainer.setAttribute('class', 'sendMessageContainer');

  messageBoardContainer.appendChild(messageContainer);
  messageBoardContainer.appendChild(sendMessageContainer);

  const userInput = document.createElement('input');
  userInput.setAttribute('class', 'user-input');
  userInput.setAttribute('placeholder', 'Share your thoughts...');

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Send';
  sendMessageContainer.appendChild(userInput);
  sendMessageContainer.appendChild(submitButton);

  return { submitButton, userInput, messageContainer };
}

function formatDate(date, separator) {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'UTC',
  };
  return date.toLocaleString('en-US', options).replace(/,/g, separator);
}
