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
    'sales' => $sales
  ];

  $level = $_GET['level'];

  if($level === 'employee' || $level === 'clevel'){
    echo json_encode($res);
  }


?>
