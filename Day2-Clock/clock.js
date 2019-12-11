;(function(){
  const sec = document.querySelector('.second-hand')
  const min = document.querySelector('.min-hand')
  const hour = document.querySelector('.hour-hand')

  function setClock(){
    let data = new Date()

    let secDeg = data.getSeconds() * 6// 360/60
    let minDeg = data.getMinutes() * 6+data.getSeconds()*6/60// 360/60
    let hourDeg = data.getHours() * 30+ data.getMinutes() * 30/60// 360/12

    sec.style.transform = `rotate(${secDeg}deg)`
    min.style.transform = `rotate(${minDeg}deg)`
    hour.style.transform = `rotate(${hourDeg}deg)`
  }

  function timeoutHandler(){
    setClock()
    setTimeout(timeoutHandler,1000)
  }

  function animationHandler(){
    setClock()
    window.requestAnimationFrame(animationHandler);
  }

  setClock()//initialize

  // setInterval(setClock,1000)

  // setTimeout(timeoutHandler,1000)

  window.requestAnimationFrame(animationHandler);
})()