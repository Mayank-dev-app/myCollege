const linkbtn = document.getElementById("showdropdown");
const dropDown = document.querySelector(".links");

linkbtn.addEventListener("click",()=>{
   dropDown.classList.toggle("show");
});

  // Yeh tab chale jab screen chhoti ho
//   if (window.innerWidth <= 750) {
//     const topperTrigger = document.getElementById("topper-class");

//     topperTrigger.addEventListener("click", function (e) {
//       e.stopPropagation(); // Prevent bubbling
//       const submenu = this.querySelector(".topper");
//       submenu.classList.toggle("show-topper");
//     });
//        document.addEventListener("click", function () {
//       const openMenu = document.querySelector(".topper.show-topper");
//       if (openMenu) openMenu.classList.remove("show-topper");
//     });
//   }