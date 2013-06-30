function doFirst(){
    myPic = document.getElementById('facepic');
    myPic.addEventListener("dragstart", startDrag, false);
    myPic.addEventListener("dragend", endDrag, false);
    leftBox = document.getElementById('leftbox');
    leftBox.addEventListener("dragenter", dragEnter, false);
    leftBox.addEventListener("dragleave", dragLeave, false);
    leftBox.addEventListener("dragover", function(e){e.preventDefault();}, false);
    leftBox.addEventListener("drop", dropped, false);

    getName = document.getElementById('getName');
    getName.addEventListener("click", showName, false);
}
function startDrag(e){
    var code = '<img src="smallPhoto.jpg">';
    e.dataTransfer.setData('Text', code);
}
function dropped(e){
    //e.preventDefault();
    leftBox.innerHTML = e.dataTransfer.getData('Text');
    leftBox.style.background="White";
}
function endDrag(e){
    pic = e.target;
    pic.style.visibility='hidden';

}
function dragEnter(e){
    e.preventDefault();
    leftBox.style.background="skyblue";
    leftBox.style.border="3px solid red";

}
function dragLeave(e){
    e.preventDefault();
    leftBox.style.background="White";
    leftBox.style.border="3px solid blue";
}
function showName(e){
    //alert('yoyoma!');
    picName = leftBox.innerHTML;
    alert(picName);
}

window.addEventListener("load", doFirst, false);
