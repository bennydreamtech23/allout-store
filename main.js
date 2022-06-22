  
let couponEl = document.getElementById("cupon-el")
couponEl.addEventListener("click", function(){
  couponEl.innerHTML+= 
  `
  <p>
  ${"Enter your coupon code here : <br><input type='text' value=''>"} 
  </p>
  `
  } 
)

  