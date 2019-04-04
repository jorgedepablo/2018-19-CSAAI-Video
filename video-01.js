
function main()
{
  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video1.height = 100;
  video1.width = video1.height*(16/9);
  video1.onmouseover = () => {
    video1.muted=false;
  }
  video1.onmouseout = () => {
    video1.muted=true;
  }

  video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video2.height = 100;
  video2.width = video2.height*(16/9);
  video2.onmouseover = () => {
    video2.muted=false;
  }
  video2.onmouseout = () => {
    video2.muted=true;
  }

  video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
  video3.height = 100;
  video3.width = video3.height*(16/9);
  video3.onmouseover = () => {
    video3.muted=false;
  }
  video3.onmouseout = () => {
    video3.muted=true;
  }

  videoF.height = 250;
  videoF.width = videoF.height*(16/9);
  videoF.src = "test.mp4";


  play1 = document.getElementById('play1');
  play2 = document.getElementById('play2');
  play3 = document.getElementById('play3');


  play1.onclick = () => {
    videoF.src = video1.src;
    video1.style.border = '3px solid orange';
    video2.style.border = '0px';
    video3.style.border = '0px';
  }

  play2.onclick = () => {
    videoF.src = video2.src;
    video1.style.border = '0px';
    video2.style.border = '3px solid orange';
    video3.style.border = '0px';
  }

  play3.onclick = () => {
    videoF.src = video3.src;
    video1.style.border = '0px';
    video2.style.border = '0px';
    video3.style.border = '3px solid orange';
  }
}
