<%@ Page Title="Tickets" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tickets.aspx.cs" Inherits="web_application.Tickets" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="css/tickets.css" rel="stylesheet" />
    <script type="text/javascript" src="js/ModalForm.js"></script>
    <script src="https://use.fontawesome.com/4193f3e666.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Active Tickets</h1>
        <hr style="width: 98%; color: lightgray;" />
    </div>

    <!-- end page-heading -->

    <div style="background-color: #D3D9DF; height: 100%; width: 850px; margin: 0 auto;">

        <div style="text-align: right;">
            <a href="" id="btnCreateTicket">Create a Ticket</a>

            <div id="dialog" title="Create a Ticket">
                <%--Form Here--%>
            </div>

            <%=ticketList %>
        </div>
</asp:Content>
