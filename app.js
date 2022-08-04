let resuld =document.querySelector('#resuld')
i=0
function gow(){
    resuld.innerHTML=i;
    i++
    if(i==34){
        i=0
    }
}
function go(){
    resuld.innerHTML='0'
    i=1
}