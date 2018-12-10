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
    $('.win-show').modal('hide');
    $('.oxf').css("pointer-events","all");
    $('.oxf').removeAttr('moveby');
    
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
    $(this).attr('moveby','human');
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


     }

   }
   var num_random_new = num_random.filter(function(v){return v!==''});

   var rand = num_random_new[Math.floor(Math.random() * num_random_new.length)];
   $('.oxf_'+rand).css("opacity","1!important");
   $('.oxf_'+rand).removeClass("game-reset");
   $('.oxf_'+rand).css("pointer-events","none");
   $('.oxf_'+rand).attr('moveby','comp');
   move++;
   loc_avail[rand] = false;
   console.log(move);
//human at rows
   if( ($(".oxf_0").attr('moveby')== 'human')  && ($(".oxf_1").attr('moveby') == 'human') && ($(".oxf_2").attr('moveby') == 'human')){
        us=parseInt($('.user-score').text());
        $('.user-score').text(us+1);
        $('.score-final-icon').addClass('fas');
        $('.score-final-icon').addClass('fa-trophy');
        $('.score-final-text').text("You Won");
        $('.win-show').modal();
        console.log('row 1 activated');
      }
   else if( ($(".oxf_3").attr('moveby')== 'human')  && ($(".oxf_4").attr('moveby') == 'human') && ($(".oxf_5").attr('moveby') == 'human')){
           us=parseInt($('.user-score').text());
           $('.user-score').text(us+1);
           $('.score-final-icon').addClass('fas');
           $('.score-final-icon').addClass('fa-trophy');
           $('.score-final-text').text("You Won");
           $('.win-show').modal();
           console.log('row 2 activated');
        }
   else if( ($(".oxf_6").attr('moveby')== 'human')  && ($(".oxf_7").attr('moveby') == 'human') && ($(".oxf_8").attr('moveby') == 'human')){
           us=parseInt($('.user-score').text());
           $('.user-score').text(us+1);
           $('.score-final-icon').addClass('fas');
           $('.score-final-icon').addClass('fa-trophy');
           $('.score-final-text').text("You Won");
           $('.win-show').modal();
           console.log('row 3 activated');
        }
// computer at rows
   else if( ($(".oxf_0").attr('moveby')== 'comp')  && ($(".oxf_1").attr('moveby') == 'comp') && ($(".oxf_2").attr('moveby') == 'comp')){
     us=parseInt($('.cpu-score').text());
     $('.cpu-score').text(us+1);
     $('.score-final-icon').addClass('fa');
     $('.score-final-icon').addClass('fa-robot');
     $('.score-final-text').text("Bot Won");
     $('.win-show').modal();
      console.log('row 1 activated');
           }
   else if( ($(".oxf_3").attr('moveby')== 'comp')  && ($(".oxf_4").attr('moveby') == 'comp') && ($(".oxf_5").attr('moveby') == 'comp')){
     us=parseInt($('.cpu-score').text());
     $('.cpu-score').text(us+1);
     $('.score-final-icon').addClass('fa');
     $('.score-final-icon').addClass('fa-robot');
     $('.score-final-text').text("Bot Won");
     $('.win-show').modal();
     console.log('row 2 activated');
            }
   else if( ($(".oxf_6").attr('moveby')== 'comp')  && ($(".oxf_7").attr('moveby') == 'comp') && ($(".oxf_8").attr('moveby') == 'comp')){
     us=parseInt($('.cpu-score').text());
     $('.cpu-score').text(us+1);
     $('.score-final-icon').addClass('fa');
     $('.score-final-icon').addClass('fa-robot');
     $('.score-final-text').text("Bot Won");
     $('.win-show').modal();
     console.log('row 3 activated');
            }
//humans at cols
   else if( ($(".oxf_0").attr('moveby')== 'human')  && ($(".oxf_3").attr('moveby') == 'human') && ($(".oxf_6").attr('moveby') == 'human')){
               us=parseInt($('.user-score').text());
               $('.user-score').text(us+1);
               $('.score-final-icon').addClass('fas');
               $('.score-final-icon').addClass('fa-trophy');
               $('.score-final-text').text("You Won");
               $('.win-show').modal();
               console.log('COL 1 activated');
    }
   else if( ($(".oxf_1").attr('moveby')== 'human')  && ($(".oxf_4").attr('moveby') == 'human') && ($(".oxf_7").attr('moveby') == 'human')){
                us=parseInt($('.user-score').text());
                $('.user-score').text(us+1);
                $('.score-final-icon').addClass('fas');
                $('.score-final-icon').addClass('fa-trophy');
                $('.score-final-text').text("You Won");
                $('.win-show').modal();
                console.log('col 2 activated');
             }
   else if( ($(".oxf_2").attr('moveby')== 'human')  && ($(".oxf_5").attr('moveby') == 'human') && ($(".oxf_8").attr('moveby') == 'human')){
            us=parseInt($('.user-score').text());
            $('.user-score').text(us+1);
            $('.score-final-icon').addClass('fas');
            $('.score-final-icon').addClass('fa-trophy');
            $('.score-final-text').text("You Won");
            $('.win-show').modal();
            console.log('col 3 activated');
   }
