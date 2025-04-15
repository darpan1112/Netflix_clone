// auth.js
function signupUser() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    if (!email || !password) return alert("Fill all fields");
  
    let users = JSON.parse(localStorage.getItem("users") || "{}");
    if (users[email]) return alert("User already exists");
  
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! You can now login.");
    window.location.href = "login.html";
  }
  
  function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    let users = JSON.parse(localStorage.getItem("users") || "{}");
    if (!users[email]) return alert("User not found");
    if (users[email] !== password) return alert("Incorrect password");
  
    localStorage.setItem("loggedIn", email);
    alert("Login successful!");
    window.location.href = "index.html";
  }
  
  function resetPassword() {
    const email = document.getElementById('forgotEmail').value;
    const newPassword = document.getElementById('newPassword').value;
  
    let users = JSON.parse(localStorage.getItem("users") || "{}");
    if (!users[email]) return alert("User not found");
  
    users[email] = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password reset successfully!");
    window.location.href = "login.html";
  }
  