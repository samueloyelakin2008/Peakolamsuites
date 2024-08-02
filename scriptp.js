(function() {
    emailjs.init("jqtydZmsz-DqINrG6"); // Replace with your EmailJS User ID
})();

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const guestName = document.getElementById("guestName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const numGuests = document.getElementById("numGuests").value;
    const suite = document.getElementById("suite").value;
    const checkin = new Date(document.getElementById("checkin").value);
    const checkinTime = document.getElementById("checkinTime").value;
    const checkout = new Date(document.getElementById("checkout").value);
    const message = document.getElementById("message").value;

    // Check if the check-in date is after the check-out date
    if (checkin >= checkout) {
        alert("Check-in date must be before the check-out date. Please select valid dates.");
        return; // Stop the form submission
    }

    const templateParams = {
        to_email: 'samueladeoye834@gmail.com',
        name: guestName,
        email: email,
        phone: phone,
        guest: numGuests,
        room_type: suite,
        check_in: checkin.toISOString().split('T')[0], // Format date for sending
        check_in_time: checkinTime,
        message:message,
        check_out: checkout.toISOString().split('T')[0] // Format date for sending
    };

    // Inside the emailjs.send success callback
    emailjs.send("service_497091m", "template_b4fkfvx", templateParams)
        .then(function(response) {
            // Hide loader
            document.getElementById("loader").style.display = "none";

            // Show success message in popup
            showPopup("Booking successful!", "img/correct.gif");

            // Reset form
            document.getElementById('bookingForm').reset();
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            // Hide loader
            document.getElementById("loader").style.display = "none";

            // Show error message in popup
            showPopup("Error sending booking. Please try again.", "img/error.gif");
            console.log('FAILED...', error);
        });
});

// Function to show the popup
function showPopup(message, gifSrc) {
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("popupGifImage").src = gifSrc;
    document.getElementById("popupContainer").style.display = "block"; // Show popup
}

// Function to hide the popup
function hidePopup() {
    document.getElementById("popupContainer").style.display = "none";
}

// Add event listener to the close button
document.getElementById("closeButton").addEventListener("click", hidePopup);
