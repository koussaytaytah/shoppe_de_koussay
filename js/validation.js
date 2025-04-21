document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('form#signup-form');
    const loginForm = document.querySelector('form#login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            let valid = true;

            // Clear previous errors
            clearErrors();

            // Validate username
            if (username.value.trim() === '') {
                showError(username, 'Username is required');
                valid = false;
            }

            // Validate email
            if (!isValidEmail(email.value)) {
                showError(email, 'Invalid email address');
                valid = false;
            }

            // Validate password
            if (password.value.length < 6) {
                showError(password, 'Password must be at least 6 characters');
                valid = false;
            }

            if (!valid) e.preventDefault();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            let valid = true;

            // Clear previous errors
            clearErrors();

            // Validate email
            if (!isValidEmail(email.value)) {
                showError(email, 'Invalid email address');
                valid = false;
            }

            // Validate password
            if (password.value.trim() === '') {
                showError(password, 'Password is required');
                valid = false;
            }

            if (!valid) e.preventDefault();
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const errorElement = document.createElement('p');
        errorElement.classList.add('error');
        errorElement.innerText = message;
        input.parentNode.appendChild(errorElement);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }
});
