
var button = document.querySelector(".play"),count = 0;
var audio=new Audio("cmyn.mp3");
button.onclick = function() {
  count += 1;

if (count % 2 ==0){
  document.querySelector(".play").innerHTML="▶";
 audio.pause();

}
else{
  document.querySelector(".play").innerHTML="≈";
audio.play();

  }
};
