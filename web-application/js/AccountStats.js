$(document).ready(function () {

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Accounts",
        data: {},
        datatype: 'json',
        complete: function (res) {
            accountInfo = res.responseJSON;

            var data = {
                labels: ["Accounts"],
                datasets: [
                    {
                        data: [accountInfo],
                        backgroundColor: ["#0000FF"]
                    }
                ]
            }

            var ctx = document.getElementById("accounts").getContext('2d');
            var accounts = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: "Number of Accounts"
                    },
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    },
                    legend: {
                        display: false
                    }
                }

            })
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
})