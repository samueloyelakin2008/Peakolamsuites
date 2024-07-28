// script.js
(function() {
    // Initialize Email.js with your public key
    emailjs.init("jqtydZmsz-DqINrG6");

    document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading indicator
        const loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.classList.remove('hidden');

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;


        // Prepare template parameters
        const templateParams = {
            to_email: 'samueladeoye834@gmail.com',
            from_name: name,
            from_email: email
        };

        // Send email using Email.js
        emailjs.send('service_497091m', 'template_sn97d78', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Subscription submitted successfully! Thanks.');
                document.getElementById('subscriptionForm').reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to submit subscription. Please try again.');
            })
            .finally(function() {
                loadingIndicator.classList.add('hidden');
            });
    });

    
})();