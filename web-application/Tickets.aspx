<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tickets.aspx.cs" Inherits="web_application.Tickets" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Tickets</h1>
    </div>
    <!-- end page-heading -->


        <input type="button" id="btn2" value="submit"
            onserverclick="Access_DB"
            runat="server" />


    <div>
        <h1>Tickets:</h1>Accounts:
        <%=sqlData%>
    </div>
</asp:Content>
