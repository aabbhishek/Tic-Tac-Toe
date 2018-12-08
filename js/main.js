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
        })
      }
      else{
        $('.btn_reg').submit();
      }


    }
    else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'All details are compulsory',
      })
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
