function main()
{
  video1 = document.getElementById("video1");
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video1.height = 100;
  video1.width = video1.height*(16/9);
  video1.onmouseover = () => {
    video1.muted=false;
  }
  video1.onmouseout = () => {
    video1.muted=true;
  }

  video2 = document.getElementById("video2");
  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video2.height = 100;
  video2.width = video2.height*(16/9);
  video2.onmouseover = () => {
    video2.muted=false;
  }
  video2.onmouseout = () => {
    video2.muted=true;
  }

  video3 = document.getElementById("video3");
  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
  video3.height = 100;
  video3.width = video3.height*(16/9);
  video3.onmouseover = () => {
    video3.muted=false;
  }
  video3.onmouseout = () => {
    video3.muted=true;
  }

  videoF = document.getElementById("videoF");
  videoF.height = 250;
  videoF.width = videoF.height*(16/9);
  videoF.src = "test.mp4";

  clk = document.getElementById('clk');

  play1 = document.getElementById('play1');
  play2 = document.getElementById('play2');
  play3 = document.getElementById('play3');
  bucle = document.getElementById('bucle');


  play1.onclick = () => {
    videoF.src = video1.src;
    videoF.currentTime = video1.currentTime;
    video1.style.border = '3px solid orange';
    video2.style.border = '0px';
    video3.style.border = '0px';
  }

  play2.onclick = () => {
    videoF.src = video2.src;
    videoF.currentTime = video2.currentTime;
    video1.style.border = '0px';
    video2.style.border = '3px solid orange';
    video3.style.border = '0px';
  }

  play3.onclick = () => {
    videoF.src = video3.src;
    videoF.currentTime = video3.currentTime;
    video1.style.border = '0px';
    video2.style.border = '0px';
    video3.style.border = '3px solid orange';
  }

  bucle.onclick = () => {
      if (bucle.style.border == '3px solid orange') {
          bucle.style.border = '0px';
          init = 0;
          finish = 0;
          // Si se quita el bucle el video vuelve a sincro con los pequeños
          if (video1.style.border == '3px solid orange'){
            videoF.currentTime = video1.currentTime;
          }
          if (video2.style.border == '3px solid orange'){
            videoF.currentTime = video2.currentTime;
          }
          if (video3.style.border == '3px solid orange'){
            videoF.currentTime = video3.currentTime;
          }
      } else {
          init = new Number(document.getElementById("start").value);
          finish = new Number(document.getElementById("end").value);
          bucle.style.border = '3px solid orange';
          videoF.currentTime = init;
      }

  }

  videoF.addEventListener("timeupdate",function(ev){
      var time  = (videoF.currentTime);
      var hours = Math.floor( time / 3600 );
      var minutes = Math.floor( (time % 3600) / 60 );
      var seconds = Math.floor(time % 60);

      //Anteponiendo un 0 a los minutos si son menos de 10
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      var result = hours + ":" + minutes + ":" + seconds;
      clk.innerHTML = result;

      //Hago lo del bucle
      if (finish != 0){
          if (videoF.currentTime > finish){
              videoF.currentTime = init;
          }
      }
  },true);
}
