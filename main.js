// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likesArray = [...document.getElementsByClassName("like")]

likesArray.forEach((item) => {
  item.addEventListener('click', () => {

    mimicServerCall()
    .then((res)=>{
      const heartSpan = item.children[0]

      if(heartSpan.classList.contains("activated-heart")){
        heartSpan.classList.remove("activated-heart")
        heartSpan.textContent =  EMPTY_HEART
      }
      else{
        heartSpan.textContent = FULL_HEART
        heartSpan.classList.add("activated-heart")
      }
    })
    .catch((err)=>{
      let errorText = document.getElementById("modal-message")
      let errorModal = document.getElementById('modal')
      errorText.textContent = err
      errorModal.classList.remove("hidden")
      setTimeout(()=> {
        errorModal.classList.add("hidden")
      }, "3000")
  
    })
  })
})





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
