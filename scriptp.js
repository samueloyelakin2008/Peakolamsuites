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
        const checkin = document.getElementById("checkin").value;
        const checkout = document.getElementById("checkout").value;

        const templateParams = {
            to_email: 'samueladeoye834@gmail.com',
            name: guestName,
            email: email,
            phone: phone,
            guest: numGuests,
            room_type: suite,
            check_in: checkin,
            check_out: checkout
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
        gifImage.src = "https://www.icegif.com/wp-content/uploads/2023/08/icegif-727.gif"; // Success GIF
        document.getElementById("gifContainer").style.display = "block"; // Show GIF container

        // Hide GIF after 5 seconds (10000 milliseconds)
        hideGifAfterDelay(10000);
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        // Hide loader
        document.getElementById("loader").style.display = "none";
        document.getElementById("responseMessage").innerText = "Error sending booking. Please try again.";

        // Show error GIF
        const gifImage = document.getElementById('gifImage');
        gifImage.src = "https://i.pinimg.com/originals/6e/f9/f2/6ef9f2fd6425c578274e72ce1f44a778.gif"; // Error GIF
        document.getElementById("gifContainer").style.display = "block"; // Show GIF container

        // Hide GIF after 5 seconds (10000 milliseconds)
        hideGifAfterDelay(10000);
        console.log('FAILED...', error);
    });


    });
