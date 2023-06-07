function colorchange(){
    var a=document.getElementById("color");
    var b=a.value;
    a.style.backgroundColor=b;
}


function background(){
    var d=document.getElementById("change");
    var c=d.value;
    var z=document.getElementsByTagName("body");
    z[0].style.backgroundColor=c;
    
}

function font(){
    var f=document.getElementsByClassName("line");
    f[0].style.fontSize="40px";
    
}