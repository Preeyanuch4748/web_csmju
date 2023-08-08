
function myFunction() {
    alert("Hello CSMJU");

    console.log("Hello Monday");

    console.log(document.getElementById("header1").innerText);

    document.getElementById("header1").innerHTML = "Change.....";    
    document.getElementById("header1").style.color = "FF0000";

    var x = 8;
    var y = 20;
    var z = 3;

    //หาค่าเฉลี่ย --> header2

document.getElementById("header2").innerHTML = ((x+y+z)/3).toFixed(2);
//document.getElementById("header2").innerHTML = ((x+y+z)/3).toPrecision(2); 
//เหมือนกัน toFixed, toPrecision

function myFunction(){

}

function likeFunction(){

var couter = parseInt(document.getElementById("result").innerText);
     //เพิ่ม couter 1
    couter++;
 document.getElementById("result").innerText = couter;    
 
 // ปรับขนาดตัวอักษรเพิ่มขึ้น 1
 document.getElementById("result").style.fontSize=10+couter+"px";    
 <i class="fa-solid fa-heart" style="color: #f21c52;"></i>

}

function loveFunction(){
//เพิ่ม couter 10
//ปรับขนาดตัวอักษรเพิ่มขึ้น 5

}


}