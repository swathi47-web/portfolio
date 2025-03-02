// Get the contact name from localStorage
const chatUserName = localStorage.getItem('chatUserName');

// Set the chat header and title to the contact's name
document.getElementById('chatUserName').textContent = chatUserName;

// Simulate sending and receiving messages
function sendMessage() {
  let inputField = document.getElementById('chatInput');
  let message = inputField.value.trim();

  if (message) {
    let chatWindow = document.getElementById('chatWindow');

    // Create a sent message element
    let sentMessage = document.createElement('div');
    sentMessage.classList.add('message', 'sent');
    sentMessage.innerHTML = `<p>${message}</p>`;

    chatWindow.appendChild(sentMessage);
    inputField.value = ''; // Clear the input field

    // Auto-scroll to the latest message
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulate receiving a message after 1 second
    setTimeout(() => {
      receiveMessage("I'm doing great! How about you?");
    }, 1000);
  }
}

function receiveMessage(text) {
  let chatWindow = document.getElementById('chatWindow');

  // Create a received message element
  let receivedMessage = document.createElement('div');
  receivedMessage.classList.add('message', 'received');
  receivedMessage.innerHTML = `<p>${text}</p>`;

  chatWindow.appendChild(receivedMessage);

  // Auto-scroll to the latest message
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
