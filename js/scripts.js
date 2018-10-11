$(document).ready(function(){

console.log('scripts loaded');

$('#target1').mouseenter(function(){
  console.log('testing the target area');
  $('#boomerang').css('transform', 'rotateZ(90deg)');
});

$('.single-item').slick();

$('img[usemap]').rwdImageMaps();

});
