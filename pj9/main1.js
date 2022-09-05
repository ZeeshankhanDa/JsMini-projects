const prgph =[
    `Ill admit that the above is a little on the fatalistic side, but we all recognize that the list is the signature form of our time. (“37 Pictures That Will Restore Your Faith in Pit Bulls.” “15 More Bizarre Kiddie Cartoon Conspiracy Theories.” “The 12 Meanest Ways to Tip a Waiter.” “22 Pictures of Miley Cyrus Open Mouth.”) The stream of content that rushes`,
    `But with all due respect to the observational chops of my correspondent, it wasnt so much the content of the message that impressed me as its form. It was an e-mail in the shape of a listicle, a personal correspondence structured for the purposes of frictionless social-media sharing. At some level, it seemed, my friend intended his e-mail to go viral within the highly targeted demographic of me. I couldnt help feeling that`,
    `Last month, as an exercise in outside-the-box advertising in conjunction with their corporate sponsor Pepsi Next, BuzzFeed launched something called the ListiClock, a Web page that displays a flip clock with a BuzzFeed listicle for every hour, minute, and second of the day. As of this writing, for instance, the time is precisely 2:27:47 p.m., and this fleeting moment is illustrated by the following listicles:`,
    `The seconds flip by with such remorseless speed that its almost impossible to read the title of one listicle before its replaced by another. The result is an endless succession of half-glimpsed enticements: “18 Things You Probably Didnt …,” “11 Reminders That …,” “29 Most Interesting …,” “20 Breathtaking Photos of … .” If you watch any clock for long enough, especially one that displays the seconds as they pass`

];

const btn =document.querySelector(".btn");
const text =document.querySelector(".text-rslt");
const num =document.querySelector(".inp");

btn.addEventListener('click',function(e){
    e.preventDefault;

    // console.log('hello')
    const value =parseInt( num.value);
    const random=Math.floor(Math.random()*prgph.length)
    // console.log(value)

    // empty 
    // -1
    //>4
    text.classList.add('result')

    if(isNaN(value) ||value<=0 || value>4 ){
        text.innerHTML=`<p class="p-text">${prgph[random]}</p>`
    } 
    else{
        let temptext= prgph.slice(0,value);
        // console.log(temptext)
        temptext=temptext.map(function(item){
            return`<p class=" ">${item}</p>`
        }).join("");
        // console.log(temptext)
        text.innerHTML= temptext
    }


})












