const var1 = [
    {
        id:0,
        name: 'sara jones',
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Placeat inventore laborum in deleniti veritatis doloribus tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellat,officiis mollitia iusto temporibus molestias eveniet!",
        Img:"redd-pzOUnvx9c1E-unsplash.jpg"
        
    },
    {
        id:1,
        name: 'man1',
        about: "zzz yes ic can be happen, consectetur adipisicing elit.Placeat inventore laborum in deleniti veritatis doloribus tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellat,officiis mollitia iusto temporibus molestias eveniet!",
        Img:"michael-dam-mEZ3PoFGs_k-unsplash.jpg"
        
    },
    {
        id:2,
        name: 'man2',
        about: "our profit is valuable than other for item, consectetur adipisicing elit.Placeat inventore laborum in deleniti veritatis doloribus tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellat,officiis mollitia iusto temporibus molestias eveniet!",
        Img:"ben-parker-OhKElOkQ3RE-unsplash.jpg"
        
    }
]



const prImg = document.getElementById('person-img')
const prName = document.getElementById('name')
const prAbout = document.getElementById('about-pgh')

const btnNext = document.querySelector('.btn1')
const btnPrvs = document.querySelector('.btn2')
const btnRndm = document.querySelector('.btn-rndm')
let currItem = 0;

btnNext.addEventListener('click',function(){

    currItem++;
    if(currItem>var1.length-1){
    currItem=0;
    }
    showRslt();
});
btnPrvs.addEventListener('click',function(){
        currItem--;
        if(currItem < 0){
        currItem=var1.length-1;
        }
        showRslt();
    });

function showRslt(){
    const img2=var1[currItem].Img;
   const name2 =var1[currItem].name;
   const about2 = var1[currItem].about;
   prImg.src=img2;
   prName.textContent=name2;
   prAbout.textContent=about2;
}

btnRndm.addEventListener('click',function(){

    currItem = Math.floor(Math.random() * var1.length);
    // console.log(currItem)
    showRslt(currItem);

});