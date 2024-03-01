// A Counter that increases by 1 each second

let counter = document.getElementById("counter")
let count = 0
let intervalID = setInterval(function(){
        count += 1;
        counter.textContent = count
    }, 1000)

// Plus and Minus buttons that increment or decrement the counter

let minus = document.getElementById("minus");
minus.addEventListener('click', function (){
    count--;
    counter.textContent = count
})

let plus = document.getElementById("plus");
plus.addEventListener('click', function (){
    count++;
    counter.textContent = count
})

// Pause button, which disables all the other buttons and switches the
// word pause to resume and start the timer again

let isPaused = false;
let pause = document.getElementById("pause")

pause.addEventListener('click', function pauseTimer(){
    if (!isPaused) {
        isPaused = true;
        clearInterval(intervalID);
        pause.textContent = "resume";
        console.log(isPaused)
    } else {
        isPaused = false;
        pause.textContent = "pause";
        intervalID = setInterval(function(){
            count += 1;
        counter.textContent = count;
        }, 1000); 
        console.log(isPaused, "else")
    }
});

// A "like" button (❤️) that adds a "like" for the number that is 
// currently displayed by the timer

let heart = document.getElementById("heart").addEventListener('click', function addLikes(){
    let likes = document.getElementsByClassName("likes")[0]
    let li = document.createElement("li")
    li.textContent = `${count} has been liked!`
    likes.append(li)
})

// A comment box that adds comments when submitted

let commentBox = document.getElementById("comment-input");
let commentForm = document.getElementById("comment-form");
let commentsList = document.getElementsByClassName("comments")[0];

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let commentText = commentBox.value;
  let newComment = document.createElement('li');
  newComment.textContent = commentText;
  commentsList.appendChild(newComment);
  commentBox.value = '';
  });