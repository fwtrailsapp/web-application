<%@ Page Title="Home" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="web_application.Default" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <script type="text/javascript" src="scripts/Chart.min.js"></script>
    <script type="text/javascript" src="js/TicketStats.js"></script>
    <script type="text/javascript" src="js/ActivityStats.js"></script>
    <script type="text/javascript" src="js/AccountStats.js"></script>

    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Dashboard</h1>
        <hr style="width: 98%; color: lightgray;" />
    </div>
    <!-- end page-heading -->

    <div id="dashboardContent">
        <div>
            <h1 style="text-align: center;">Account Statistics</h1>
            <br />
            <div style="width: 350px; height: 350px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                <canvas id="accounts"></canvas>
            </div>
            <div style="width: 350px; height: 350px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                <canvas id="gender"></canvas>
            </div>
            <div style="width: 500px; height: 300px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                <canvas id="age"></canvas>
            </div>
        </div>
    </div>
        <script>
            // This example requires the Visualization library. Include the libraries=visualization
            // parameter when you first load the API. For example:
            //<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

            var map, heatmap; 
            var pathUrl = "23.97.29.252:50000/Capstone/datarelay.svc/trails/api/1/Path/All";
            function initMap() {
                // create the map object
                map = new google.maps.Map(document.getElementById('map'),
                {
                    zoom: 13,
                    center: { lat: 41.1188, lng: -85.1090 },
                    mapTypeId: google.maps.MapTypeId.SATELLITE
                });
                // heatmap layer
                heatmap = new google.maps.visualization.HeatmapLayer(
                {
                    data: getPoints(),
                    map: map
                });
                // overlay of the Fort Wayne Regional Trail Network
                var ctaLayer = new google.maps.KmlLayer(
                {
                    url: 'https://gist.githubusercontent.com/scottyseus/ec2e4892d5f53920390e/raw/47128a99e128ba78ea8b5d7b476544766b0e5f5c/overlay.kml',
                    map: map
                });

                getPaths();
            }
            function toggleHeatmap() {
                heatmap.setMap(heatmap.getMap() ? null : map);
            }
            function changeGradient() {
                var gradient =
                [
                    'rgba(0, 255, 255, 0)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(0, 191, 255, 1)',
                    'rgba(0, 127, 255, 1)',
                    'rgba(0, 63, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 223, 1)',
                    'rgba(0, 0, 191, 1)',
                    'rgba(0, 0, 159, 1)',
                    'rgba(0, 0, 127, 1)',
                    'rgba(63, 0, 91, 1)',
                    'rgba(127, 0, 63, 1)',
                    'rgba(191, 0, 31, 1)',
                    'rgba(255, 0, 0, 1)'
                ]
                heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
            }
            function changeRadius() {
                heatmap.set('radius', heatmap.get('radius') ? null : 20);
            }
            function changeOpacity() {
                heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
            }

            function getPaths() {
                $.ajax({
                    type: 'GET',
                    contentType: "application/json' charset=utf-8",
                    url: "http://23.97.29.252:50000/Capstone/datarelay.svc/trails/api/1/Path/All",
                    data: {},
                    datatype: 'json',
                    complete: function (res) {
                        var paths = res.responseJSON;

                        displayPaths(paths);
                    }

                })
            }

            function displayPaths(paths) {
                var points = [];
                for (index in paths) {
                    points = points.concat(parsePath(paths[index]['path']));
                }

                // heatmap layer
                heatmap = new google.maps.visualization.HeatmapLayer({
                    data: points,
                    map: map
                });

                var gradient = [
                    'rgba(0, 255, 255, 0)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(0, 191, 255, 1)',
                    'rgba(0, 127, 255, 1)',
                    'rgba(0, 63, 255, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(0, 0, 223, 1)',
                    'rgba(0, 0, 191, 1)',
                    'rgba(0, 0, 159, 1)',
                    'rgba(0, 0, 127, 1)',
                    'rgba(63, 0, 91, 1)',
                    'rgba(127, 0, 63, 1)',
                    'rgba(191, 0, 31, 1)',
                    'rgba(255, 0, 0, 1)'
                ]

                heatmap.set('gradient', gradient);
                heatmap.set('opacity', 1);
                heatmap.set('radius', 20);
            }

            function parsePath(path) {
                var points = [];
                var coords = path.split(/[ ,]+/);
                for (i = 0; i < coords.length; i++) {
                    var lat = coords[i]
                    var long = coords[++i]
                    if (!lat.isEmpty() && !long.isEmpty()) {
                        points.push(new google.maps.LatLng(lat, long));
                    }
                }
                return points;
            }

            String.prototype.isEmpty = function () {
                return (this.length === 0 || !this.trim());
            };

            // Heatmap data: 500 Points
            function getPoints() {
                return [
                    new google.maps.LatLng(41.116087600, -85.114176000)
                ]
            }
        </script>

        <!-- Include the Google Maps library -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCA2nlNoi_tXPHrq6ER0UbsOYXDDPSeghQ&libraries=visualization&callback=initMap">
        </script>

        <div style="float: right; margin-right: 50px;">
            <h2 align="center">Aggregated Statistics</h2>
            <div id="statsDiv" style="margin: 0 auto;">
                <table style="width: 300px; height: 95%; border-collapse: separate !important;">
                    <tr>
                        <td></td>
                        <th>7 Days</th>
                        <th>30 Days</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <th>Users</th>
                        <td>1</td>
                        <td>5</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <th>Tickets</th>
                        <td>1</td>
                        <td>5</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <th>Activities</th>
                        <td>1</td>
                        <td>5</td>
                        <td>25</td>
                    </tr>
                </table>

        <div>
            <h1 style="text-align: center">Ticket Statistics</h1>
            <br />
            <div style="width: 400px; height: 350px; display: inline-block; margin-left: 200px; margin-right: 25px;">
                <canvas id="tickets"></canvas>
            </div>
            <div style="width: 500px; height: 300px; display: inline-block; margin-left: 100px; margin-right: 25px;">
                <canvas id="bar"></canvas>
            </div>
        </div>
        <br />
        <br />
        <div>
            <h1 style="text-align: center">Activity Statistics</h1>
            <br />
            <div style="width: 350px; height: 350px; margin: 0px auto">
                <canvas id="activities"></canvas>

            </div>
        </div>
    </div>


</asp:Content>
