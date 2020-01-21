// ;(function(){
  let canvas = document.querySelector('#draw')
  let ctx = canvas.getContext('2d')
  let colorDeg = 0
  let lineWidth = 20
  let direction = -1
  let alpha = 1
  let alphaDirection = 0.1
  ctx.strokeStyle = `hsl(${colorDeg},100%,50%,${alpha})`
  ctx.lineWidth = lineWidth 
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  let down = false
  let drawing = false
  let x = 0,
      y = 0;

  canvas.addEventListener('mousedown', e => {
    drawing = true
    down = true
    x = e.offsetX
    y = e.offsetY
    console.log(e.offsetX)

  })
  console.log(x,y)
  canvas.addEventListener('mousemove', e => {
    if(!down ||!drawing) return;
    // console.log('draw')
    
    ctx.beginPath();

  // customized alpha
    // if(alpha <= 0.1 || alpha >= 1 ){
    //   alphaDirection *= -1;
    // }
    // alpha += alphaDirection
    // console.log(alpha)

    ctx.strokeStyle = `hsl(${colorDeg},100%,50%,${alpha})`
    // lineWidth = lineWidth > 1 ? lineWidth - 1 : 35
    colorDeg = colorDeg <360 ? colorDeg + 1 : 0
    if(lineWidth < 1 || lineWidth > 50){
      direction *= -1;
    }
    lineWidth += direction


    ctx.lineWidth = lineWidth
    // console.log(lineWidth)
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX,e.offsetY)
    x = e.offsetX
    y = e.offsetY
    ctx.stroke()
  })

 document.addEventListener('mouseup', () => {
    down = false
    drawing = false
  })

  // canvas.addEventListener('mouseout', () => {
    
  // })

  canvas.addEventListener('mouseleave', () => {
    drawing = false
  })

  canvas.addEventListener('mouseenter', e => {
    drawing = true;
    x = e.offsetX
    y = e.offsetY
  })
// })();