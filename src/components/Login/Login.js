import React, { useEffect } from "react";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    const formContainer = document.getElementById("form-container");
    
    // Prevent duplicate form creation
    if (formContainer.childNodes.length > 0) return;

    // Create form dynamically
    const form = document.createElement("form");
    form.className = "login-form";
    
    const heading = document.createElement("h2");
    heading.textContent = "Login";
    
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Enter your email";
    
    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Password:";
    
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.placeholder = "Enter your password";
    
    const loginButton = document.createElement("button");
    loginButton.textContent = "Login";
    loginButton.type = "button";
    
    // Handle button click
    loginButton.addEventListener("click", () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      
      if (!email || !password) {
        alert("Please fill in all fields.");
        return;
      }
      
      if (!validateEmail(email)) {
        alert("Invalid email format.");
        return;
      }
      
      alert(`Email: ${email}\nPassword: ${password}`);
    });

    // Append elements
    form.appendChild(heading);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(loginButton);
    
    formContainer.appendChild(form);
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return <div id="form-container" className="form-wrapper"></div>;
};

export default Login;
