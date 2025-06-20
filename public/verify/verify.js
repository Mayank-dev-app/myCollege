
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#formData");
  if (form) {
    form.addEventListener("submit", async (event) => {
       event.preventDefault();
      const email = document.getElementById("email");
      const otp = document.getElementById("otp");

      const formData ={
        email: email.value,
        otp: otp.value,
      }

      const response = await fetch("/api/v1/verify", {
        method: 'POST',
       headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(formData),
      });

      const res = await response.json();
      console.log(res);
      if(response.ok && res.success){
        alert("Thank You For your FeedBack");
        window.location.href = '../index.html';
      }
      else{
        alert(res.message);
      }
    });
  } else {
    console.error("Form with ID 'formData' not found!");
  }
});
