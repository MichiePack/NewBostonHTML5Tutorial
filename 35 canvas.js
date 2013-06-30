function doFirst(){
    var x = document.getElementById('canvas');
    canvas = x.getContext('2d');//global variable - anywhere in this file.

    var pic = new Image();
    pic.src="P1000569.JPG";
    pic.addEventListener("load", function(){canvas.drawImage(pic,0,0, x.width, x.height)}, false);   // size optional


}
window.addEventListener("load", doFirst, false);


/*
//---------41------
 canvas.font="bold 22px Tahoma";
 canvas.textAlign="start";

 canvas.save();

 canvas.font="bold 10px times";
 canvas.fillText("lets begin",10,20);

 canvas.rotate(1);
 canvas.fillText("after rotation",60,10)



 canvas.restore();
 canvas.fillText("after restoring",10,20);
//----------- 40 -------
 canvas.font="bold 22px Tahoma";
 canvas.textAlign="Start";
 canvas.fillText("start", 10,30);

 canvas.translate(100,150);
 canvas.fillText("after translate", 0,0);

 canvas.rotate(1);//radian
 canvas.fillText("after rotate",0,0);

 canvas.scale(1.5,4);
 canvas.fillText("after scale",10,20)
 //---------------


 canvas.shadowOffsetX = 4;
 canvas.shadowOffsetY = 4;
 canvas.shadowBlur = 16;
 canvas.shadowColor = 'rgba(0,0,255,.5)'

 canvas.font="bold 36px Tahoma";
 canvas.textAlign="end";
 canvas.fillText("omgwftbbg?", 300,100);
 canvas.strokeText("omgwftbbg?", 300,400);
 canvas.beginPath();
 canvas.moveTo(150,120);
 canvas.lineTo(230,400);
 canvas.lineTo(380,380);
 canvas.lineTo(500,150);


 //canvas.lineTo(70,250);
 //canvas.lineTo(300,200);
 canvas.closePath();
 canvas.stroke();
    canvas.fillStyle="blue";
canvas.strokeStyle="red";
canvas.strokeRect(10,10,100,100);
canvas.fillRect(10,120,100,100);
canvas.clearRect(20,130,45,65);

 var g = canvas.createLinearGradient(0,0,100,100);
 g.addColorStop(.0,"blue");
 g.addColorStop(.5,"green");
 g.addColorStop(1,"red");
 canvas.fillStyle=g;
 canvas.fillRect(10,10,100,100);
    */