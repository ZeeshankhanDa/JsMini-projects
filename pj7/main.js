const btn = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const article = document.querySelectorAll('.content')
about.addEventListener('click',function(e){
    const id = e.target.dataset.id;
    if(id){
        // remove active from otther button
        btn.forEach((btns)=>{
            btns.classList.remove('active')
            e.target.classList.add('active')
        })
        // hide other article
         article.forEach((art)=>{
            art.classList.remove('active')
        })
      const element = document.getElementById(id)
      element.classList.add('active')
    }
})