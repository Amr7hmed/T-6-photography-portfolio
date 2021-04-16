AOS.init();

function getRandomSize(min, max) {
    let randomnumber = Math.round(Math.random() * (max - min) + min);
    return randomnumber;
  }
  
let allImages = "",
    arrayamg = 
["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg",
"11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg",
"21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg"];
  
function rendomimgshow(){
   shuffle(arrayamg);
   for(var i =0 ; i<arrayamg.length;){
    document.getElementById('photos').innerHTML += 
    `<div data-aos="zoom-in" data-aos-duration="3000"><img class="item" src="imag/${arrayamg[i]}"></div>`;
    i++
   }
}
rendomimgshow();

function rendomstyle(){
    let allimag = document.querySelectorAll('.item');
    shuffle(allimag)
    for(var i = 0 ; i< allimag.length ; i++){
        let height = getRandomSize(300,400);
        allimag[i].style.height = `${height}px`;
    }
    
}
rendomstyle();

function shuffle(arrayamg){
let curent = arrayamg.length ,
temp,
random;  
for(;curent>0;){
    random = Math.floor(Math.random()*curent); 
    curent--; 
    temp = arrayamg[curent];
        arrayamg[curent]=arrayamg[random];
        arrayamg[random]=temp;
}
return arrayamg;
}


//click in navspan show list nav 

let iconnav = document.querySelector('.icon'),
    aboutdiv = document.querySelector('.about');

iconnav.onclick = function(){
    aboutdiv.classList.toggle('open')
}