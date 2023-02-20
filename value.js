let count=0
document.getElementById("decrease").onclick=function(){
    document.getElementById("valueid").innerHTML=count;
    count-=1;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("valueid").innerHTML=count;
}
document.getElementById("increase").onclick=function(){
    count+=1;
    document.getElementById("valueid").innerHTML=count;
}