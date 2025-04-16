document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = document.getElementById("username").value.trim();
    const enteredPassword = document.getElementById("password").value.trim();

    // Retrieve the users array from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];  

    // Check if the entered username and password match any user
    const matchingUser = users.find(user => 
        user.username === enteredUsername && user.password === enteredPassword
    );

    if (matchingUser) {
        // Optionally store logged-in user in localStorage to remember the session
        localStorage.setItem("loggedInUser", enteredUsername);
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
    }
});