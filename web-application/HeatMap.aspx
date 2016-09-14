<%@ Page Title="Heat Map" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="HeatMap.aspx.cs" Inherits="web_application.HeatMap" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <div id="contents">
        <div class="panel map-container">
            <div class="panel-heading panel-heading-custom">
                <div class="panel-title">Usage Heatmap</div>
            </div>
            <div class="panel-body panel-body-custom">
                <div id="map" style="height: 1000px; width: 1000px;"></div>
            </div>
        </div>
    </div>

    <script>
        // This example requires the Visualization library. Include the libraries=visualization
        // parameter when you first load the API. For example:
        //<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

        var map, heatmap;
        function initMap()
        {
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
        }
        function toggleHeatmap()
        {
            heatmap.setMap(heatmap.getMap() ? null : map);
        }
        function changeGradient()
        {
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
        function changeRadius()
        {
            heatmap.set('radius', heatmap.get('radius') ? null : 20);
        }
        function changeOpacity()
        {
            heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
        }
        // Heatmap data: 500 Points
        function getPoints()
        {
            return [
                new google.maps.LatLng(41.116087600, -85.114176000)
            ]
        }
    </script>

    <!-- Include the Google Maps library -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCA2nlNoi_tXPHrq6ER0UbsOYXDDPSeghQ&libraries=visualization&callback=initMap">
    </script>

</asp:Content>


