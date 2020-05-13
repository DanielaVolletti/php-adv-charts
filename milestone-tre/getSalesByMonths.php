<?php
  header('Content-Type: application/json');

  require_once 'database.php';

  $grafLine = $graphs['fatturato'];

  $level = $_GET['level'];

  if($level === 'guest' || $level === 'employee' || $level === 'clevel'){
    echo json_encode($grafLine);
  }

?>
