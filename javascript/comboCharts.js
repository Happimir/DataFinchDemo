window.onload = function() {
   var originalLineDraw = Chart.controllers.line.prototype.draw;
Chart.helpers.extend(Chart.controllers.line.prototype, {
  draw: function() {
    originalLineDraw.apply(this, arguments);

    var chart = this.chart;
    var ctx = chart.chart.ctx;

    var index = chart.config.data.lineAtIndex;
    if (index) {
      var xaxis = chart.scales['x-axis-0'];
      var yaxis = chart.scales['y-axis-0'];

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top);
      ctx.strokeStyle = '#ff0000';
      ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
      ctx.stroke();
      ctx.restore();  
    }
  }
});

var config = {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      data: [65, 0, 80, 81, 56, 85, 40],
      fill: false
    }],
    lineAtIndex: 2
  }
};

var ctx = document.getElementById("LineWithLine").getContext("2d");
new Chart(ctx, config);
}

function nestedDoughnut() {
       
var randomColorFactor = function() {
    return Math.round(Math.random() * 255);
};

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                100,
                100,
                100,
                100,
                100
            ],
                backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
            ],
        }, {
            data: [
                90,90,90,90,90
            ],
                backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
            ],
        }, {
            data: [
                80,80,80,80,80
            ],
                backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
            ],
        },{
            data: [
                70,70,70,70,70
            ],
                backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
            ],
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Dark Grey"
        ]
    },
    options: {
        responsive: true
    }
};

var ctx2 = document.getElementById("nestedDoughnut").getContext("2d");
var myDoughnut = new Chart(ctx2, config);
    
}

function twoGraphs() {
    var config = {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      type: 'bar',
      label: "My First dataset",
      data: [65, 0, 80, 81, 56, 85, 40],
      fill: false
    },{
    	type: 'line',
      label: "My Second dataset",
      data: [65, 0, 80, 81, 56, 85, 40],
      fill: false,
      borderColor: 'red',
      pointStyle: 'line',
      pointBorderWidth: 3
    }]    
  }
};

var ctx = document.getElementById("twoGraph").getContext("2d");
new Chart(ctx, config);
}