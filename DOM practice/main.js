var num1 = document.getElementById('input1');
var num2 = document.getElementById("input2");
var button = document.getElementsByTagName('button')[0];
var result = document.getElementById('answer');

button.addEventListener('click', function(){

    var int1 = parseInt(num1.value);
    var int2 = parseInt(num2.value);
    
    var paragraph = document.createElement('p');
    var addition = document.createTextNode(int1 + int2);

    paragraph.appendChild(addition);
    result.appendChild(paragraph).style.display = 'inline-block';
    console.log(paragraph);

    

    
})











































