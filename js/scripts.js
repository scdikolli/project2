$(document).ready(function(){

console.log('scripts loaded');

//Slick Slider
$('.single-item').slick();
});

//Slick Quiz
var quizJSON = {
    "info": {
        "name":    "Test your knowledge!",
        "main":    "Answer the following five questions to test your knowledge about the previous educational slider about the science behind a boomerang.",
        "level1":  "100%!",
        "level2":  "75%",
        "level3":  "50%",
        "level4":  "25%",
        "level5":  "Yikes"
    },
    "questions": [
        { //Question 1
            "q": "Which direction should a boomerang be thrown?",
            "a": [
                {"option": "Horizontally",       "incorrect": true},
                {"option": "Vertically",          "correct": true},
                {"option": "Backwards",    "incorrect": true}
            ],
            "correct": "Correct!",
            "incorrect": "Try again next time."
        },
        { //Question 2
          "q": "The wings of a boomerang are similar to which of the following?",
          "a": [
              {"option": "Dishwasher engine",       "incorrect": true},
              {"option": "Windshield wipers",          "incorrect": true},
              {"option": "Propeller",    "correct": true}
          ],
          "correct": "Correct!",
          "incorrect": "Try again next time."
        },
        { //Question 3
          "q": "What is the name of the effect created by the speed of the wings?",
          "a": [
              {"option": "Persuasion",       "incorrect": true},
              {"option": "Precession",          "correct": true},
              {"option": "Percussion",    "incorrect": true}
          ],
          "correct": "Correct!",
          "incorrect": "Try again next time."
        },
        { //Question 4
          "q": "How does air act as an important force on a boomerang?",
          "a": [
              {"option": "Counterbalancing opposing forces to keep the throw of the boomerang steady",       "correct": true},
              {"option": "Producing a pyramid-like motion",          "incorrect": true},
              {"option": "Creating an effect known as precession",    "incorrect": true}
          ],
          "correct": "Correct!",
          "incorrect": "Try again next time."
        },
        { //Question 5
          "q": "A boomerang can resist the force of gravity.",
          "a": [
              {"option": "True",       "correct": true},
              {"option": "False",          "incorrect": true}
          ],
          "correct": "Correct!",
          "incorrect": "Try again next time."
        },
    ]
}

$(function () {
    $('#slickQuiz').slickQuiz({
        // options
    });
});

//Image Map Resize
$('map').imageMapResize();


//Tooltip
var image1 = document.getElementById('target1');
var tooltip1 = document.getElementById('content1');

image1.addEventListener('mouseenter', function(){
  console.log('testing tooltip');
  tooltip1.style.opacity = 1;
  tooltip1.style.transition = '0.4s linear';
});

image1.addEventListener('mouseout', function(){
  console.log('testing tooltip');
  tooltip1.style.opacity = 0;
  tooltip1.style.transition = '0.4s linear';
});

var image2 = document.getElementById('target2');
var tooltip2 = document.getElementById('content2');

image2.addEventListener('mouseenter', function(){
  console.log('testing tooltip2');
  tooltip2.style.opacity = 1;
  tooltip2.style.transition = '0.4s linear';
});

image2.addEventListener('mouseout', function(){
  console.log('testing tooltip2');
  tooltip2.style.opacity = 0;
  tooltip2.style.transition = '0.4s linear';
});

var image3 = document.getElementById('target3');
var tooltip3 = document.getElementById('content3');

image3.addEventListener('mouseenter', function(){
  console.log('testing tooltip3');
  tooltip3.style.opacity = 1;
  tooltip3.style.transition = '0.4s linear';
});

image3.addEventListener('mouseout', function(){
  console.log('testing tooltip3');
  tooltip3.style.opacity = 0;
  tooltip3.style.transition = '0.4s linear';
});

var image4 = document.getElementById('target4');
var tooltip4 = document.getElementById('content4');

image4.addEventListener('mouseenter', function(){
  console.log('testing tooltip4');
  tooltip4.style.opacity = 1;
  tooltip4.style.transition = '0.4s linear';
});

image4.addEventListener('mouseout', function(){
  console.log('testing tooltip4');
  tooltip4.style.opacity = 0;
  tooltip4.style.transition = '0.4s linear';
});

var image5 = document.getElementById('target5');
var tooltip5 = document.getElementById('content5');

image5.addEventListener('mouseenter', function(){
  console.log('testing tooltip5');
  tooltip5.style.opacity = 1;
  tooltip5.style.transition = '0.4s linear';
});

image5.addEventListener('mouseout', function(){
  console.log('testing tooltip5');
  tooltip5.style.opacity = 0;
  tooltip5.style.transition = '0.4s linear';
});
