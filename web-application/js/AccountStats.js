$(document).ready(function () {
    
    function star(ctx, x, y, r, p, m)
    {
        ctx.save();
        ctx.beginPath();
        ctx.translate(x, y);
        ctx.moveTo(0,0-r);
        for (var i = 0; i < p; i++)
        {
            ctx.rotate(Math.PI / p);
            ctx.lineTo(0, 0 - (r*m));
            ctx.rotate(Math.PI / p);
            ctx.lineTo(0, 0 - r);
        }
        ctx.fillStyle = "Gold"
        ctx.fill();
        ctx.restore();
    }

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Accounts",
        data: {},
        datatype: 'json',
        complete: function (res) {
            accountInfo = res.responseJSON;
 
            ctx = document.getElementById('accounts').getContext('2d');
            x = 150, y = 82, r = 85, p = 5, m = .4;

            star(ctx, x, y, r, p, m);
            ctx.font = "30px Arial";
            ctx.fillStyle = "White";
            ctx.fillText(accountInfo, 132, 88);
            ctx.fillText("Number of Accounts", 15, 30);
        }
    })

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Accounts/Gender",
        data: {},
        datatype: 'json',
        complete: function (res) {
            accountInfo = res.responseJSON;
            
            var female = accountInfo.pop();
            var male = accountInfo.pop();

            var data = {
                labels: ["Male", "Female"],
                datasets: [
                    {
                        data: [male, female],
                        backgroundColor: ["#0000FF", "#FF69B4"]
                    }
                ]
            }

            var ctx = document.getElementById("gender").getContext('2d');
            var gender = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: "Gender of Users"
                    }
                }
            })
        }
    })

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Accounts/Age",
        data: {},
        datatype: 'json',
        complete: function (res) {
            accountInfo = res.responseJSON;

            var female50 = accountInfo.pop();
            var female40 = accountInfo.pop();
            var female30 = accountInfo.pop();
            var female20 = accountInfo.pop();
            var male50 = accountInfo.pop();
            var male40 = accountInfo.pop();
            var male30 = accountInfo.pop();
            var male20 = accountInfo.pop();
           
            var ctx = document.getElementById("age").getContext('2d');
            var age = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['20-29', '30-39', '40-49', '50+'],
                    datasets: [{
                        label: 'Male',
                        data: [male20, male30, male40, male50],
                        backgroundColor: '#0000FF'
                    }, {
                        label: 'Female',
                        data: [female20, female30, female40, female50],
                        backgroundColor: '#FF69B4'
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Age of Users by Gender"
                    }
                }
            })
        }
    })

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Accounts/Month",
        data: {},
        datatype: 'json',
        complete: function (res) {
            accountInfo = res.responseJSON;

            december = accountInfo.pop();
            november = accountInfo.pop();
            october = accountInfo.pop();
            september = accountInfo.pop();
            august = accountInfo.pop();
            july = accountInfo.pop();
            june = accountInfo.pop();
            may = accountInfo.pop();
            april = accountInfo.pop();
            march = accountInfo.pop();
            february = accountInfo.pop();
            january = accountInfo.pop();

            var ctx = document.getElementById("month").getContext('2d');
            var age = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        label: 'Accounts',
                        data: [january, february, march, april, may, june, july, august, september, october, november, december],
                        backgroundColor: '#0000FF' 
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Accounts Created by Month"
                    }
                }
            })
        }
    })
})