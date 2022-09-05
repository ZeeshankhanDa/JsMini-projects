// const addBtn = document.querySelectorAll('.btn');
const addDl  = document.querySelectorAll('.flex');

addDl.forEach(function (e) {
    const btn = e.querySelector('.btn')
    console.log(btn)
    btn.addEventListener('click',function(){


        addDl.forEach(function(item){
            // console.log(item)

            if(item!==e)
            {
                item.classList.remove('ccc')
                console.log(e)

            }
        })
              e.classList.toggle('ccc')
              
    })
    
});
