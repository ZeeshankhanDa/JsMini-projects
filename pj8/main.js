const month =[
    "jan",
    "fab",
    "mar",
    "aprl",
    "may",
    "jun",
    "jul",
    "aug",
    "september",
    "Oct",
    "nov",
    "dec",

]

const weeekdays = [

    "sunday",
    "monday",
    "tuesday",
    "wednessday",
    "thursday",
    "friday",

]

const giveway   = document.querySelector('.giveway');
const section   = document.querySelector('.count-time'); 
const countTime = document.querySelectorAll('.count-time h1');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate(); 

const futuredate = new Date(tempYear,tempMonth,tempDay + 1,11,30,0)
// let futuredate= new Date(2021,11,14,11,30,0);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const min = futuredate.getMinutes();
// const sec = futuredate.getSeconds()
let months = futuredate.getMonth();
months = month[months]
const date = futuredate.getDate();
const weekday = weeekdays[futuredate.getDay()]
// console.log(months);
giveway.textContent=`giveway end on ${weekday} ${date} ${months} ${year} ${hours}:${min}am`;

const futureTime = futuredate.getTime();
function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    // console.log(t)

// 1s = 1000ms
// 1min = 60sec
// 1hour = 60min
// 1day = 24 hour

// values in ms

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

// cacculate all values

let days = t/oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let second = Math.floor((t % oneMinute)/ 1000);

// set value array

const values= [days, hours, minutes, second];

function format(item){
    if (item<10) {
        return item =`0${item}`
    }
    return item;

}

countTime.forEach(function (item, index){
    item.innerHTML =format( values[index])
});
if (t<0) {
    clearInterval(countdown)
    section.innerHTML=`<h1 class="expired">expirde</h1>`
}

}

//countdown
let countdown = setInterval(getRemainingTime,1000) 

getRemainingTime();

