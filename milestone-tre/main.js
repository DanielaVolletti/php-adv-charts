// funzione per creare mesi
function getMonths(){
  return moment.months();
}
// variabile mesi con moments.js
var mesi = getMonths();

// funzione per stampare grafico con linea
function printLineGrafic() {
  // chiamata ajax per stampa del grafico

  var level = $("#level").val();

  $.ajax({
    url: 'getSalesByMonths.php',
    method: 'GET',
    data: {
      level: 'guest'
    },
    success: function (result){
      // if(level === result.access){
      var ctx = $('#line');
      var myChart = new Chart(ctx, {
          type: result.type,
          data: {
              labels: mesi,
              datasets: [{
                  label: 'Vendite',
                  data: result.data,
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

      // }

    }, error: function (error){
      console.log(error);
    }
  })
}

// funzione per stampare grafico con pie
function printPieGrafic() {
  var level = $("#level").val();
  // chiamata ajax per stampa del grafico
  $.ajax({
    url: 'getSalesByPerson.php',
    method: 'GET',
    data: {
      level: 'employee'
    },
    success: function (result){
      // if(level == result.access){
        var ctx = $('#pie');
        var myChart = new Chart(ctx, {
            type: result.type,
            data: {
                labels: result.person,
                datasets: [{
                    label: 'Vendite',
                    data: result.sales,
                    backgroundColor: [
                        'rgba(150, 33, 146, 1)',
                        'rgba(82, 40, 204, 1)',
                        'rgba(4, 51, 255, 1)',
                        'rgba(0, 146, 146, 1)'
                    ],
                    borderColor: [
                        'rgba(150, 33, 146, 1)',
                        'rgba(82, 40, 204, 1)',
                        'rgba(4, 51, 255, 1)',
                        'rgba(0, 146, 146, 1)'
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
      // }

    }, error: function (error){
      console.log(error);
    }
  })
}


// funzione per stampare grafico con linea
function printThreeLineGrafic() {
  var level = $("#level").val();
  // chiamata ajax per stampa del grafico
  $.ajax({
    url: 'getThreeGrafic.php',
    method: 'GET',
    data: {
      level: 'clevel'
    },
    success: function (result){
      // if(level == result.access){
        var ctx = $('#trend');
        var myChart = new Chart(ctx, {
            type: result.type,
            data: {
                labels: mesi,
                datasets: [{
                    label: result['team'][0],
                    data: result['trend'][0],
                    borderColor: [
                        'rgba(150, 33, 146, 1)',
                    ],
                    borderWidth: 1
                },
                {
                    label: result['team'][1],
                    data: result['trend'][1],
                    borderColor: [
                        'rgba(0, 146, 146, 1)',
                    ],
                    borderWidth: 1
                },
                {
                    label: result['team'][2],
                    data: result['trend'][2],
                    borderColor: [
                        'rgba(4, 51, 255, 1)',
                    ],
                    borderWidth: 1
                }
              ]
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
      // }

    }, error: function (error){
      console.log(error);
    }
  })
}

function init() {
  // stampa grafico linea
  printLineGrafic();
  // stampa grafico pie
  printPieGrafic();

  printThreeLineGrafic();
}

$(document).ready(init);
