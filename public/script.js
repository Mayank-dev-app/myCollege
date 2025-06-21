const linkbtn = document.getElementById("showdropdown");
const dropDown = document.querySelector(".links");

linkbtn.addEventListener("click",()=>{
   dropDown.classList.toggle("show");
});

