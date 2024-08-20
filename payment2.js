
function payWithPaystacks(product, amount, beneficiaryEmail) {
    // Get the button that was clicked
    const button = event.target; 
    // Disable the button to prevent multiple clicks
    button.disabled = true; 

    // Create a stylish popup message container
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    popup.innerText = 'Payment unavailable. For Payment message/call us via Whatsapp Thanks.';
    document.body.appendChild(popup);

    // Simulate payment process without opening the Paystack gateway
    setTimeout(() => {
        // Here you can implement any logic you want to execute after the timeout
        alert('Payment process simulated. No actual payment was made.');
        
        // Reset button state
        button.disabled = false; 

        // Remove the popup message
        document.body.removeChild(popup);
    }, 3000); // Simulate a 3-second delay for the payment process
}
setTimeout(() => {
    popup.classList.add('fade-out'); // Add fade-out class
    setTimeout(() => {
        document.body.removeChild(popup); // Remove after fade-out
    }, 500); // Wait for fade-out duration
}, 3000); // Keep the message for 3 seconds