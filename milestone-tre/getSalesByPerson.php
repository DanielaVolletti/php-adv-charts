<?php
  header('Content-Type: application/json');

  require_once 'database.php';

  $grafPie = $graphs['fatturato_by_agent'];
  $person = [];
  $sales = [];
  foreach ($grafPie['data'] as $key => $value) {
    $person[] = $key;
    $sales[] = $value;
  };

  $res = [
    'type' => $grafPie['type'],
    'person' => $person,
    'sales' => $sales,
    'access' => $grafPie['access']
  ];


  echo json_encode($res);
 ?>
