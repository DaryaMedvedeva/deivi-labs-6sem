<?php
  $host = "localhost"; // адрес сервера
  $database = "ajax"; // имя базы данных
  $user = "root"; // имя пользователя
  $password = ""; // пароль
  $db_link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db_link));

  $name=$_POST['name'];
 $date=date("Y-m-d h:i:s");
 $text=$_POST['text'];

 //запись в бд
 $query = "INSERT INTO messages SET username =  '$name' , message = '$text', date = '$date'";
 $result = mysqli_query($db_link, $query) or die("Ошибка " .mysqli_error($db_link));


mysqli_close($db_link);


?>