<?php
require 'conn.php';


if($_POST['r_name'] && $_POST['r_email'] && $_POST['r_pass']){



  $name=$_POST['r_name'];
  $email=$_POST['r_email'];
  $pass=$_POST['r_pass'];

  // mysql_query("INSERT INTO `used_info`(name,email,password) VALUES('".$name."','".$email."','".$pass."')")
  // OR trigger_error(mysql_error());

  $sql = "INSERT INTO `used_info`(name,email,password) VALUES('".$name."','".$email."','".$pass."')" ;

  if ($conn->query($sql) === true) {
    // echo "DONE";
  } else {
    $conn->error;
    }
//if end ..
}
