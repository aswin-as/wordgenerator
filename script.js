let run = document.getElementById("run-btn");

const copy = document.getElementById("btn");
let result = document.getElementById("main-result");


run.addEventListener('click',function(){

    const word = document.getElementById('word').value;
    const num = document.getElementById("num").value;
    let mainContent = "";

    for(let i = 0; i<num; i++){
       
        mainContent += word + "\n";

    }
    result.innerHTML = mainContent;
    
    
});








// copy function is here

copy.addEventListener('click',function(){
    var copyText = document.getElementById("main-result");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);


    alert("Text copied");
});