
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("responseMessage").innerText =
    "Thank you! Your inquiry has been submitted successfully.";
});
