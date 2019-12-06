(function(){
  window.addEventListener('keydown',playHandler)

  function playHandler(e){
    //play music
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    //dom style
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`)
    audio.play()
  }
})();