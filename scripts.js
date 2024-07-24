document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const userInput = document.getElementById('user-input');
    const sendButton = document.querySelector('#chat-container button');

    // Mock AI response function
    const getAIResponse = (message) => {
        const responses = {
            "hello": "Hi there! How can I assist you today?",
            "what is ai": "Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn.",
            "tell me a joke": "Why did the computer go to the doctor? Because it had a virus!",
            // Add more responses as needed
        };
        return responses[message.toLowerCase()] || "I'm sorry, I didn't understand that. Can you please rephrase?";
    };

    // Function to send message
    const sendMessage = () => {
        const message = userInput.value.trim();
        if (message) {
            displayMessage(message, 'user');
            userInput.value = '';
            generateAIResponse(message);
        }
    };

    // Function to display messages
    const displayMessage = (message, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerText = message;
        output.appendChild(messageElement);
        output.scrollTop = output.scrollHeight;
    };

    // Function to generate AI response
    const generateAIResponse = (message) => {
        setTimeout(() => {
            const aiResponse = getAIResponse(message);
            displayMessage(aiResponse, 'ai');
        }, 500);
    };

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
