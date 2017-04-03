$(document).ready(function () {

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Activities",
        data: {},
        datatype: 'json',
        complete: function (res) {
            activityInfo = res.responseJSON;

            walk = activityInfo.pop();
            run = activityInfo.pop();
            bike = activityInfo.pop();


            var data = {
                labels: ["Biking", "Running", "Walking"],
                datasets: [
                    {
                        data: [bike, run, walk],
                        backgroundColor: ["#FF0000", "#0000FF", "#008000"]
                    }
                ]
            }

            var activity = document.getElementById('activities').getContext("2d");
            var activityChart = new Chart(activity, {
                type: 'pie',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: "Activity Counts"
                    }
                }
            })
        }
    })
})