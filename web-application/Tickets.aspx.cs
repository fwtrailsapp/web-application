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
        string active = "ACTIVE";
        string title = "No Title";
        string date = "Unknown";
        string username = "unknown";
        string notes = "";
        string typeColor = "blue";

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
                                title = reader.GetValue(i + 6).ToString();
                                date = reader.GetValue(i + 7).ToString();
                                username = reader.GetValue(i + 8).ToString();
                                notes = reader.GetValue(i + 9).ToString();
                                typeColor = reader.GetValue(i + 10).ToString();

                                //Remove spaces for the color
                                typeColor = typeColor.Replace(" ", "");

                                buttonId = "CloseButton" + rowNumber;
                                ticketList = string.Concat(ticketList,
                                   $"<div id=\"ticketDiv\">"
                                       + "<table style=\"width:100%; height:95%;border-collapse: separate !important;\">"
                                           + "<tr style=\"width:300px\">"
                                               + $"<td id=\"r1c1\" > #{id} </td>"
                                               + $"<td id=\"r1c2\" colspan=\"2\"><b>{title}</b></td>"
                                               + $"<td id=\"r1c3\" style=\"background-color:{typeColor};\"><b>{type}</b></td>"
                                           + "</tr>"
                                           + "<tr>"
                                               + $"<td id=\"r2c1\"><b>ACTIVE</b></td>"
                                               + $"<td id=\"r2c2\" rowspan=\"2\" colspan=\"2\">{desc}</td>"
                                               + $"<td style=\"width:150px;text-align:center;\" rowspan=\"2\"> <input type=\"button\" class=\"btn-close\" id=\"{buttonId}\" value=\"Close\" runat=\"server\"/> </td>"                                                  
                                           + "</tr>"
                                           + "<tr id=\"r3c1\">"
                                               + $"<td> </td>"
                                           + "</tr>"
                                           + "<tr style=\"width:150px\">"
                                               + $"<td class=\"bottom-left-ticket-border\">" 
                                                    + "<div style=\"float:left;overflow:hidden;width:28%;border-right:1px solid black;text-align:center;padding-right:10px;\">"
                                                        + "<a href=\"\"> <i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i></a>" 
                                                    + "</div>"
                                                    + "<div style=\"float:left;overflow:hidden;width:36%;border-right:1px solid black;text-align:center;\">"
                                                        + "<a href=\"\"> <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></a>"
                                                    + "</div>"
                                                    + "<div style=\"float:left;overflow:hidden;width:36%;border-right:1px solid black;text-align:center;\">"
                                                        + "<a href=\"\"> <i class=\"fa fa-comment\" aria-hidden=\"true\"></i></a>"
                                                    + "</div>"
                                               + "</td>"
                                               + $"<td class=\"bottom-center-ticket-border\" style=\"text-align:center;\">Submitted: {date}</td>"
                                               + $"<td class=\"bottom-center-ticket-border\">Submitted by: {username}</td>"
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