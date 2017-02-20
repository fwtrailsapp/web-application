<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="User_Login_CS.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <link rel="stylesheet" href="css/screen.css" type="text/css" media="screen" title="default" />
    <!--  jquery core -->
    <script src="js/jquery/jquery-1.4.1.min.js" type="text/javascript"></script>

    <!-- Custom jquery scripts -->
    <script src="js/jquery/custom_jquery.js" type="text/javascript"></script>

    <!-- MUST BE THE LAST SCRIPT IN <HEAD></HEAD></HEAD> png fix -->
    <script src="js/jquery/jquery.pngFix.pack.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $(document).pngFix();
        });
    </script>


    <style>
        .tablehead {
            display: table-cell;
            vertical-align: inherit;
            font-weight: bold;
            text-align: center;
        }
    </style>
</head>
<body id="login-bg">

    <div id="login-holder">

        <!-- start logo -->
        <div id="logo-login">
            <%--  <a href="index.html">
                <img src="images/shared/logo.png" width="156" height="40" alt="" /></a>--%>
            <h1 style="color: white">Greenways Portal </h1>
        </div>
        <!-- end logo -->

        <div class="clear"></div>

        <!--  start loginbox ................................................................................. -->
        <div id="loginbox">

            <div id="login-inner">
                <form id="form1" runat="server">
                    <asp:Login ID="Login1" runat="server" OnAuthenticate="ValidateUser">
                        <LayoutTemplate>
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td class="table-head" style="padding-bottom: 10px"><b>Username</b>
                                    </td>
                                    <td>
                                        <asp:TextBox CssClass="login-inp" ID="UserName" runat="server" autocomplete="disabled"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="UserNameRequired" runat="server" ControlToValidate="UserName" ErrorMessage="User Name is required." ToolTip="User Name is required." ValidationGroup="Login1">*</asp:RequiredFieldValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="table-head" style="padding-bottom: 10px"><b>Password</b>
                                    </td>
                                    <td>
                                        <asp:TextBox CssClass="login-inp" ID="Password" runat="server" TextMode="Password"></asp:TextBox>
                                        <asp:RequiredFieldValidator ID="PasswordRequired" runat="server" ControlToValidate="Password" ErrorMessage="Password is required." ToolTip="Password is required." ValidationGroup="Login1">*</asp:RequiredFieldValidator>

                                    </td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td valign="top">
                                        <input type="checkbox" class="checkbox-size" id="login-check" /><label for="login-check">Remember me</label></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>
                                        <asp:Button ID="LoginButton" CssClass="submit-login" runat="server" CommandName="Login" Text="Log In" ValidationGroup="Login1" />

                                    </td>
                                </tr>
                            </table>
                        </LayoutTemplate>

                        <%--<div>
                            <asp:Literal ID="FailureText" runat="server" EnableViewState="False"></asp:Literal>
                        </div>--%>
                    </asp:Login>
                </form>
            </div>
            <div class="clear"></div>
            <a href="" class="forgot-pwd">Forgot Password?</a>
        </div>
        <!--  start forgotbox ................................................................................... -->
        <div id="forgotbox">
            <div id="forgotbox-text">Please send us your email and we'll reset your password.</div>
            <!--  start forgot-inner -->
            <div id="forgot-inner">
                <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <th>Email address:</th>
                        <td>
                            <input type="text" value="" class="login-inp" /></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>
                            <input type="button" class="submit-login" /></td>
                    </tr>
                </table>
            </div>
            <!--  end forgot-inner -->
            <div class="clear"></div>
            <a href="" class="back-login">Back to login</a>
        </div>
        <!--  end forgotbox -->

    </div>
</body>
</html>
