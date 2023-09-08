document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const emailError = document.getElementById("emailError")
    const passwordError = document.getElementById("passwordError")

    form.addEventListener("submit", (e) => {
        let isValid = true

        emailError.textContent = ""
        passwordError.textContent = ""

        if (email.value === "") {
            isValid = false
            emailError.textContent = "Please fill in the email field."
            email.style.border = "1px solid red"
        }

        if (password.value === "") {
            isValid = false
            passwordError.textContent = "Please fill in the password field."
            password.style.border = "1px solid red"
        } else if (password.value.length <= 6) {
            isValid = false
            password.style.border = "1px solid red"
            passwordError.textContent = "Password must be longer than 6 characters."
        }

        if (!isValid) {
            e.preventDefault() // Blocks form submission
        }

    })
})