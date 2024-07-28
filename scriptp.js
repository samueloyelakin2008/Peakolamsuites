// script.js
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
        to_email:'samueladeoye834@gmail.com',
        name: guestName,
        email: email,
        phone: phone,
        guest: numGuests,
        room_type: suite,
        check_in: checkin,
        check_out: checkout
    };

    // Show loader
    document.getElementById("loader").style.display = "block";
    document.getElementById("responseMessage").innerText = "";

    emailjs.send("service_497091m", "template_b4fkfvx", templateParams)
        .then(function(response) {
            // Hide loader
            document.getElementById("loader").style.display = "none";
            document.getElementById("responseMessage").innerText = "Booking successful!";
            document.getElementById('bookingForm').reset();
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            // Hide loader
            document.getElementById("loader").style.display = "none";
            document.getElementById("responseMessage").innerText = "Error sending booking.Pls try again";
            console.log('FAILED...', error);
        });
});