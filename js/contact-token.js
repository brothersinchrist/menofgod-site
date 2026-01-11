async function handleContactSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const payload = {
    title: "Contact: " + data.get("subject"),
    body:
      `Name: ${data.get("name")}\n` +
      `Email: ${data.get("email")}\n\n` +
      data.get("message")
  };

  // Debug: log form data before sending
  console.log("Submitting contact form:", payload);
  console.log("Using token:", window.CONTACT_TOKEN ? "present" : "missing");

  try {
    const res = await fetch(
      "https://api.github.com/repos/brothersinchrist/menofgod-contact/issues",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + window.CONTACT_TOKEN,
          "Accept": "application/vnd.github+json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    // Debug: log raw response
    console.log("Response status:", res.status, res.statusText);
    const json = await res.json();
    console.log("Response body:", json);

    if (res.ok) {
      alert("Message sent successfully.");
      form.reset();
    } else {
      alert(
        `There was a problem sending your message.\nStatus: ${res.status} ${res.statusText}\n` +
        `Message: ${json.message || "Unknown error"}`
      );
    }
  } catch (err) {
    console.error("Fetch error:", err);
    alert("An unexpected error occurred. Check console for details.");
  }

  return false;
}
