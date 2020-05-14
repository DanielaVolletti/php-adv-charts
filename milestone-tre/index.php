<!DOCTYPE html>
<html lang="it" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js" charset="utf-8"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/locale/it.min.js" charset="utf-8"></script>
    <script src="main.js" charset="utf-8"></script>
    <title>ChartJs</title>
  </head>
  <body>
    <!-- input per salvare valore level url -->
    <input id="level" type="hidden" value = "<?php echo $_GET['level']; ?>">
    <!-- container dei tre grafici -->
    <div class="container">
      <div class="fatturato">
        <canvas id="line"></canvas>
      </div>
      <div class="fatturato-by-agent">
        <canvas id="pie"></canvas>
      </div>
      <div class="team-efficiency">
        <canvas id="trend"></canvas>
      </div>
    </div>
  </body>
</html>
