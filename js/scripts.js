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
var image = document.getElementById('target1');
var tooltip = document.getElementById('content1');

image.addEventListener('mouseenter', function(){
  console.log('testing tooltip');
  tooltip.style.opacity = 1;
  tooltip.style.transition = '0.4s linear';
});

image.addEventListener('mouseout', function(){
  console.log('testing tooltip');
  tooltip.style.opacity = 0;
  tooltip.style.transition = '0.4s linear';
});
