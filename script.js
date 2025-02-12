// List of valid UCIDs
const validUCIDs = ["abc123", "xyz456", "def789"];

// Function to validate UCID format and check if it's in the list
document.getElementById("ucidForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  const ucidInput = document.getElementById("ucid").value;
  const ucidPattern = /^[a-zA-Z]+[0-9]{0,3}$/; // Letters followed by 0 to 3 digits

  let message = "";

  if (ucidPattern.test(ucidInput)) {
    if (validUCIDs.includes(ucidInput)) {
      message = "VALID UCID FORMAT AND UCID FOUND";
    } else {
      message = "VALID UCID FORMAT BUT INVALID UCID";
    }
  } else {
    message = "UCID DOES NOT CONFORM TO VALID FORMAT";
  }
 
  // Display the result in a popup alert
  alert(message);
});