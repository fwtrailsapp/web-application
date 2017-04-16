<%@ Page Title="Home" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="web_application.Default" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <link href="css/default.css" rel="stylesheet" />
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

<<<<<<< HEAD
    <div id="dashboardContent">
        <div>
            <h1 style="text-align: center;">Account Statistics</h1>
            <br />
            <div style="width: 350px; height: 350px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                <canvas id="accounts" style="width: 350px;height: 350px;"></canvas>
            </div>
            <div style="width: 350px; height: 350px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                <canvas id="gender"></canvas>
            </div>
            <div style="width: 400px; height: 300px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                <canvas id="age"></canvas>
            </div>
            <div style="width: 400px; height: 300px; display: inline-block; margin-left: 50px; margin-right: 25px; margin-top: 75px;">
                <canvas id="month"></canvas>
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
=======
    <div class="quick_stats_div">
        <table class="quick_stats_table" align="center">
            <tr>
                <td>
                    <h1>5</h1>
                    <br />
                    Number of Accounts</td>
                <td>
                    <h1>7</h1>
                    <br />
                    Ticket Count</td>
                <td>
                    <h1>4</h1>
                    <br />
                    Active Ticket Count</td>
                <td>
                    <h1>3</h1>
                    <br />
                    Closed Ticket Count</td>
            </tr>
        </table>
    </div>
    <br />
    <br />
    <div class="default_div">
        <table>
            <tr style="background-color:gray;">
                <h1 style="text-align: center;">Account Statistics</h1>
            </tr>
            <tr>
                <div style="width: 350px; height: 350px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                    <canvas id="accounts"></canvas>
                </div>
                <div style="width: 350px; height: 350px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                    <canvas id="gender"></canvas>
                </div>
                <div style="width: 400px; height: 300px; display: inline-block; margin-left: 50px; margin-right: 25px;">
                    <canvas id="age"></canvas>
                </div>
            </tr>
        </table>
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
>>>>>>> origin/master
        <br />
        <div>
            <h1 style="text-align: center">Activity Statistics</h1>
            <br />
            <div style="width: 350px; height: 350px;display: inline-block;margin-left: 200px;margin-right: 50px;">
                <canvas id="activities"></canvas>
            </div>
            <div style="width: 500px; height: 300px;display: inline-block;margin-left: 100px; margin-right: 25px;">
                <canvas id="time"></canvas>
            </div>
        </div>
    </div>


</asp:Content>
