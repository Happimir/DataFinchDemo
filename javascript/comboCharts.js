window.onload = function() {
    var data = {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [{
        data: [12, 3, 2, 1, 8, 8, 2, 2, 3, 5, 7, 1]
    }]
};

var ctx = document.getElementById("LineWithLine").getContext("2d");

Chart.types.Line.extend({
    name: "LineWithLine",
    draw: function () {
        Chart.types.Line.prototype.draw.apply(this, arguments);
        
            
        var strings = ["TODAY", "TOMORROW!!!", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELEVE"]
        for(var i = 0; i < this.datasets[0].points.length; i++) {
        
            var point = this.datasets[0].points[i]
            var scale = this.scale

            // draw line
            this.chart.ctx.beginPath();
            this.chart.ctx.moveTo(point.x, scale.startPoint + 24);
            this.chart.ctx.strokeStyle = '#ff0000';
            this.chart.ctx.lineTo(point.x, scale.endPoint);
            this.chart.ctx.stroke();

            // write TODAY
            this.chart.ctx.textAlign = 'center';
            this.chart.ctx.fillText(strings[i], point.x, scale.startPoint + 12);
        }
        
    }
});

new Chart(ctx).LineWithLine(data, {
    datasetFill : false
});
}

