;(function(){
  const sec = document.querySelector('.second-hand')
  const min = document.querySelector('.min-hand')
  const hour = document.querySelector('.hour-hand')

  function setClock(){
    let data = new Date()

    let secDeg = data.getSeconds() * 6// 360/60
    let minDeg = data.getMinutes() * 6// 360/60
    let hourDeg = data.getHours() * 30// 360/12

    sec.style.transform = `rotate(${secDeg}deg)`
    min.style.transform = `rotate(${minDeg}deg)`
    hour.style.transform = `rotate(${hourDeg}deg)`
  }

  setClock()//initialize
})()