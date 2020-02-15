'use strict'
function fun1() {
    var rng = document.getElementById('r1'),
        i1 = document.getElementById('i1'),
        t1 = document.getElementById('t1'),
        hue = 'RGB(' + (20 + rng.value) + ',' + (255 - rng.value) + ',00)';

    t1.innerHTML = "Photoshop";
    i1.value = rng.value;
    t1.style.color = hue;
    i1.innerHTML = i1.value + '';
}
function fun2() {
    var rng = document.getElementById('r2'),
        i2 = document.getElementById('i2'),
        t2 = document.getElementById('t2'),
        hue = 'RGB(' + (20 + rng.value) + ',' + (255 - rng.value) + ',00)';

    t2.innerHTML = "Illustrator";
    i2.value = rng.value;
    t2.style.color = hue;
    i2.innerHTML = i2.value + '';
}
function fun3() {
    var rng = document.getElementById('r3'),
        i3 = document.getElementById('i3'),
        t3 = document.getElementById('t3'),
        hue = 'RGB(' + (20 + rng.value) + ',' + (255 - rng.value) + ',00)';
    t3.innerHTML = "Html";
    i3.value = rng.value;
    t3.style.color = hue;
    i3.innerHTML = i3.value + '';
}
function fun4() {
    var rng = document.getElementById('r4'),
        i4 = document.getElementById('i4'),
        t4 = document.getElementById('t4'),
        hue = 'RGB(' + (20 + rng.value) + ',' + (255 - rng.value) + ',00)';

    t4.innerHTML = "Css";
    i4.value = rng.value;
    t4.style.color = hue;
    i4.innerHTML = i4.value + '';
}
function fun5() {
    var rng = document.getElementById('r5'),
        i5 = document.getElementById('i5'),
        t5 = document.getElementById('t5'),
        hue = 'RGB(' + (20 + rng.value) + ',' + (255 - rng.value) + ',00)';
    t5.innerHTML = "JavaScript";
    i5.value = rng.value;
    t5.style.color = hue;
    i5.innerHTML = i5.value + '';
}
fun1();
fun2();
fun3();
fun4();
fun5();


function ChangePic1(picture){
   document.getElementById('Basketball').src = picture;
}

function resetPic1(){
    document.getElementById('Basketball').src = "basketball_icon.png";
}


function ChangePic2(picture){
    document.getElementById('Painting').src = picture;
 }
 
 function resetPic2(){
     document.getElementById('Painting').src = "paint_icon.png";
 }
 
function ChangePic3(picture){
    document.getElementById('Swimming').src = picture;
 }
 
 function resetPic3(){
     document.getElementById('Swimming').src = "swiml_icon.png ";
 }
 
function ChangePic4(picture){
    document.getElementById('Reading').src = picture;
 }
 
 function resetPic4(){
     document.getElementById('Reading').src = "read_icon.png";
 }
 
function ChangePic5(picture){
    document.getElementById('ChillOut').src = picture;
 }
 
 function resetPic5(){
     document.getElementById('ChillOut').src = "lifestylel_icon.png";
 }
 
function ChangePic6(picture){
    document.getElementById('Education').src = picture;
 }
 
 function resetPic6(){
     document.getElementById('Education').src = "book_icon.png";
 }
 
