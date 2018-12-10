$(document).ready(function() {

  $('.login-btn-model').click(function(){
    $('.login').modal();
});

$('.register-btn-model').click(function(){
  $('.register').modal();
});


//validating inputs  and submiting ref form
$('.btn_reg').click(function(){
    event.preventDefault();
    name=$('#name').val();
    email=$('#email').val();
    pass=$('#pass').val();
    cpass=$('#cpass').val();

    if(notEmpty(name) && notEmpty(email)
    && notEmpty(pass) && notEmpty(cpass)){
      if(samePassword(pass,cpass)){
        swal({
          type: 'error',
          title: 'Password Does not match',
        });
        // end if
      }
      else{

        $.ajax( {
          data:"r_name="+name+"&r_email="+email+"&r_pass="+pass,
          type:"post",
          url:'includes/register.php',
          success:function(data){
            $('.register').modal('hide');

            swal({
              type: 'success',
              title: 'Your all setup ',
              text: 'Login to Start playing',
            });
          }

        });
        // end else
      }

      //end if
    }
    else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'All details are compulsory',
      });

      //end else
    }

//click of reg-form
});

//Login Form

  $(".login_btn").click(function() {
    player_id=$('#player_id').val();
    player_pass=$('#player_pass').val();

    if(notEmpty(player_id) && notEmpty(player_pass)){

      $.ajax({

        data:"player_id="+player_id+"&player_pass="+player_pass,
        type:"post",
        url:'includes/login.php',
        success:function(data) {

            if(data=="false"){
              aMesssage('error','Register to login');
            }
            else {
              $('.login').modal('hide');
              $('.login-btn-model').fadeOut(0);
              $('.register-btn-model').fadeOut(0);
              $('.play').fadeIn(1500);
              aMesssage('success','Welcome '+data);
              $(".user-name").text(data);
              $(".user-data-display").animate({
                  right:'-15px'
              });

            }
        }

      });

    }
    else {
      aMesssage('error','Enter Email-Id or Password to LogIn');
    }


});


$(".play").click(function() {
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
    gameStarts();

});


});

//valid funtion-1
function notEmpty(value){
  if(value!=""){
    return true;
  }
  else {
    return false;
  }
}

//valid funtion-2
function samePassword(pass,cpass){
  if(pass!=cpass){
    return true;
  }
  else {
    return false;
  }
}

//valid alert-1
function aMesssage(type,message) {

  swal({type: ''+type+'',title: ''+message+'',});

}

function computerMove() {

}
