var i;
i=0;
function glow(){
    if (i==0) {
        document.getElementById("light").style.visibility= "visible";
        i=1;  //including light is now on
        document.getElementById("button").style.top="85px";
        document.getElementById("button").style.boxShadow="none";
    }
    else{
        document.getElementById("light").style.visibility="hidden";
        document.getElementById("button").style.top="80px";
        document.getElementById("button").style.boxShadow="0px 5px #666666";
       i=0;//indicating light is now off
    }
}