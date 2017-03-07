<%@ Page Title="Home" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="web_application.Default" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">
    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Welcome to the Dashboard</h1>
        <hr style="width: 98%; color: lightgray;" />
    </div>
    <!-- end page-heading -->

    <div style="height: 100%; margin: 0 auto;">
        <div style="float: right; margin-right: 50px;">
            <h2 style="margin-left: 75px;">Aggregated Statistics</h2>
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
            </div>
        </div>
    </div>

</asp:Content>
