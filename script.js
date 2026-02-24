document.getElementById('red').addEventListener("click",()=>{

   document.getElementById('red').style.backgroundColor='red';
})

document.getElementById('blue').addEventListener('click',()=>{
    document.getElementById('blue').style.backgroundColor='blue';
})
document.getElementById('green').addEventListener('click',()=>{
    document.getElementById('green').style.backgroundColor='green';
})

document.getElementById('yellow').addEventListener('click',()=>{
    document.getElementById('yellow').style.backgroundColor='yellow';
})

document.getElementById('txtbox').addEventListener('click',()=>{
document.getElementById('txtbox').value='';
})

document.getElementById('form').addEventListener('submit',(event)=>{
event.preventDefault();
document.getElementById('h1').innerHTML= 'hello '+document.getElementById('txtbox').value;

})