var move=0;
var loc_avail=[true,true,true,true,true,true,true,true,true];
// var max_Move=9;
$(document).ready(function() {
  $(".reset-after").click(function(){
    $('.gsb').fadeIn();
    $('.uwb').fadeOut(0);
    $('.main-intraction').fadeOut();
    $('.play').fadeOut();
    $('.scores').fadeOut();
    $('.h-name').fadeOut();
    $('.oxf').addClass("game-reset");
    $('.flick').removeClass("flick");
    $('.oxf').addClass('far');
    $('.oxf').addClass('fa-circle');
    $('.oxf').removeClass('fas');
    $('.oxf').removeClass('fa-times');
    $(this).css("pointer-events","all");
    loc_avail=[true,true,true,true,true,true,true,true,true];
    move=0;
  });

});
  //setting input X for user.

function gameStarts() {

        human_input_box();





}

var loc_avail=[true,true,true,true,true,true,true,true,true];


function human_input_box() {

  $(".oxf").click(function () {

    $(this).addClass("fa-times");
    $(this).addClass("fas");
    $(this).removeClass("fa-circle");
    $(this).removeClass("far");
    $(this).removeClass("game-reset");
    $(this).css("opacity","1!important");
    $(this).css("pointer-events","none");
    var k = $(this).attr("key");
    loc_avail[k] = false;
    computerMove();
    move++;
  });

}

function computerMove() {


   // console.log(loc_avail);
   // console.log(loc_avail.length);

   var num_random=[];
   for(var j=0;j<loc_avail.length;j++){
     if(loc_avail[j]==true){

       num_random[j]=j;

       console.log(num_random[j]);
     }

   }
   var num_random_new = num_random.filter(function(v){return v!==''});

   var rand = num_random_new[Math.floor(Math.random() * num_random_new.length)];
   $('.oxf_'+rand).css("opacity","1!important");
   $('.oxf_'+rand).removeClass("game-reset");
   $('.oxf_'+rand).css("pointer-events","none");

   loc_avail[rand] = false;

   if( $(".oxf_0").hasClass("fa-times") && $(".oxf_1").hasClass("fa-times") && $(".oxf_2").hasClass("fa-times")){
        us=parseInt($('.user-score').text());
        $('.user-score').text(us+1);
        $('.score-final-icon').addClass('fas');
        $('.score-final-icon').addClass('fa-trophy');
        $('.score-final-text').text("You Won");
        $('.win-show').modal();

      }
      if($(".oxf_0").hasClass("fa-circle") && $(".oxf_1").hasClass("fa-circle") && $(".oxf_2").hasClass("fa-circle")) {
        us=parseInt($('.cpu-score').text());
        $('.cpu-score').text(us+1);
        $('.score-final-icon').addClass('fa');
        $('.score-final-icon').addClass('fa-robot');
        $('.score-final-text').text("Bot Won");
        $('.win-show').modal();
      }
      if( $(".oxf_3").hasClass("fa-times") && $(".oxf_4").hasClass("fa-times") && $(".oxf_5").hasClass("fa-times")){
        us=parseInt($('.user-score').text());
        $('.user-score').text(us+1);
        $('.score-final-icon').addClass('fas');
        $('.score-final-icon').addClass('fa-trophy');
        $('.score-final-text').text("You Won");
        $('.win-show').modal();
      }
      // else if($(".oxf_3").hasClass("fa-circle") && $(".oxf_4").hasClass("fa-circle") && $(".oxf_5").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else if( $(".oxf_6").hasClass("fa-times") && $(".oxf_7").hasClass("fa-times") && $(".oxf_8").hasClass("fa-times")){
      //   us=parseInt($('.user-score').text());
      //   $('.user-score').text(us+1);
      //   $('.score-final-icon').addClass('fas');
      //   $('.score-final-icon').addClass('fa-trophy');
      //   $('.score-final-text').text("You Won");
      //   $('.win-show').modal();
      // }
      // else if($(".oxf_6").hasClass("fa-circle") && $(".oxf_7").hasClass("fa-circle") && $(".oxf_8").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else if( $(".oxf_0").hasClass("fa-times") && $(".oxf_3").hasClass("fa-times") && $(".oxf_6").hasClass("fa-times")){
      //   us=parseInt($('.user-score').text());
      //   $('.user-score').text(us+1);
      //   $('.score-final-icon').addClass('fas');
      //   $('.score-final-icon').addClass('fa-trophy');
      //   $('.score-final-text').text("You Won");
      //   $('.win-show').modal();
      // }else if($(".oxf_0").hasClass("fa-circle") && $(".oxf_3").hasClass("fa-circle") && $(".oxf_6").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else if($(".oxf_1").hasClass("fa-times") && $(".oxf_4").hasClass("fa-times") && $(".oxf_7").hasClass("fa-times")){
      //   us=parseInt($('.user-score').text());
      //   $('.user-score').text(us+1);
      //   $('.score-final-icon').addClass('fas');
      //   $('.score-final-icon').addClass('fa-trophy');
      //   $('.score-final-text').text("You Won");
      //   $('.win-show').modal();
      // }
      // else if($(".oxf_1").hasClass("fa-circle") && $(".oxf_4").hasClass("fa-circle") && $(".oxf_7").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else if( $(".oxf_2").hasClass("fa-times") && $(".oxf_5").hasClass("fa-times") && $(".oxf_8").hasClass("fa-times")){
      //   us=parseInt($('.user-score').text());
      //   $('.user-score').text(us+1);
      //   $('.score-final-icon').addClass('fas');
      //   $('.score-final-icon').addClass('fa-trophy');
      //   $('.score-final-text').text("You Won");
      //   $('.win-show').modal();
      // }
      // else if($(".oxf_2").hasClass("fa-circle") && $(".oxf_5").hasClass("fa-circle") && $(".oxf_8").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else if( $(".oxf_0").hasClass("fa-times") && $(".oxf_4").hasClass("fa-times") && $(".oxf_8").hasClass("fa-times")){
      //   us=parseInt($('.user-score').text());
      //   $('.user-score').text(us+1);
      //   $('.score-final-icon').addClass('fas');
      //   $('.score-final-icon').addClass('fa-trophy');
      //   $('.score-final-text').text("You Won");
      //   $('.win-show').modal();
      // }
      // else if($(".oxf_0").hasClass("fa-circle") && $(".oxf_4").hasClass("fa-circle") && $(".oxf_8").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else if( $(".oxf_2").hasClass("fa-times") && $(".oxf_4").hasClass("fa-times") && $(".oxf_6").hasClass("fa-times")){
      //   us=parseInt($('.user-score').text());
      //   $('.user-score').text(us+1);
      //   $('.score-final-icon').addClass('fas');
      //   $('.score-final-icon').addClass('fa-trophy');
      //   $('.score-final-text').text("You Won");
      //   $('.win-show').modal();
      // }
      // else if($(".oxf_2").hasClass("fa-circle") && $(".oxf_4").hasClass("fa-circle") && $(".oxf_6").hasClass("fa-circle")) {
      //   us=parseInt($('.cpu-score').text());
      //   $('.cpu-score').text(us+1);
      //   $('.score-final-icon').addClass('fa');
      //   $('.score-final-icon').addClass('fa-robot');
      //   $('.score-final-text').text("Bot Won");
      //   $('.win-show').modal();
      // }
      // else{
      //   if(move>8){
      //     $('.score-final-icon').addClass('fas');
      //     $('.score-final-icon').addClass('fa-smile-wink');
      //     $('.score-final-text').text("Its Draw");
      //     $('.win-show').modal();
      //   }
      // }



}
