<?php
require 'conn.php';

if($_POST['player_id'] && $_POST['player_pass']){
  $p_id=$_POST['player_id'];
  $p_pass=$_POST['player_pass'];

  $sql="select email,password,name from `used_info` where email='".$p_id."' and password='".$p_pass."'";
  $result=$conn->query($sql);
  if ($result->num_rows > 0 ) {
    // code...
    while ($row = $result->fetch_assoc()) {
      echo $row["name"];
    }
  }
  else{
    echo "false";
  }
}
?>
