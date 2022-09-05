const addBtn = document.querySelectorAll('.btn');
const addDl  = document.querySelector('.details');





addBtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        //  console.log(e.target.parentElement)
        const bbb = e.currentTarget.parentElement.nextElementSibling;
        const ccc = e.currentTarget.children[1]
        const ddd = e.currentTarget.children[0]
        // console.log(ccc)
        bbb.classList.toggle('onclick')
        ccc.classList.toggle('close')
        ddd.classList.toggle('open')

    })

   
})