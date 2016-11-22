using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace web_application
{
    public partial class Tickets : System.Web.UI.Page
    {
        public string ticketList;
        string id = "-1";
        string type = "Unknown";
        string desc = "No Description.";
        string buttonId = "";
        int rowNumber = 0;

        public string sqlData;

        protected void Page_Load(object sender, EventArgs e)
        {
            string constr = @"Data Source = (localdb)\MSSQLLocalDB; Initial Catalog = LoginDB; Integrated Security = True";
            using (SqlConnection con = new SqlConnection(constr))

            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.CommandText = "SELECT * FROM dbo.Ticket";
                cmd.CommandType = CommandType.Text;
                cmd.Connection = con;

                con.Open();

                SqlDataReader reader = cmd.ExecuteReader();
                // Data is accessible through the DataReader object here.

                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        for (int i = 0; i < reader.FieldCount; i++)
                        {

                            if (i == 0)
                            {
                                id = reader.GetValue(i).ToString();
                                type = reader.GetValue(i + 1).ToString();
                                desc = reader.GetValue(i + 2).ToString();
                                buttonId = "CloseButton" + rowNumber;
                                ticketList = string.Concat(ticketList,
                                   $"<div style=\"background-color:white;border: 1px solid lightgrey; border-radius: 15px; box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4); height: 102px; margin-top: 25px\">"
                                       + "<table style=\"width:100%; height:95%;border-collapse: separate !important;\">"
                                           + "<tr style=\"width:300px\">"
                                               + $"<td style=\"text-align:center;\" rowspan=\"2\"> #{id} </td>"
                                               + $"<td style=\"text-align:left;padding: 5px 0 0 15px;font-size:18px;rowspan=\"2\"\"><b>There is a lot of water on the pathway.</b></td>"
                                               + $"<td> </td>"
                                               + $"<td style=\"text-align:center;background-color:blue;color:white; -moz-border-radius:0 15px 0 0;-webkit-border-radius:0 15px 0 0;width:150px;height:20px;\"><b>{type}</b></td>"
                                           + "</tr>"
                                           + "<tr>"                                               
                                               + $"<td style=\"text-align:left;padding:0 0 0 15px;\" rowspan=\"2\">{desc}</td>"                                               
                                               + $"<td> </td>"
                                               + $"<td> </td>"
                                               + $"<td> </td>"
                                           + "</tr>"
                                           + "<tr>"
                                               + $"<td style=\"text-align:center; background-color: green; color:white;width:125px;\"><b>ACTIVE</b></td>"
                                               + $"<td> </td>"
                                               + $"<td style=\"width:150px;text-align:center;\" rowspan=\"2\"> <input type=\"button\" class=\"btn-close\" id=\"{buttonId}\" value=\"Close\" runat=\"server\"/> </td>"                                                  
                                           + "</tr>"
                                           + "<tr style=\"height:24px;\">"
                                               + $"<td> </td>"
                                               + $"<td> </td>"
                                           + "</tr>"
                                           + "<tr style=\"width:150px\">"
                                               + $"<td class=\"bottom-left-ticket-border\" style=\"border-right: solid 1px lightgrey;\"><a>View Image</a> </td>"
                                               + $"<td class=\"bottom-center-ticket-border\">Submitted: Today</td>"
                                               + $"<td class=\"bottom-center-ticket-border\">Submitted By: User </td>"
                                               + $"<td class=\"bottom-right-ticket-border\" style=\" \"> </td>"
                                           + "</tr>"
                                       + "</table>"
                                   + "</div>");
                            }
                        }
                        rowNumber++;
                    }
                }
                con.Close();
            }
        }

        public void Access_DB(object sender, EventArgs e)
        {

        }
    }
}