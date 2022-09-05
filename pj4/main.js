const menu = [
    {
        id:1,
        title:'butter milk',
        price:15,
        category:'brekfast',
        Img:"./aigars-peda-HEG9RhlLKTY-unsplash.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:2,
        title:'shake',
        price:9,
        category:'brekfast',
        Img:"./baiq-daling-ykThMylLsbY-unsplash.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:3,
        title:'fry',
        price:21,
        category:'dinner',
        Img:"./brooke-lark-of0pMsWApZE-unsplash.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:4,
        title:'bread',
        price:6,
        category:'breakfast',
        Img:"./caroline-attwood-bpPTlXWTOvg-unsplash.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:5,
        title:'chiken',
        price:39,
        category:'dinner',
        Img:"./cody-chan-GXhmQt6MFX8-unsplash.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:6,
        title:'tikka',
        price:32,
        category:'dinner',
        Img:"./do-mee-SH8_JmrsQcw-unsplash%20(1).jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:7,
        title:'banana-shake',
        price:11,
        category:'breakfast',
        Img:"./pexels-daria-shevtsova-1095550.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:8,
        title:'pratha',
        price:17,
        category:'breakfast',
        Img:"./pexels-expect-best-246705.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:9,
        title:'daal',
        price:24,
        category:'lunch',
        Img:"./pexels-lisa-1351238.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    },
    {
        id:10,
        title:'rice',
        price:23,
        category:'lunch',
        Img:"./pexels-freestocksorg-203089.jpg",
        desc:`im a baby just doing what evwe what wvwe you want just live your live
        your want just libe life if you want just live your life`
    }

]
const sctn_center =document.querySelector('.section-center') 
const btnFilter = document.querySelectorAll('.btn-filter')

// console.log(menu)

console.log

// ---load item----
window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu)
    

});

// ----filter item---

btnFilter.forEach(function(btn){

    btn.addEventListener('click',function(e){

        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem){

               // -----
                //    console.log(menuItem)
               // ------
                //   console.log(menuItem.category)
               // -----
               
             if(menuItem.category === category){
                return menuItem;
                // console.log(menuItem)
            }
            
         
            
        });
        
         // -----
            // console.log(menuCategory)
         // ------
        
        if(category==='All'){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory);
        }
    })
})


//  <----Display---->

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        // console.log(item)
        return`
        <article class="menu-item">
        <img src=${item.Img} alt=${item.title}>
        <div class="item-info">
            <div class="header">
            <h4 class="item-name">${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            </div>
            <p class="item-text">${item.desc}</p>

            
        </div>
      </article>
        ` ;                                                   
    })

    // console.log(displayMenu.join(""))
    sctn_center.innerHTML=displayMenu.join("")
}