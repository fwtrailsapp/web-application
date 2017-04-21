

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
            total_Tickets = ticketInfo.pop();

            console.log(total_Tickets);

            document.getElementById('total_tickets').innerHTML = total_Tickets.toString();

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

            var total_Closed;
            var total_Active;

            var Closed_Other = Number(ticketInfo.pop());
            var Closed_Pothole = Number(ticketInfo.pop())
            var Closed_Trash = Number(ticketInfo.pop())
            var Closed_Litter = Number(ticketInfo.pop())
            var Closed_Water = Number(ticketInfo.pop())
            var Closed_Brush = Number(ticketInfo.pop())
            var Closed_Vandal = Number(ticketInfo.pop())
            var Closed_Glass = Number(ticketInfo.pop())
            var Closed_Tree = Number(ticketInfo.pop())

            total_Closed = (Closed_Brush * 1) + (Closed_Glass * 1) + (Closed_Litter * 1) + (Closed_Other * 1) + (Closed_Pothole * 1) + (Closed_Trash * 1) + (Closed_Tree * 1) + (Closed_Vandal * 1) + (Closed_Water * 1);

            var Active_Other = ticketInfo.pop();
            var Active_Pothole = ticketInfo.pop();
            var Active_Trash = ticketInfo.pop();
            var Active_Litter = ticketInfo.pop();
            var Active_Water = ticketInfo.pop();
            var Active_Brush = ticketInfo.pop();
            var Active_Vandal = ticketInfo.pop();
            var Active_Glass = ticketInfo.pop();
            var Active_Tree = ticketInfo.pop();

            total_Active = (Active_Brush * 1) + (Active_Glass * 1) + (Active_Litter* 1) + (Active_Other* 1) + (Active_Pothole*1) + (Active_Trash*1) + (Active_Tree*1) + (Active_Vandal*1) + (Active_Water*1);

            document.getElementById("closed").innerHTML = total_Closed.toString();
            document.getElementById("active").innerHTML = total_Active.toString();

            

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
