//let myButton = documnet.getElementById('myButton');
//let myButtons = document.getElementsByClassName('myButtons');

// function handleClick(){
//     document.getElementBsyId('myButton').style.backgroundColor = "red";
//     //myButton.style.backgroundColor = "red";
//     //myButton.innerHTML = "clicked";
    
// }

const txt1 = document.getElementById('user1');
const txt2 = document.getElementById('val1');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');

function fun1(){
    out1.innerHTML = txt1.value;
    out2.innerHTML = txt2.value;
    
}

btn1.addEventListener('click',fun1);
