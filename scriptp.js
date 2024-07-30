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
    const checkout = new Date(document.getElementById("checkout").value);

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
        check_out: checkout.toISOString().split('T')[0] // Format date for sending
    };

    // Function to hide the GIF after a specified duration
    function hideGifAfterDelay(delay) {
        setTimeout(() => {
            document.getElementById("gifContainer").style.display = "none"; // Hide GIF container
        }, delay);
    }

    // Inside the emailjs.send success callback
    emailjs.send("service_497091m", "template_b4fkfvx", templateParams)
        .then(function(response) {
            // Hide loader
            document.getElementById("loader").style.display = "none";
            document.getElementById("responseMessage").innerText = "Booking successful!";
            document.getElementById('bookingForm').reset();

            // Show success GIF
            const gifImage = document.getElementById('gifImage');
            gifImage.src = "img/correct.gif"; // Success GIF
            document.getElementById("gifContainer").style.display = "block"; // Show GIF container

            // Hide GIF after 10 seconds (10000 milliseconds)
            hideGifAfterDelay(10000);
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            // Hide loader
            document.getElementById("loader").style.display = "none";
            document.getElementById("responseMessage").innerText = "Error sending booking. Please try again.";

            // Show error GIF
            const gifImage = document.getElementById('gifImage');
            gifImage.src = "img/error.gif"; // Error GIF
            document.getElementById("gifContainer").style.display = "block"; // Show GIF container

            // Hide GIF after 10 seconds (10000 milliseconds)
            hideGifAfterDelay(10000);
            console.log('FAILED...', error);
        });
});
