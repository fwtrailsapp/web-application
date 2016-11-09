using System;
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
        public string sqlData;

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void Access_DB(object sender, EventArgs e)
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
                            sqlData += reader.GetValue(i).ToString();
                        }

                    }
                }

                con.Close();
            }
        }
    }
}