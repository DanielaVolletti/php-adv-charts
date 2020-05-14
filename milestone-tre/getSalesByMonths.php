<?php
  header('Content-Type: application/json');

  require_once 'database.php';

  $grafLine = $graphs['fatturato'];

  echo json_encode($grafLine);

?>
