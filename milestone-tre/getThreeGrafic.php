<?php
  header('Content-Type: application/json');

  require_once 'database.php';

  $threeGraf = $graphs['team_efficiency'];
  $team = [];
  $trend = [];
  foreach ($threeGraf['data'] as $key => $value) {
    $team[] = $key;
    $trend[] = $value;
  };

  $res = [
    'type' => $threeGraf['type'],
    'team' => $team,
    'trend' => $trend,
    'access' => $threeGraf['access']
  ];

  echo json_encode($res);

?>
