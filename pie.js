$(document).ready(function() {
    $.ajax({
        url: "http://localhost/chartjs/data.php",
        method: "GET",
        success: function(data) {
            console.log(data);
            var player = [];
            var score = [];

            for (var i in data) {
                player.push("Player " + data[i].playerid);
                score.push(data[i].score);
            }
            var barColors = ["red", "green", "blue", "orange", "brown"];
            var chartdata = {
                labels: player,
                datasets: [{
                    label: 'Player Score',
                    backgroundColor: 'rgba(200, 200, 200, 0.75)',
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                    backgroundColor: barColors,
                    data: score
                }]
            };

            var ctx = $("#mycanvas2");

            var barGraph = new Chart(ctx, {
                type: 'pie',
                data: chartdata
            });
        },
        error: function(data) {
            console.log(data);
        }
    });
});