;(function(){
  let canvas = document.querySelector('#draw')
  let ctx = canvas.getContext('2d')
  let colorDeg = 0
  let lineWidth = 20
  ctx.strokeStyle = `hsl(${colorDeg},80%,50%)`
  ctx.lineWidth = lineWidth 
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
    // console.log('draw')
    colorDeg = colorDeg <360 ? colorDeg + 1 : 0
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${colorDeg},80%,50%)`
    lineWidth = lineWidth > 1 ? lineWidth - 1 : 35
    ctx.lineWidth = lineWidth
    console.log(lineWidth)
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX,e.offsetY)
    x = e.offsetX
    y = e.offsetY
    ctx.stroke()
  })

  canvas.addEventListener('mouseup', () => {
    drawing = false
  })

  // canvas.addEventListener('mouseout', () => {
    
  // })

  canvas.addEventListener('mouseleave', () => {
    
  })
})();