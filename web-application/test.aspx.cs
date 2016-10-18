using System.Data;
using System.Configuration;
using ConfigurationSettings = System.Configuration.ConfigurationManager;
using System.Data.SqlClient;
using System.Web.Security;
using System;
using System.Web.UI;

namespace web_application
{
    public partial class test : System.Web.UI.Page
    {

        public string sqlData;
        protected void Page_Load()
        {

        }

        protected void DBConnectTest(object sender, EventArgs e)
        {
            ConnectionStringSettings settings;
            settings = System.Configuration.ConfigurationManager.ConnectionStrings["GreenwayConnection"];
            string constr = settings.ConnectionString;

            using (SqlConnection con = new SqlConnection(constr))

            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.CommandText = "SELECT * FROM dbo.Account";
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
