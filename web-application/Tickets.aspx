<%@ Page Title="Tickets" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tickets.aspx.cs" Inherits="web_application.Tickets" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="css/tickets.css" rel="stylesheet" />
    <script type="text/javascript" src="js/ModalForm.js"></script>
    <script type="text/javascript" src="js/CommentModal.js"></script>
    <script type="text/javascript" src="js/CloseModal.js"></script>
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

                <p class="validateTips">All form fields are required.</p>

                <form id="createTicketForm">
                    <label for="createTitle">Title</label>
                    <input type="text" name="createTitle" id="createTitle" value="" class="text ui-widget-content ui-corner-all" maxlength="75">
                    <label for="createDesc">Description</label>
                    <textarea name="createDesc" id="createDesc" class="text ui-widget-content ui-corner-all" maxlength="150" style="height: 100px; width: 300px; resize: none;"></textarea>
                    <label for="createType">Type</label>
                    <select name="createType" id="createType" class="text ui-widget-content ui-corner-all">
                        <option>Water</option>
                        <option>Pothole</option>
                        <option>Tree</option>
                        <option>Trash</option>
                        <option>Other</option>
                    </select>
                </form>
            </div>

            <div id="commentDialog" title="Comment">

                    <textarea id="commentTextArea" style="resize:none" rows="8" cols="42" disabled="disabled"></textarea>
            </div>

            <div id="closeDialog" title="Warning">
            </div>

            <%=ticketList %>
        </div>
</asp:Content>
