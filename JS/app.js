var video = document.getElementById("videoo");
var button = document.getElementById("bt");

button.onclick = function(){
    if(button.innerHTML=="看花絮"){
        button.innerHTML="看正片";
        video.src="https://www.youtube.com/embed/Y4qqglV8lwk";
    }
    else{
        button.innerHTML="看花絮";
        video.src="https://www.youtube.com/embed/GrAuP-Xx-EU";
    }
}; 