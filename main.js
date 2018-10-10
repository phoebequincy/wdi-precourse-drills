console.log("hello world")
document.addEventListener("DOMContentLoaded",function(){
  let selector = document.getElementByClassName("sections")
    console.log(selector)
  selector[0].addEventListener("click", function(event){
    console.log("test")
  })

})
var body = document.getElementsByTagName("body")[0]
var header = document.getElementByID()
