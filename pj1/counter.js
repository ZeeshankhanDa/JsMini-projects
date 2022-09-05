// let cntResult = document.getElementById('cn-number')
// var Dcr = document.getElementById('btn-dcr') 
// const Incr = document.getElementById('btn-incr')
// const Rst = document.getElementById('btn-reset')
// let cnValue = 0;
// Dcr.addEventListener('click',function(){
//     cnValue--;
//     cntResult.textContent=cnValue;
// });
// Incr.addEventListener('click',function(){
//     cnValue++;
//     cntResult.textContent=cnValue;
// });
// Rst.addEventListener('click',function(){
//     cnValue=0
//     cntResult.textContent=cnValue;
    
// });

// Dcr.addEventListener('click',counteR());
// function counteR(){

//     if(Dcr.clicked == true){
//         cnValue--;
//         cntResult.textContent=cnValue;
//         console.log(cnValue)
            
//         // }else if(Incr.clicked==true){
//         //     cnValue++;
//         //     cntResult.textContent=cnValue;

//         }else if(Rst==true){
//             console.log('click')

//         }

// }








const Btn = document.querySelectorAll('#btn')
let value = 0
const btnvalue = document.getElementById('cn-number')
Btn.forEach(function(e){

    e.addEventListener('click',function(btn){

        
        let btndataSet = btn.currentTarget.dataset.id
        if(btndataSet=='increase'){
            value++;
            btnvalue.textContent=value;
            
        }
        else if(btndataSet=='decrease'){
            value--;
            btnvalue.textContent=value;
        }
        else if(btndataSet=='reset'){
            value=0;
            btnvalue.textContent=value;
        }
        
    });
    });    