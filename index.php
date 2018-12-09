<?php

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/animate.min.css">
    <!-- <link rel="stylesheet" href="css/app.min.css"> -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/dropzone.min.css">
    <link rel="stylesheet" href="css/sweetalert2.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>TIC - TAC - TOE</title>
  </head>
  <body class="ad-con">
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <div class="backgroud-anim">
        <div class="row" style="width: 100%!important;opacity:0.3;">
            <!-- row 1  -->
          <div class="col-md-4 font-back-anim" style="border-right:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="far fa-circle "></i></center></div>
          <div class="col-md-4 font-back-anim" style="border-right:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="fas fa-times"></i></center></div>
          <div class="col-md-4 font-back-anim" style="padding:50px 50px 50px 50px;"><center><i class="far fa-circle win-anim flick"></i></center></div>
          <!-- row 2  -->
          <div class="col-md-4 font-back-anim" style="border-right:1px solid #fff;border-top:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="fas fa-times"></i></center></div>
          <div class="col-md-4 font-back-anim" style="border-right:1px solid #fff;border-top:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="far fa-circle "></i></center></div>
          <div class="col-md-4 font-back-anim" style="border-top:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="far fa-circle win-anim flick"></i></center></div>
          <!-- row 3  -->
          <div class="col-md-4 font-back-anim " style="border-right:1px solid #fff;border-top:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="far fa-circle"></i></center></div>
          <div class="col-md-4 font-back-anim" style="border-right:1px solid #fff;border-top:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="fas fa-times"></i></center></div>
          <div class="col-md-4 font-back-anim" style="border-top:1px solid #fff;padding:50px 50px 50px 50px;"><center><i class="far fa-circle win-anim flick"></i></center></div>
        </div>
      </div>
      <div class="main-intraction cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style="position: absolute;">
            <center><h1 class="h-name">Tic Tac Toe</h1></center>
            <br>

              <div class="row button-opptions">
                <button name="button_1" class="but-model-user login-btn-model">LogIn</button>
                <button name="button_2" class="but-model-user register-btn-model">Register</button>
              </div>

      </div>
    </div>


    <!-- model Login part  -->

    <div class="modal fade login bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content model-backgroud">
          <div class="modal-header model-backgroud">
            <h5 class="modal-title model-backgroud" style="font-size:30px;font-family:Pdark;">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:#fff;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        <form>
          <div class="modal-body">
              <div class="form-group">
                <label for="player_id" style="font-size:20px;font-family:Pdark;">Email Id</label>
                <input type="text" class="form-control" id="player_id" aria-describedby="emailHelp" placeholder="ex - jhon@show.com" style="color:#f50057">

              </div>
              <div class="form-group">
                <label for="player_id_pass" style="font-size:20px;font-family:Pdark;">Password</label>
                <input type="password" class="form-control" id="player_id_pass" placeholder="Password" style="color:#f50057">
              </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:#F50057!important;font-size:15px;font-family:Pdark;">LogIn</button>
          </div>

        </form>
        </div>
      </div>
    </div>

    <!-- model Register part  -->

    <div class="modal fade register bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content model-backgroud">
          <div class="modal-header model-backgroud">
            <h5 class="modal-title model-backgroud" style="font-size:30px;font-family:Pdark;">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:#fff;">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        <form name="reg-form" action=""  method="post">
          <div class="modal-body">
              <div class="form-group">
                <label for="name" style="font-size:20px;font-family:Pdark;">Name</label>
                <input type="text" class="form-control" name="r_name" id="name" aria-describedby="emailHelp" placeholder="ex - Jhon Snow" style="color:#f50057">

              </div>

              <div class="form-group">
                <label for="email" style="font-size:20px;font-family:Pdark;">Email</label>
                <input type="email" class="form-control" name="r_email" id="email" aria-describedby="emailHelp" placeholder="ex - jhon@snow.com " style="color:#f50057">

              </div>

              <div class="form-group">
                <label for="pass" style="font-size:20px;font-family:Pdark;">Password</label>
                <input type="password" class="form-control" name="r_pass" id="pass" placeholder="Password" style="color:#f50057">
              </div>

              <div class="form-group">
                <label for="cpass" style="font-size:20px;font-family:Pdark;">Confirm password</label>
                <input type="password" class="form-control" name="r_cpass" id="cpass" placeholder="Confirm Password" style="color:#f50057">
              </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn_reg" style="background-color:#F50057!important;font-size:15px;font-family:Pdark;cursor:pointer;">Register</button>
          </div>

        </form>
        </div>
      </div>
    </div>

  </body>




  <script src="js/jquery-1.12.0.min.js"></script>
       <script src="js/popper.min.js"></script>
       <script src="js/bootstrap.min.js"></script>
      <!-- <script src="js/dropzone.min.js"></script> -->
       <script src="js/sweetalert2.min.js"></script>
       <!-- <script src="js/trumbowyg.min.js"></script> -->
       <!-- <script type="text/javascript" src="js/app.min.js"></script>
       <script type="text/javascript" src="js/app1.min.js"></script> -->
       <script type="text/javascript" src="js/main.js"></script>


</html>
