const users = JSON.parse(localStorage.getItem("users")) || [];

// REGISTER
function register() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  clearErrors();

  if (!username) return showError("usernameError", "Username is required");
  if (!email) return showError("emailError", "Email is required");
  if (!password) return showError("passwordError", "Password is required");

  const exists = users.find(
    u => u.username === username || u.email === email
  );

  if (exists) {
    alert("Username or email already exists
