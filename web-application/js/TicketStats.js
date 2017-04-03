

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Tickets",
        data: {},
        datatype: 'json',
        complete: function (res) {
            ticketInfo = res.responseJSON;

            other = ticketInfo.pop();
            pothole = ticketInfo.pop();
            trash = ticketInfo.pop();
            litter = ticketInfo.pop();
            water = ticketInfo.pop();
            brush = ticketInfo.pop();
            vandal = ticketInfo.pop();
            glass = ticketInfo.pop();
            tree = ticketInfo.pop();

            var data = {
                labels: ["Tree/Branch", "Broken Glass", "Vandalism", "Overgrown Brush", "High Water", "Litter", "Trash Full", "Pothole", "Other"],
                datasets: [
                    {
                        data: [tree, glass, vandal, brush, water, litter, trash, pothole, other],
                        backgroundColor: ["#A52A2A", "#008080", "#FF0000", "#008000", "#0000FF", "#800080", "#FFA500", "#808080", "#000000"]
                    }
                ]
            }

            var tickets = document.getElementById('tickets').getContext("2d");
            var ticketsChart = new Chart(tickets, {
                type: 'pie',
                data: data,
                options: {
                    title: {
                        display: true,
                        text: "Ticket Counts"
                    }
                }
            });
        }
    })

    $.ajax({
        type: 'GET',
        contentType: "application/json' charset=utf-8",
        url: "http://23.97.29.252/capstone/datarelay.svc/trails/api/1/Statistics/Tickets/Compare",
        data: {},
        datatype: 'json',
        complete: function (res) {
            ticketInfo = res.responseJSON;

           var Closed_Other = ticketInfo.pop();
           var Closed_Pothole = ticketInfo.pop();
           var Closed_Trash = ticketInfo.pop();
           var Closed_Litter = ticketInfo.pop();
           var Closed_Water = ticketInfo.pop();
           var Closed_Brush = ticketInfo.pop();
           var Closed_Vandal = ticketInfo.pop();
           var Closed_Glass = ticketInfo.pop();
           var Closed_Tree = ticketInfo.pop();

           var Active_Other = ticketInfo.pop();
           var Active_Pothole = ticketInfo.pop();
           var Active_Trash = ticketInfo.pop();
           var Active_Litter = ticketInfo.pop();
           var Active_Water = ticketInfo.pop();
           var Active_Brush = ticketInfo.pop();
           var Active_Vandal = ticketInfo.pop();
           var Active_Glass = ticketInfo.pop();
           var Active_Tree = ticketInfo.pop();

            var ctx = document.getElementById("bar").getContext('2d');
            var bar = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Tree/Branch', 'Broken Glass', 'Vandalism', 'Brush', 'High Water', 'Litter', 'Trash Full', 'Pothole', 'Other'],
                    datasets: [{
                        label: 'Active',
                        data: [Active_Tree, Active_Glass, Active_Vandal, Active_Brush, Active_Water, Active_Litter, Active_Trash, Active_Pothole, Active_Other],
                        backgroundColor: '#008000'
                    }, {
                        label: 'Closed',
                        data: [Closed_Tree, Closed_Glass, Closed_Vandal, Closed_Brush, Closed_Water, Closed_Litter, Closed_Trash, Closed_Pothole, Closed_Other],
                        backgroundColor: '#0000FF'
                    }]                    
                },
                options: {
                    title: {
                        display: true,
                        text: "Ticket Counts by Status"
                    }
                }
            })
        }
    })
})
