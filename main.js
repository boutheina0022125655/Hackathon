function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Set the mode to 'no-cors' to bypass CORS issues
    })
    .then(() => {
        alert("Form submitted successfully!");
        form.reset(); // Reset the form after successful submission
    })
    .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Form submission failed. Please try again later.");
    });
}

document.getElementById("registrationForm").addEventListener("submit", submitForm);



