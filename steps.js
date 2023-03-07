
const rightBtn = document.querySelector('#right-button');
const leftBtn = document.querySelector('#left-button');

rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft += 836;
  event.preventDefault();
});

leftBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft -= 836;
  event.preventDefault();
});

function klik(){
  var p = document.getElementById("status");
  p.value = p.value + 10;
  }
  $(function(){
      p.addEventListener('click', alert('dd'))
  });

  



  console.log("the steps")