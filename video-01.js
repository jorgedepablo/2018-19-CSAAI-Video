function main()
{
  console.log("Video 01...")

  //-- Obtener el elemento de video
  video1 = document.getElementById("video1")

  //-- Establecer el tamaño del vídeo
  video1.width = 800;
  video1.height= 650;



  console.log("Video 02...")
  //-- Boton de Play
  ver = document.getElementById('play')

  //-- Al apretar el boton de ver video
  ver.onclick = () => {
    console.log("Ver!")

    //-- Indicar la fuente del vídeo
    video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  }
}
