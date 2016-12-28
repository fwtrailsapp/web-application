<%@ Page Title="Closed Tickets" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tickets_Closed.aspx.cs" Inherits="web_application.Tickets_Closed" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/tickets.css" rel="stylesheet" />
    <script src="https://use.fontawesome.com/4193f3e666.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Closed Tickets</h1>
        <hr style="width: 98%; color: lightgray;" />
    </div>

    <!-- end page-heading -->

    <div style="background-color: #D3D9DF; height: 100%; width: 850px; margin: 0 auto;">

        <%=closedTicketList %>
    </div>
</asp:Content>
