// script.js
(function() {
    // Initialize Email.js with your public key
    emailjs.init("jqtydZmsz-DqINrG6");

    document.getElementById('submissionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading indicator
        const loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.classList.remove('hidden');

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const phone= document.getElementById('phone').value;

        // Validate email
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            loadingIndicator.classList.add('hidden');
            return;
        }

        // Prepare template parameters
        const templateParams = {
            to_email: 'samueladeoye834@gmail.com',
            from_name: name,
            from_email: email,
            message: message,
            phone:phone
        };

        // Send email using Email.js
        emailjs.send('service_497091m', 'template_sn97d78', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Submission successful!.');
                document.getElementById('submissionForm').reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to submit. Please try again.');
            })
            .finally(function() {
                loadingIndicator.classList.add('hidden');
            });
    });

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
})();