document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = new FormData(this); // Collect form data

  // Define the two endpoint URLs
  const endpoint1 = "https://formspree.io/f/mgejpbpq";
  const endpoint2 = "https://example.com/endpoint2";

  // Send data to the first endpoint
  fetch(endpoint1, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Data sent to endpoint1 successfully.");
      } else {
        console.error("Error sending data to endpoint1:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error sending data to endpoint1:", error);
    });

  // Send data to the second endpoint
  fetch(endpoint2, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Data sent to endpoint2 successfully.");
      } else {
        console.error("Error sending data to endpoint2:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error sending data to endpoint2:", error);
    });
});
