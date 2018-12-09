$(document).ready(function() {

  $('.login-btn-model').click(function(){
    $('.login').modal();
});

$('.register-btn-model').click(function(){
  $('.register').modal();
});


//validating inputs  and submiting form
$('.btn_reg').click(function(){
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
        event.preventDefault();
        $.ajax( {
          data:"r_name="+name+"&r_email="+email+"&r_pass="+pass,
          type:"post",
          url:'includes/register.php',
          success:function(data){
            alert(data);
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


});

});

function notEmpty(value){
  if(value!=""){
    return true;
  }
  else {
    return false;
  }
}

function samePassword(pass,cpass){
  if(pass!=cpass){
    return true;
  }
  else {
    return false;
  }
}

function aMesssage(type,message) {

  swal({type: ''+type+'',title: ''+message+'',});

}
