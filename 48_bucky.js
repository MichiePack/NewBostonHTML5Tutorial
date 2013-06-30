function doFirst(){
    var button=document.getElementById('button');
    button.addEventListener('click', saveCrap, false);
    display(); //display info the very first time
}
function saveCrap(){
    var one=document.getElementById('one').value;
    var two=document.getElementById('two').value;
    sessionStorage.setItem(one,two);
    display(); //no parameter
    document.getElementById('one').value = ""; //clear value
    document.getElementById('two').value = ""; //clear value
}
function display(){ //no more parameter
    var rightbox=document.getElementById('rightbox');
    rightbox.innerHTML="";

    for(var x=0;x<sessionStorage.length;x++){ //sessionStorage.length = number of items in storage
        var a = sessionStorage.key(x); //key(0) would represent the first item in storage
        var b = sessionStorage.getItem(a); //the value of item(a)
        rightbox.innerHTML+= a+" - "+b+"<br />"; //loop through and print all items in storage
    }
}
window.addEventListener('load', doFirst, false);

//go to other websites, info is still storedlse);