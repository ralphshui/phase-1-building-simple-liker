// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
heart = document.getElementsByClassName("like-glyph");
errorMsg = document.getElementById("modal");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", () => {
    if(heart[i].textContent === FULL_HEART) {
      heart[i].textContent = EMPTY_HEART;
      heart[i].classList.remove("activated-heart")
      setTimeout(() => {alert("Successlly Uniked!")}, 100)
    }else mimicServerCall()
          .then(() => {
            heart[i].textContent = FULL_HEART
            heart[i].classList.add("activated-heart")
            setTimeout(() => {alert("Successlly Liked!")}, 100)
          })
          .catch(() => {
            errorMsg.classList.remove("hidden");
            setTimeout(() => errorMsg.classList.add("hidden"), 3000);
          })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
