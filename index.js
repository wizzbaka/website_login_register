const logredBox = document.querySelector(".logred-box");

const loginLink = document.querySelector(".login-link");

const registerlink = document.querySelector(".register-link");


registerlink.addEventListener("click", ()=>{
  logredBox.classList.add("active");
});

loginLink.addEventListener("click", ()=>{
  logredBox.classList.remove("active");
});