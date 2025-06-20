document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = { name, email, message }; // ✅ You forgot this line

  try {
    const res = await fetch("/api/v1/message", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json(); // ✅ Fixed: was `res.message()` which is invalid

    if (data.success) {
      alert(data.message); // ✅ Show the message from the response
      window.location.href = "../verify/verify.html";
    } else {
      alert(data.message || 'Something went wrong');
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while submitting the form.");
  }

  // Clear form
  this.reset();
});
