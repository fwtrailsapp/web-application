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

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Activities/Time",
        data: {},
        datatype: 'json',
        complete: function (res) {
            activityInfo = res.responseJSON;

            twenty_three = activityInfo.pop();
            twenty_two = activityInfo.pop();
            twenty_one = activityInfo.pop();
            twenty = activityInfo.pop();
            nineteen = activityInfo.pop();
            eightteen = activityInfo.pop();
            seventeen = activityInfo.pop();
            sixteen = activityInfo.pop();
            fifteen = activityInfo.pop();
            fourteen = activityInfo.pop();
            thirteen = activityInfo.pop();
            twelve = activityInfo.pop();
            eleven = activityInfo.pop();
            ten = activityInfo.pop();
            nine = activityInfo.pop();
            eight = activityInfo.pop();
            seven = activityInfo.pop();
            six = activityInfo.pop();
            five = activityInfo.pop();
            four = activityInfo.pop();
            three = activityInfo.pop();
            two = activityInfo.pop();
            one = activityInfo.pop();
            zero = activityInfo.pop();

            var ctx = document.getElementById('time').getContext("2d");
            var age = new Chart(ctx, {
                type: 'bar',
                options: {
                    title: {
                        display: true,
                        text: "Activities by Hour"
                    }
                },
                data: {
                    labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                    datasets: [{
                        label: 'Activities',
                        data: [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eightteen, nineteen, twenty, twenty_one, twenty_two, twenty_three],
                        backgroundColor: '#0000FF'
                    }]
                }
            })
        }
    })
})