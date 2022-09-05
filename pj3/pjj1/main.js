
const var1 =  document.querySelector('.btn-js1')
const var2 = document.querySelector('.btn-js2')
const var3 = document.querySelector('.ul-flex')

    // console.log(var1.classList);

var1.addEventListener('click', function(){
    var2.classList.add('btn-close')
    var1.classList.remove('btn-bars')
    var3.classList.remove('cccc')
    // console.log(var2.classList)
});

var2.addEventListener('click', function(){
    var2.classList.remove('btn-close')
    var1.classList.add('btn-bars')
    var3.classList.add('cccc')
    // console.log(var2.classList)
});

var1.addEventListener('mouseover',function(){
    var1.classList.add('fa-rotate-90')
    console.log(var1.classList);
});
var1.addEventListener('mouseout',function(){
    var1.classList.remove('fa-rotate-90')
    console.log(var1.classList);
});