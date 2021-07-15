function myFunction () {   
    var red=document.getElementById("redlight");
    var yellow=document.getElementById("yellowlight");
    var green=document.getElementById("greenlight");  
    setTimeout(function () {       
        red.style.opacity=1;  
        yellow.style.opacity=.3;
        green.style.opacity=.3;      
    },10000);

    setTimeout(function () {      
        yellow.style.opacity=1;  
        red.style.opacity=.3;
        green.style.opacity=.3;          
    },2000);

    setTimeout(function () {   
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;              
    },15000);
}
var timer = setTimeout(function () {    
    myFunction()
},1000);
