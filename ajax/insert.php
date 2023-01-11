<?php
  /*  $con= mysqli_connect('localhost','root','');
    mysqli_select_db($con, 'ajaxcrud');
echo '<pre>';
print_r($_POST);
die;*/


$mysqli = new mysqli("localhost","root","","ajaxcrud");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

if (isset($_POST['submit'])) {
    extract($_POST);
   echo  $q = "insert into ajaxinsert(username,useremail,password,number) values('$username','$useremail','$password','$number')";
    die;
   // $mysqli -> query($q);
   // header('location:index.php');
}
?>