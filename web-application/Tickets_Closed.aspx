<%@ Page Title="Closed Tickets" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tickets_Closed.aspx.cs" Inherits="web_application.Tickets_Closed" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/tickets.css" rel="stylesheet" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://use.fontawesome.com/4193f3e666.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Closed Tickets</h1>
        <hr style="width: 98%; color: lightgray;" />
    </div>

    <!-- end page-heading -->

    <div id="clsoedTicketList" style="background-color: #D3D9DF; height: 100%; width: 850px; margin: 0 auto;">
        <%=closedTicketList %>
    </div>

    <%-- Modals --%>

    <div id="commentDialog" title="Comment">

        <textarea id="commentTextArea" style="resize: none" rows="8" cols="42" disabled="disabled"></textarea>
    </div>

    <!-- The Image Modal -->
    <div id="myModal" class="modal" style="overflow: hidden; z-index: 1000;">

        <!-- The Close Button -->
        <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>

        <div style="height: auto; width: 450px; margin: 0 auto;">
            <!-- Modal Content (The Image) -->
            <img class="modal-content" id="img01">
        </div>

        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
    </div>
</asp:Content>
