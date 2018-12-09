var move=0;
// var max_Move=9;
$(document).ready(function() {


});
  //setting input X for user.

function gameStarts() {

        human_input_box();





}

var loc_avail=[true,true,true,true,true,true,true,true,true];


function human_input_box() {

  $(".oxf").click(function () {
    alert("1");
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
  alert('comp-1');

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
   console.log(num_random);
   var rand = num_random_new[Math.floor(Math.random() * num_random_new.length)];
   $('.oxf_'+rand).css("opacity","1!important");
   $('.oxf_'+rand).removeClass("game-reset");
   $('.oxf_'+rand).css("pointer-events","none");
   console.log(rand);
   console.log(loc_avail);
   loc_avail[rand] = false;

   if( $(".oxf_0").hasClass("fa-times") && $(".oxf_1").hasClass("fa-times") && $(".oxf_2").hasClass("fa-times")){
        us=parseInt($('.user-score').text());
        $('.user-score').text(us+1);
        $('.score-final-icon').addClass('fas');
        $('.score-final-icon').addClass('fa-trophy');
        $('.score-final-text').text("You Won");
        $('.win-show').modal();

      }
      else {
        alert('if not excuting');
      }


}