//comp at cols
   else if( ($(".oxf_0").attr('moveby')== 'comp')  && ($(".oxf_3").attr('moveby') == 'comp') && ($(".oxf_6").attr('moveby') == 'comp')){
        us=parseInt($('.cpu-score').text());
        $('.cpu-score').text(us+1);
        $('.score-final-icon').addClass('fa');
        $('.score-final-icon').addClass('fa-robot');
        $('.score-final-text').text("Bot Won");
        $('.win-show').modal();
        console.log('row 2 activated');
       }
   else if( ($(".oxf_1").attr('moveby')== 'comp')  && ($(".oxf_4").attr('moveby') == 'comp') && ($(".oxf_7").attr('moveby') == 'comp')){
        us=parseInt($('.cpu-score').text());
        $('.cpu-score').text(us+1);
        $('.score-final-icon').addClass('fa');
        $('.score-final-icon').addClass('fa-robot');
        $('.score-final-text').text("Bot Won");
        $('.win-show').modal();
        console.log('row 2 activated');
                }
   else if( ($(".oxf_2").attr('moveby')== 'comp')  && ($(".oxf_5").attr('moveby') == 'comp') && ($(".oxf_8").attr('moveby') == 'comp')){
        us=parseInt($('.cpu-score').text());
        $('.cpu-score').text(us+1);
        $('.score-final-icon').addClass('fa');
        $('.score-final-icon').addClass('fa-robot');
        $('.score-final-text').text("Bot Won");
        $('.win-show').modal();
        console.log('row 2 activated');
      }
//human at dig
   else if( ($(".oxf_0").attr('moveby')== 'human')  && ($(".oxf_4").attr('moveby') == 'human') && ($(".oxf_8").attr('moveby') == 'human')){
                  us=parseInt($('.user-score').text());
                  $('.user-score').text(us+1);
                  $('.score-final-icon').addClass('fas');
                  $('.score-final-icon').addClass('fa-trophy');
                  $('.score-final-text').text("You Won");
                  $('.win-show').modal();
                  console.log('COL 1 activated');
       }
   else if( ($(".oxf_2").attr('moveby')== 'human')  && ($(".oxf_4").attr('moveby') == 'human') && ($(".oxf_6").attr('moveby') == 'human')){
                      us=parseInt($('.user-score').text());
                      $('.user-score').text(us+1);
                      $('.score-final-icon').addClass('fas');
                      $('.score-final-icon').addClass('fa-trophy');
                      $('.score-final-text').text("You Won");
                      $('.win-show').modal();
                      console.log('COL 1 activated');
           }
//comp at dig
   else if( ($(".oxf_0").attr('moveby')== 'comp')  && ($(".oxf_4").attr('moveby') == 'comp') && ($(".oxf_8").attr('moveby') == 'comp')){
                             us=parseInt($('.user-score').text());
                             $('.user-score').text(us+1);
                             $('.score-final-icon').addClass('fas');
                             $('.score-final-icon').addClass('fa-trophy');
                             $('.score-final-text').text("You Won");
                             $('.win-show').modal();
                             console.log('COL 1 activated');
                  }
   else if( ($(".oxf_2").attr('moveby')== 'comp')  && ($(".oxf_4").attr('moveby') == 'comp') && ($(".oxf_6").attr('moveby') == 'comp')){
                                 us=parseInt($('.user-score').text());
                                 $('.user-score').text(us+1);
                                 $('.score-final-icon').addClass('fas');
                                 $('.score-final-icon').addClass('fa-trophy');
                                 $('.score-final-text').text("You Won");
                                 $('.win-show').modal();
                                 console.log('COL 1 activated');
                      }
//draw
   else{
        if(move>=8){

          $('.score-final-icon').addClass('fas');
          $('.score-final-icon').addClass('fa-smile-wink');
          $('.score-final-text').text("Its Draw");
          $('.win-show').modal();
        }
      }



}
