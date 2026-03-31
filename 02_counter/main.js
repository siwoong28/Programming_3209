//HTML -> JS


// const resultH1 = document.getElementById("num");
// const resultH1 = document.querySelectorAll("h1")[0];

let count = 100;
const resultH1 = document.getElementsByTagName("h1")[0];
// const resultH1 = document.getElementById("result");
// const plusButton = document.getElementsByClassName("plusBtn")[0];
// plusButton.addEventListener("click",() => {
//     count++;
//     resultH1.innerHTML = count;
// });

resultH1.innerHTML = count;
function plus(number = 1){
    count+=number;
    resultH1.innerHTML = count;
}