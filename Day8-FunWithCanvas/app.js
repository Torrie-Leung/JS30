;(function(){
  let canvas = document.querySelector('#draw')
  let ctx = canvas.getContext('2d')
  ctx.strokeStyle = 'hsl(0,100%,50%)'
  ctx.lineWidth = 50
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  let drawing = false
  let x = 0,
      y = 0;

  canvas.addEventListener('mousedown', e => {
    drawing = true
    x = e.offsetX
    y = e.offsetY
    console.log(e.offsetX)

  })
  console.log(x,y)
  canvas.addEventListener('mousemove', e => {
    if(!drawing) return;
    console.log('draw')

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX,e.offsetY)
    x = e.offsetX
    y = e.offsetY
    ctx.stroke()
  })

  canvas.addEventListener('mouseup', () => {
    
  })

  // canvas.addEventListener('mouseout', () => {
    
  // })

  canvas.addEventListener('mouseleave', () => {
    
  })
})();