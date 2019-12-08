(function(){
  function playHandler(e){
    //play music
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(audio){
      //console.log(audio.currentTime)
      audio.currentTime = 0;//cosecutive playing 
      audio.play()
    }
    //dom style
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(dom)dom.classList.add('playing')
    document.querySelectorAll('.key').forEach( key => {
      key.addEventListener('transitionend',transitionendHandler)
    })
  }
  
  function transitionendHandler(e){
    console.log(e.propertyName)
      if(e.propertyName === 'transform'|| e.propertyName === 'border-top-color'){
        e.currentTarget.classList.remove('playing')
      }
    }
  
  window.addEventListener('keydown',playHandler)
  
})();