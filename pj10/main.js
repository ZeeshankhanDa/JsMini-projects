// ----select item----

const alert = document.querySelector('.alert')
const form = document.querySelector('.list-main')
const submitt = document.querySelector('.smbt') 
// grocery as grocinp
const grocInp = document.querySelector('.inp')
const container = document.querySelector('.item-nav')
const list = document.querySelector('.item-list')
const clearbtn = document.querySelector('.clearBtn ')

// edit option
let editElement;
let editFlag = false;
let editid = " " ;

// ****event listener****
// clear btn
clearbtn.addEventListener('click',clearButton)
// submitform
const value = grocInp.value
submitt.addEventListener('click',additem)



// function
function additem(e){  
e.preventDefault();
const value= grocInp.value;
const id = new Date().getTime().toString();

if(value && !editFlag){
 const element = document.createElement('div')
// add class
 element.classList.add('item-nav')
// add id
 const attr = document.createAttribute('data-id')
 attr.value=id;
 element.setAttributeNode(attr);

 console.log(element)

 element.innerHTML=`<div class="item">
<h4 class="menu-item">${value}</h4>
<button class="btn-edit"><i class="fas fa-edit"></i></button>
<button class="btn-trash"><i class="fas fa-trash"></i></button>
</div>`
const deletebtn = element.querySelector('.btn-trash')
const editbtn = element.querySelector('.btn-edit')
deletebtn.addEventListener('click',deleteitem);
editbtn.addEventListener('click',edititem)




form.classList.add('show-container')
// append child
list.appendChild(element)
// display alert
displayAlert("item added to list","success")
// add to local storage
addToLocalStorage(id,value);
// set back to defaul
setBackToDefault()

} 
else if( value&&editFlag){

}else{
    displayAlert('pls enter value',"danger")
}
}
function displayAlert(text,action){

    alert.textContent = text ;
    alert.classList.add(`alert-${action}`);
    // remove alert    using callback function(){}
    setTimeout(function(){
        alert.textContent ="";
        alert.classList.remove(`alert-${action}`)
    },2000)
}

//clear btn
function clearButton(){
    // console.log('click')
    const item = document.querySelectorAll('.item-nav')
    if(item.length>0){
        item.forEach(function(items){
            list.removeChild(items)
        });
      
    }
    form.classList.remove('show-container')
    displayAlert('pls enter value',"danger")
    setBackToDefault()
    
    // localStorage.removeItem("list");


} 
// delete function
function deleteitem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id
    list.removeChild(element);
    if (list.children.length===0) {
        form.classList.remove('show-container')
        
    }
    displayAlert('item removed','danger')
    setBackToDefault()

    // remove from localStorage
    // removefromlocalstorage(id)
}

// edit function
function edititem(){
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement =e.currentTarget.parentElement.previousElementSibling;
    grocery.value=ed
    console.log(editElement)
}


// set back to default
function setBackToDefault() {
    grocInp.value="";
    editFlag = false;
    editid='';
    // submitt.textContent='EDIT'
}
// *****LOCAL STORAGE****
function addToLocalStorage(id,value) {
    
}
function removefromlocalstorage(id){

}