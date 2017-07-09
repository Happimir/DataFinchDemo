function showAdvancedGraphs() {
    
    var ctx1 = $("#radarGraph")[0].getContext('2d');
    var myChart1 = new Chart(ctx1, {
      type: 'radar',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          label: 'apples',
          backgroundColor: "rgba(153,255,51,0.4)",
          borderColor: "rgba(153,255,51,1)",
          data: [12, 19, 3, 17, 28, 24, 7]
        }, {
          label: 'oranges',
          backgroundColor: "rgba(255,153,0,0.4)",
          borderColor: "rgba(255,153,0,1)",
          data: [30, 29, 5, 5, 20, 3, 10]
        }]
      }
    });
    
    
    var ctx2 = $("#polarGraph")[0].getContext('2d');
    var myChart2 = new Chart(ctx2, {
      type: 'polarArea',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      }
    });
    
    var ctx3 = document.getElementById("doughnutGraph").getContext('2d');
    var myChart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      }
    });
    
}