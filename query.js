document.addEventListener('keydown',(e)=>{
    let keyname=document.getElementById("count");
    keyname.innerText=e.key;

    let key_number=document.getElementById("code1");
    key_number.innerText=e.keyCode;
    key_number.style.color="purple";
})

