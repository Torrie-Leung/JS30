;(function(){
  let canvas = document.querySelector('#draw')
  let ctx = canvas.getContext('2d')
  ctx.strokeStyle = 'hsl(0,100%,50%)'
  ctx.lineWidth = 50
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  let drawing = false
  let x =0,
      y = 0;

  canvas.addEventListener('mousedown', (e) => {
    drawing = true
    [x,y] = [e.offsetX,e.offsetY]

  })

  canvas.addEventListener('mousemove', () => {
    if(!drawing) return;
    console.log('draw')
    
  })

  canvas.addEventListener('mouseup', () => {
    
  })

  // canvas.addEventListener('mouseout', () => {
    
  // })

  canvas.addEventListener('mouseleave', () => {
    
  })
})();