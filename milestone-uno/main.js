// funzione per stampare grafico con linea
function printLineGrafic() {
  // variabile mesi con moments.js
  var mesi= moment.months();
  // chiamata ajax a server.php per stampa del grafico
  $.ajax({
    url: 'server.php',
    method: 'GET',
    success: function (result){
      var ctx = $('#line');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: mesi,
              datasets: [{
                  label: 'Vendite',
                  data: result,
                  backgroundColor: [
                      'rgba(150, 33, 146, 1)',
                      'rgba(82, 40, 204, 1)',
                      'rgba(4, 51, 255, 1)',
                      'rgba(0, 146, 146, 1)',
                      'rgba(0, 249, 0, 1)',
                      'rgba(202, 250, 0, 1)',
                      'rgba(255, 251, 0, 1)',
                      'rgba(255, 199, 0, 1)',
                      'rgba(255, 147, 0, 1)',
                      'rgba(255, 80, 0, 1)',
                      'rgba(255, 38, 0, 1)',
                      'rgba(216, 34, 83, 1)'
                  ],
                  borderColor: [
                      'rgba(150, 33, 146, 1)',
                      'rgba(82, 40, 204, 1)',
                      'rgba(4, 51, 255, 1)',
                      'rgba(0, 146, 146, 1)',
                      'rgba(0, 249, 0, 1)',
                      'rgba(202, 250, 0, 1)',
                      'rgba(255, 251, 0, 1)',
                      'rgba(255, 199, 0, 1)',
                      'rgba(255, 147, 0, 1)',
                      'rgba(255, 80, 0, 1)',
                      'rgba(255, 38, 0, 1)',
                      'rgba(216, 34, 83, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    }, error: function (error){
      console.log(error);
    }
  })
}

function init() {
  printLineGrafic();
}

$(document).ready(init);
