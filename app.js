var video = document.getElementById("videoo");
var button = document.getElementById("bt");

button.onclick = function(){
    if(button.innerHTML=="看花絮"){
        button.innerHTML="看正片";
        video.src="https://www.youtube.com/embed/paPX9X6Un_U";
    }
    else{
        button.innerHTML="看花絮";
        video.src="https://www.youtube.com/embed/F5LhFqFplPo";
    }
};
