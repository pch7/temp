let searchEnable = document.querySelector(".search-logo");
searchEnable.addEventListener("click", () => {
    document.querySelector(".search-form").classList.toggle("active");
    document.querySelector(".search-logo").classList.toggle("active");

})

let searchDisable = document.querySelector(".cross-search");
searchDisable.addEventListener("click", () => {
    document.querySelector(".search-form").classList.remove("active");
    document.querySelector(".search-logo").classList.remove("active");

})

let loginEnable = document.querySelector(".user-logo");
loginEnable.addEventListener("click", ()=>{
    document.querySelector(".login").classList.toggle("active");
})

let loginDisable = document.querySelector(".cross-login");
loginDisable.addEventListener("click", ()=>{
    document.querySelector(".login").classList.remove("active");
})

// let noServiceEnable = document.querySelectorAll(".not-available");
// noServiceEnable.addEventListener("click", ()=>{
//     document.querySelectorAll(".no-service").classList.toggle("active");
// })

// let noServiceDisable = document.querySelector(".no-service-btn");
// noServiceDisable.addEventListener("click", ()=>{
//     document.querySelector(".no-service").classList.remove("active");
// })

// xyz = document.getElementsByClassName('.not-available');
// xyz.onclick =() => {
    //     console.log("Selected");
    //     noServiceEnable.classList.toggle('active');
    // }
    
document.querySelector('.no-service-btn').onclick =() => {
    console.log("Unselected");
    noServiceEnable.classList.remove('active');
}
        
noServiceEnable = document.querySelector('.no-service');
btns = document.getElementsByClassName("not-available");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
			//Add function here
            noServiceEnable.classList.toggle('active');
    });
}