<%@ Page Title="" Language="C#" MasterPageFile="~/Master.Master" AutoEventWireup="true" CodeBehind="Tickets.aspx.cs" Inherits="web_application.Tickets" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/tickets.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentBody" runat="server">

    <!--  start page-heading -->
    <div id="page-heading">
        <h1>Tickets</h1>
    </div>

    <!-- end page-heading -->

    <div style="background-color: #D3D9DF; height: 100%; width: 850px; margin: 0 auto;">

        <%=ticketList %>

        <%--<div style="background-color:lightgray;border-top: 1px solid black; border-bottom: 1px solid black; height: 100px; margin-top: 25px">
            <asp:Table runat="server" Width="95%" Height="100%">
                <asp:TableRow>
                    <asp:TableCell>
                       #1
                    </asp:TableCell>
                    <asp:TableCell>
                       Ticket Name
                    </asp:TableCell>
                    <asp:TableCell>
                        Type: Pot Hole
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                       
                    </asp:TableCell>
                    <asp:TableCell Width="600px">
                        <a>View Image</a>
                    </asp:TableCell>
                    <asp:TableCell>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                       
                    </asp:TableCell>
                    <asp:TableCell >
This is a random description. I hope you like it. Blah blah, haha. Keep typing the description, please keep typing. Is this 140 characters?
                    </asp:TableCell>
                    <asp:TableCell HorizontalAlign="Right">
                        <input type="button" id="Button2" value="Close"
                            runat="server" />
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        Created: Today
                    </asp:TableCell>
                    <asp:TableCell>
                    </asp:TableCell>
                    <asp:TableCell>
                    </asp:TableCell>
                </asp:TableRow>
            </asp:Table>
        </div>--%>

        <%--<div style="background-color:lightgray;border-top: 1px solid black; border-bottom: 1px solid black; height: 100px; margin-top: 25px">
            <asp:Table runat="server" Width="95%" Height="100%">
                <asp:TableRow>
                    <asp:TableCell>
                       #2
                    </asp:TableCell>
                    <asp:TableCell>
                       Ticket Name
                    </asp:TableCell>
                    <asp:TableCell>
                        Type: Water
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                       
                    </asp:TableCell>
                    <asp:TableCell Width="600px">
                        <a>View Image</a>
                    </asp:TableCell>
                    <asp:TableCell>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                       
                    </asp:TableCell>
                    <asp:TableCell >
This is a random description. I hope you like it. Blah blah, haha. Keep typing the description, please keep typing. Is this 140 characters?
                    </asp:TableCell>
                    <asp:TableCell HorizontalAlign="Right">
                        <input type="button" id="Button1" value="Close"
                            runat="server" />
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        Created: Today
                    </asp:TableCell>
                    <asp:TableCell>
                    </asp:TableCell>
                    <asp:TableCell>
                    </asp:TableCell>
                </asp:TableRow>
            </asp:Table>
        </div>--%>
    </div>
</asp:Content>
