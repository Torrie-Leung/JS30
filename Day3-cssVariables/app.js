;(function(){
  const inputs = document.querySelectorAll('.controls input')

  function changeHandler(){
    console.log(this.name)
  }
  inputs.forEach(function(input){
    input.addEventListener('change',changeHandler)
  })
})()