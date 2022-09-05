// offsetTop - A Number,representing the top position of the elemnt in pixels

//  ******set date******
 const date = document.getElementById('date');
 date.innerHTML =new Date().getFullYear;

//******* close links*******
const navToggle= document.querySelector('.nav-toggle')
const linksContainer =document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click',function(){
    const containerHeight =linksContainer.getBoundingClientRect().height;
    const linksheight = links.getBoundingClientRect.height;
    if(containerHeight===0){
        linksContainer.getElementsByClassName.height=`${linksheight}px`
    }
    else{
        linksContainer.getElementsByClassName.height=0;
    }

})

// ****** fixed navbar******

const navbar = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll',function(){
    // console.log(window.pageXOffset)
    const scrollheight = this.window.pageYOffset;
    const navheight = navbar.getBoundingClientRect().height;
    if (scrollheight>navheight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollheight>500){
        topLink.classList.add('showlinks')
    } else{
        topLink.classList.remove('showlinks')
    }
})
// smooth scroll
// select links

const scrollLinks = document.querySelectorAll('.scroll-links')

scrollarray.forEach( (link) => {
    link.addEventListener("click", function(e){
        // preventDefault
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id);
        
        let position = element.offsetTop
        window.scrollTo({
            left:0,top:position,
        })
        .linksContainer.style.height=0;
    })
    
});



