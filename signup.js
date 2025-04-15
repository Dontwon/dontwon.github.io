document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the page from refreshing

    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();

    // Check if the fields are empty
    if (!username || !password) {
        document.getElementById("signupMessage").textContent = "Both fields are required.";
        return;
    }

    // Retrieve the existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        document.getElementById("signupMessage").textContent = "Username already taken.";
        return;
    }

    // Add the new user to the array
    users.push({ username, password });

    // Store the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Inform the user of successful signup
    document.getElementById("signupMessage").style.color = "green";
    document.getElementById("signupMessage").textContent = "Sign-up successful! You can now log in.";

    // Clear the form
    document.getElementById("signupForm").reset();
});