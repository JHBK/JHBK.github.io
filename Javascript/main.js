var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/jhbk.jpg') {
    	
      myImage.setAttribute ('src','Images/jhbk1.jpg');
    } else {
      myImage.setAttribute ('src','Images/jhbk.jpg');
    }
}



var colors = ['#F3F781', '#A9D0F5', '#81F79F']; 
var active = 0;
setInterval(function(){
    document.querySelector('html').style.background = colors[active];
    active++;
    if (active == colors.length) active = 0;
}, 3000);