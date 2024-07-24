document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const userInput = document.getElementById('user-input');

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
    window.sendMessage = () => {
        const message = userInput.value.trim();
        if (message) {
            const userMessage = `<div class="message user">${message}</div>`;
            output.innerHTML += userMessage;
            userInput.value = '';

            // Simulate AI response
            setTimeout(() => {
                const aiResponse = `<div class="message ai">${getAIResponse(message)}</div>`;
                output.innerHTML += aiResponse;
                output.scrollTop = output.scrollHeight;
            }, 500);
        }
    };
});
