<%@ Page Title="Statistics" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Statistics.aspx.cs" Inherits="web_application.Statistics" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript" src="scripts/Chart.min.js"></script>
    <script type="text/javascript" src="js/TicketStats.js"></script>
    <script type="text/javascript" src="js/ActivityStats.js"></script>
    <script type="text/javascript" src="js/AccountStats.js"></script>



</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

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

</asp:Content>
