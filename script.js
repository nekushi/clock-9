let container = document.querySelector('.container');
let dateContainer = document.querySelector('.date');
let timeContainer = document.querySelector('.time');

let update = setInterval(() => {
    let d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let day = d.getDay();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    dateContainer.innerText = `${monthArr[month]} ${date}, ${year} - ${dayArr[day]}`;
    timeContainer.innerText = `${hours > 12 ? hours-12 : hours}hrs : ${mins}mins : ${secs}secs`;    
}, 1000);

// setTimeout(() => {
//    clearInterval(update);
//    container.innerText = "Wala na, finish na"; 
// }, 20000);

// function update() {
//     let d = new Date();

//     let year = d.getFullYear();
//     let month = d.getMonth();
//     let date = d.getDate();
//     let day = d.getDay();
//     let hours = d.getHours();
//     let mins = d.getMinutes();
//     let secs = d.getSeconds();

//     let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     dateContainer.innerText = `${monthArr[month]} ${date}, ${year} - ${dayArr[day]}`;
//     timeContainer.innerText = `${hours > 12 ? hours-12 : hours}hrs : ${mins}mins : ${secs}secs`;
// }

// dateContainer.innerText = "hello world";