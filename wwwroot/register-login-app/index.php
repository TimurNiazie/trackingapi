<?php require("register.class.php") ?>

<?php 
if(isset($_POST['submit'])){
    $user = new RegisterUser($_POST['username'],$_POST['password'] );
} ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Form</title>
</head>
<body>

<form actions="" method="post" enctype ="multipart/form-data" autocomplete="off">
    <h2>Register form</h2>
    <h4>Both Fields are <span>required</span><h4>

    <label>Username</label>
    <input type="text" name="username">

    <label>Password</label>
    <input type="text" name="password">

    <button type="submit" name="submit">Regsiter</button>

    <p class="error"></p>
    <p class="success"></p>


</form> 
    
</body>
</html>