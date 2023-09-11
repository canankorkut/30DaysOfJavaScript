document.addEventListener("DOMContentLoaded", function(){
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault()  // Blocks form submission

    // Checks the answers to all questions
    function validateForm() {
      // control of question 1
      let nameInput = document.querySelector("#name")
      let nameStatus = document.querySelector("#q1-status")
      if (nameInput.value.trim() === "") {
        nameStatus.innerHTML = "Not completed!"
        nameInput.focus()  // focuses on this element
        return false
      } else {
        nameStatus.innerHTML = "" // clears the error message
      }

      // control of question 2
      let surnameInput = document.querySelector("#surname")
      let surnameStatus = document.querySelector("#q2-status")
      if (surnameInput.value.trim() === "") {
        surnameStatus.innerHTML = "Not completed!"
        surnameInput.focus()  // focuses on this element
        return false
      } else {
        surnameStatus.innerHTML = "" // clears the error message
      }
  
      // control of question 3
      let ageInput = document.querySelector("#age")
      let ageStatus = document.querySelector("#q3-status")
      if (ageInput.value.trim() === "") {
        ageStatus.innerHTML = "Not completed!"
        ageInput.focus()  // focuses on this element
        return false
      } else {
        ageStatus.innerHTML = "" // clears the error message
      }

      // control of question 4
      let experienceInput = document.querySelectorAll('input[name = "experience"]')
      let experienceStatus = document.querySelector("#q4-status")
      let experienceChecked = false 
      experienceInput.forEach(function (radio) {
        if (radio.checked) {
          experienceChecked = true
        }
      })
      if (!experienceChecked) {
        experienceStatus.innerHTML = "Not completed!"
        document.querySelector("#q4").scrollIntoView() // Makes the element visible
        return false 
      } else {
        experienceStatus.innerHTML = "" // clears the error message
      }

      // control of question 5
      let programInput = document.querySelectorAll('input[name = "programs"]')
      let programStatus = document.querySelector("#q5-status")
      let programChecked = false
      programInput.forEach(function (checkbox) {
        if (checkbox.checked) {
          programChecked = true
        }
      })
      if(!programChecked && document.querySelector("#other5").value.trim() === "") {
        programStatus.innerHTML = "Not completed!"
        document.querySelector("#q5").scrollIntoView() // Makes the element visible
        return false
      } else {
        programStatus.innerHTML = "" // clears the error message
      }

      // control of question 6
      let interestInput = document.querySelectorAll('input[name = "interest"]')
      let interestStatus = document.querySelector("#q6-status")
      let interestChecked = false
      interestInput.forEach(function (checkbox) {
        if (checkbox.checked) {
          interestChecked = true
        }
      })
      if(!interestChecked && document.querySelector("#other6").value.trim() === "") {
        interestStatus.innerHTML = "Not completed!"
        document.querySelector("#q6").scrollIntoView() // Makes the element visible
        return false
      } else {
        interestStatus.innerHTML = "" // clears the error message
      }

      // control of question 7
      let platformInput = document.querySelectorAll('input[name = "platform"]')
      let platformStatus = document.querySelector("#q7-status")
      let platformChecked = false 
      platformInput.forEach(function (radio) {
        if (radio.checked) {
          platformChecked = true
        }
      })
      if (!platformChecked) {
        platformStatus.innerHTML = "Not completed!"
        document.querySelector("#q7").scrollIntoView()  // Makes the element visible
        return false 
      } else {
        platformStatus.innerHTML = "" // clears the error message
      }

      // control of question 8
      let databaseSystemInput = document.querySelectorAll('input[name = "databaseSystem"]')
      let databaseSystemStatus = document.querySelector("#q8-status")
      let databaseSystemChecked = false
      databaseSystemInput.forEach(function (checkbox) {
        if (checkbox.checked) {
          databaseSystemChecked = true
        }
      })
      if(!databaseSystemChecked && document.querySelector("#other8").value.trim() === "") {
        databaseSystemStatus.innerHTML = "Not completed!"
        document.querySelector("#q8").scrollIntoView() // Makes the element visible
        return false
      } else {
        databaseSystemStatus.innerHTML = "" // clears the error message
      }

      // control of question 9
      let developmentEnvironmentInput = document.querySelectorAll('input[name = "developmentEnvironment"]')
      let developmentEnvironmentStatus = document.querySelector("#q9-status")
      let developmentEnvironmentChecked = false
      developmentEnvironmentInput.forEach(function (checkbox) {
        if (checkbox.checked) {
          developmentEnvironmentChecked = true
        }
      })
      if(!developmentEnvironmentChecked && document.querySelector("#other9").value.trim() === "") {
        developmentEnvironmentStatus.innerHTML = "Not completed!"
        document.querySelector("#q9").scrollIntoView()  // Makes the element visible
        return false
      } else {
        developmentEnvironmentStatus.innerHTML = "" // clears the error message
      }

      // control of question 10
      let softwareDevelopmentInput = document.querySelectorAll('input[name = "softwareDevelopment"]')
      let softwareDevelopmentStatus = document.querySelector("#q10-status")
      let softwareDevelopmentChecked = false 
      softwareDevelopmentInput.forEach(function (radio) {
        if (radio.checked) {
          softwareDevelopmentChecked = true
        }
      })
      if(!softwareDevelopmentChecked && document.querySelector("#other10").value.trim() === "") {
        softwareDevelopmentStatus.innerHTML = "Not completed!"
        document.querySelector("#q10").scrollIntoView()  // Makes the element visible
        return false
      } else {
        softwareDevelopmentStatus.innerHTML = "" // clears the error message
      }

      alert("Form başarıyla tamamlandı."); // Indicates that the form was completed successfully
      document.querySelector("form").reset(); // Resets the form
      window.scrollTo(0, 0); // Goes to the top of the page
    }

    validateForm();
  })
})