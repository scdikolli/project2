$(document).ready(function(){

console.log('scripts loaded');

$('#target1').mouseenter(function(){
  console.log('testing the target area');
  $('#boomerang').css('transform', 'rotateZ(90deg)');
});

$('.single-item').slick();

});

var quizJSON = {
    "info": {
        "name":    "The Quiz Header",
        "main":    "The Quiz Description Text",
        "results": "The Quiz Results Copy",
        "level1":  "The highest ranking",
        "level2":  "The almost highest ranking",
        "level3":  "The middle ranking",
        "level4":  "The almost lowest ranking",
        "level5":  "The lowest ranking"
    },
    "questions": [
        {
            "q": "The Question?",
            "a": [
                {"option": "an incorrect answer",       "correct": false},
                {"option": "a correct answer",          "correct": true},
                {"option": "another correct answer",    "correct": true}
            ],
            "correct": "The Correct Response Message",
            "incorrect": "The Incorrect Response Message",
            "select_any": false, // optional, see "Question Options" above
            "force_checkbox": false // optional, see "Question Options" above
        }
    ]
}

$(function () {
    $('#slickQuiz').slickQuiz({
        // options
    });
});
