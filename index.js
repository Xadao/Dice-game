window.addEventListener('load', randDice)

function randDice(){
  var parArr = document.querySelectorAll("p")
  for (var i = 0; i < parArr.length; i++) {
    if (i === 0) {
      parArr[i].textContent = prompt("What is the first player's name?")
    }else{
      parArr[i].textContent = prompt("What is the second player's name?")
    }
  }

  var images = document.querySelectorAll("img")
  var randArray = [];
  for (var i = 0; i < images.length; i++) {
      var rnd = Math.floor(Math.random()*6+1);
      randArray.push(rnd);
  }

  for (var i = 0; i < images.length; i++) {
    document.querySelectorAll("img")[i].setAttribute("src", "images/dice"+randArray[i]+".png");
    }
  if(randArray[0]>randArray[1]){
    document.querySelector("h1").textContent = parArr[0].textContent+" wins!"
  }else if (randArray[0]==randArray[1]) {
    document.querySelector("h1").textContent = "It's a tie!"
  }else{
    document.querySelector("h1").textContent = parArr[1].textContent+" wins!"
  }
}
