document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const allowCode = document.getElementById('allowCode').value;
    const errorMessage = document.getElementById('errorMessage');

    try {
        const response = await fetch('/allow_code_auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ allow_code: allowCode })
        });

        const data = await response.json();

        if (response.ok) {
            // Assuming successful login redirects to index.html or sets a session
            window.location.href = '/'; // Redirect to the main page
        } else {
            errorMessage.textContent = data.message || 'Login failed.';
        }
    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again.';
        console.error('Login error:', error);
    }
});