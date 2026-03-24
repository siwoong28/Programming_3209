//HTML -> JS


// const resultH1 = document.getElementById("num");
// const resultH1 = document.querySelectorAll("h1")[0];

const resultH1 = document.getElementsByTagName("h1")[0];
const plusButton = document.getElementsByTagName("button")[0];
let count = 0;
// const resultH1 = document.getElementById("result");
// const plusButton = document.getElementsByClassName("plusBtn")[0];
// plusButton.addEventListener("click",() => {
//     count++;
//     resultH1.innerHTML = count;
// });
plusButton.onclick = () => {
    count++;
    resultH1.innerHTML = count;
};