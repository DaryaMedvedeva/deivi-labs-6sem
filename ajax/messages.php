<?php
  $host = "localhost"; // адрес сервера
  $database = "ajax"; // имя базы данных
  $user = "root"; // имя пользователя
  $password = ""; // пароль
  $db_link = mysqli_connect($host, $user, $password, $database) or die("Ошибка " . mysqli_error($db_link));

  $sql = 'SELECT username, message, date FROM messages';
  $result = mysqli_query($db_link, $sql) or die(mysqli_error($db_link));;
  for ($arr = []; $row = mysqli_fetch_assoc($result); $arr[] = $row);   

mysqli_close($db_link);
echo json_encode($arr);


?>