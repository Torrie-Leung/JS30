(function(){
  window.addEventListener('keydown',playHandler)

  function playHandler(e){
    //play music
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(audio){
      audio.currentTime = 0;//cosecutive playing 
      audio.play()
    }
    

    //dom style
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(dom)dom.classList.add('playing')

    document.querySelectorAll('.key').forEach( key => {
      key.addEventListener('transitionend',transitionendHandler)
    })
    
    function transitionendHandler(e){
      if(e.propertyName === 'transform'){
        e.currentTarget.classList.remove('playing')
      }
    }
  }
})();